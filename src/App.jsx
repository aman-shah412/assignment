import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import CreateForm from './Components/CreateForm'

function App() {

  return (
    <>
    <Navbar/>
    <CreateForm/>
    </>
  )
}

export default App
