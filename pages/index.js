import Head from "next/head";
import { useState } from "react";
import Loading from "../components/loading";

export default function Home() {
  const [titleInput, setTitleInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const title = 'Movie Titles to Emojis'
  const description = 'Convert your favourite movie titles into emojis using the latest in AI technology!'
  const keywords = ''

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true)
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movie: titleInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

     // setResult(data.result);
      setResults([...results, {data: data.result, label: titleInput}]);
      setTitleInput("");
      setLoading(false)
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error.message);
      setLoading(false)
    }
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel="icon" href="/brand.png" />
      </Head>

      <main className='flex flex-col items-center p-16'>
        <img src="/brand.png" className='w-[98px]' />
        <h1 className="text-4xl my-12 opacity-80 font-bold">{title}</h1>
        <form onSubmit={onSubmit} className='flex flex-col items-center mb-16 bg-slate-100 p-4 rounded'>
          <input
            type="text"
            name="movie"
            className="border border-cyan-500 focus:border-orange-500 rounded p-2 mb-6 text-xl w-96"
            placeholder="Enter a movie title"
            value={titleInput}
            autoComplete='off'
            onChange={(e) => setTitleInput(e.target.value)}
          />
          <button type="submit" disabled={!titleInput.length} className='text-xl w-full bg-teal-400 disabled:bg-slate-400 text-white p-4 rounded text-center uppercase'>
            {loading ? <div className="w-[24px] mx-auto"><Loading /></div> : "Generate emojis"}
          </button>
        </form>
        <div className='flex flex-col-reverse gap-16'>
          {results.map((obj, index) => (
            <div className='text-center text-6xl' key={index}>
              {obj.data}
              <p className="text-xl capitalize pt-4">{obj.label}</p>
            </div>
          ))}
        </div> 
        <div className="text-xl">
          <p>{description}</p>
        </div>
      </main>
    </div>
  );
}
