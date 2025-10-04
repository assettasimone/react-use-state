import { useState } from 'react'
import languages from './data/languages.js'

function App() {
  const [currentLang, setCurrentLang] = useState(null)




  return (
    <>
      <div className="container ">
        <header className='m-4 text-center'>
          <h1 className='mb-4'>Learn web Development</h1>

          {languages.map((item, index) => (
            <button className='btn btn-primary me-2 mb-2' key={item.id} onClick={() => setCurrentLang(index)} >{item.title}</button>
          ))}
        </header>
        <main className=''>

          {currentLang == null ? <p className=' text-center'>Nessun linguaggio selezionato</p> :
            <div className="card col-lg-8 col-md-12  m-auto">

              <div className="card-header">
                <h3 className='card-title'>{languages[currentLang].title}</h3>
              </div>
              <div class="card-body">
                <p className='card-text'>{languages[currentLang].description}</p>
              </div>
            </div>
          }

        </main>
      </div>
    </>
  )
}

export default App
