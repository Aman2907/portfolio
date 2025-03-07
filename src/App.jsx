import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './Components/Navbar'
import {Banner } from './Components/Banner'
import { Skills } from "./Components/Skills";
import { Projects} from "./Components/Projects";
import { Contact } from './Components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Components/Footer';
import { Newsletter } from './Components/Newsletter'
import { Experience } from './Components/Experience'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <NavBar />
      <Banner />
      <Experience />
      <Skills />
      <Projects />
      {/* <Newsletter /> */}
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App
