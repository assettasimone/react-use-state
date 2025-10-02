import { useState } from 'react'
import languages from './data/languages.js'

function App() {


  return (
    <>
      {languages.map(item => (
        <button key={item.id}>{item.title}</button>

      ))}

    </>
  )
}

export default App
