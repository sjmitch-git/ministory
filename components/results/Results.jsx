import { useContext } from 'react'

import GlobalContext from '../../contexts/globalContext'

const Results = () => {

    const {results} = useContext(GlobalContext)

    return (
        <div className='flex flex-col-reverse gap-16 mb-8'>
            {results.map((obj, index) => (
                <div
                    className='text-center text-4xl md:text-6xl'
                    key={index}>
                    {obj.data}
                    <p className='text-2xl font-bold pt-6 opacity-80 uppercase'>{obj.label}</p>
                </div>
            ))}
        </div>
    )

}

export default Results