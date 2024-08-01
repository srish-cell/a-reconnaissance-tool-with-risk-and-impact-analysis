import React,{useState} from 'react'

const Home = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Welcome to Recon-Tool</h1>
      <h2> about our tool </h2>
      <h1> </h1>
      


      <h1> why this tool</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default Home
