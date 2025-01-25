import React, { useState } from 'react'
import axios from "axios"

function App() {

  const [ data, setData ] = useState("")
  const [summary, setSummary] = useState("")
  const [loading, setLoading] = useState(false)

  const handleUrlChange = (e) => {
    setData(e.target.value)
  }

  // console.log(url)

  const handleClick = async () => {
    try {
      setLoading(true)
      const options = {
        method: 'GET',
        url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
        params: {
          url: data,
          lang: 'en',
          engine: '2'
        },
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-key': 'dcf67b0885mshb575ab13e81274dp19a061jsn8e8685fd7dd8',
          'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
        }
      };

      const responseData = await axios.request(options)
      // console.log(responseData?.data?.summary)
      setSummary(responseData?.data?.summary)
      setData("")
      setLoading(false)
    } catch (error) {
      console.log(error?.message)
      setLoading(false)
    }
  }

  return (
    <div
      className='h-screen w-screen bg-slate-200 flex items-center justify-center'
    >
      <div
        className='flex items-center justify-center flex-col gap-y-10'
      >
        <h1
          className='text-4xl font-bold text-slate-700'
        >Article Summarizer</h1>
        <div
          className='flex gap-x-2'
        >
          <input type="url" className='bg-white w-96 h-10 border border-black outline-none px-5 rounded-lg' onChange={handleUrlChange} value={data}/>
          <button className='bg-slate-700 text-slate-100 px-2 py-2 rounded-lg cursor-pointer font-semibold hover:bg-zinc-800' onClick={handleClick}>
            {
              loading ? "Please Wait" : "Click"
            }
          </button>
        </div>

        <p
          className='w-[680px] text-justify'
        >
          {
            summary?.trim() === "" ? "You have to provide an url for getting a summary from it!" : summary
          }
        </p>
      </div>
    </div>
  )
}

export default App