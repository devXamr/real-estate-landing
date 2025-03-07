import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar.tsx";
import Hero from "./Components/Hero.tsx";
import PageSelection from "./Components/PageSelection.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
        <Hero/>
      <PageSelection/>

    </div>
  )
}

export default App
