import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar.tsx";
import Hero from "./Components/Hero.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
        <Hero/>

    </div>
  )
}

export default App
