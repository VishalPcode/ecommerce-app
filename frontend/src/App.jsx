import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [jokes, setjokes]=useState([])

  useEffect(() =>{
    axios.get('/api/jokes')
      .then((response) => {
        setjokes(response.data)
        console.log('Jokes fetched :', response.data);
        
      })
      .catch((error) => {
        console.error('Error fetching :', error)
      })
  }, [])

  return (
    <>
     <h1>here is my jokes</h1>
     {jokes.map((jokes) => (
       <div key={jokes.id} className="joke">
         <h2>{jokes.joke}</h2>
       </div>
     ))}
    </>
  )
}

export default App
