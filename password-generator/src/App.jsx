import { useState } from 'react'
import Requisite from './components/Requisite'
import './App.css'
import Disp from './components/Disp'


function App() {
  return (
    <>
      <div className='parent'>
        <div className='container'>
          <Requisite />
        </div>
        <div className='displayer'>
          <Disp />
        </div>
      </div>
    </>
  )
}

export default App
