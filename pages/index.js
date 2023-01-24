import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import Loading from "../components/loading";

export default function Home() {
  const [titleInput, setTitleInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const title = 'Movie Titles to Emojis'

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
        <link rel="icon" href="/popcorn.png" />
      </Head>

      <main className={styles.main}>
        <img src="/popcorn.png" className={styles.icon} />
        <h1>{title}</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter a movie title"
            value={titleInput}
            autoComplete='off'
            onChange={(e) => setTitleInput(e.target.value)}
          />
          <input type="submit" value="Generate emojis" disabled={!titleInput.length} />
        </form>
        {loading && <Loading />}
        <div className={styles.results}>
          {results.map((obj, index) => (
            <div className={styles.result} key={index}>
              {obj.data}
              <p>{obj.label}</p>
            </div>
          ))}
        </div> 
      </main>
    </div>
  );
}
