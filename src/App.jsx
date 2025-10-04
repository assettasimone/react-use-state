import { useState } from 'react'
import languages from './data/languages.js'

function App() {
  const [currentLang, setCurrentLang] = useState(1)




  return (
    <>
      <div className="container ">
        <header className='m-4 text-center'>
          <h1 className='mb-4'>Learn web Development</h1>

          {languages.map(item => (
            <button className='btn btn-primary me-2' key={item.id} onClick={() => setCurrentLang(item.id)} >{item.title}</button>
          ))}
        </header>
        <main className=''>
          {languages.map(item => (

            currentLang === item.id && (
              <div key={item.id} className="card col-5 m-auto">
                <div className="card-header">
                  <h3 className='card-title'>{item.title}</h3>
                </div>
                <div class="card-body">

                  <p className='card-text'>{item.description}</p>
                </div>
              </div>

            )
          ))}
        </main>
      </div>
    </>
  )
}

export default App
