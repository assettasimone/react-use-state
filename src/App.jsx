import { useState } from 'react'
import languages from './data/languages.js'
import LangCard from './components/LangCard.jsx'

function App() {
  const [currentLang, setCurrentLang] = useState(null)




  return (
    <>
      <div className="container ">
        <header className='m-4 text-center'>
          <h1 className='mb-4'>Learn web Development</h1>

          {
            languages.map((item, index) => (
              <button className={`btn me-2 mb-2 btn-${index == currentLang ? 'success' : 'light'}`} key={item.id} onClick={() => setCurrentLang(index)} >{item.title}</button>
            ))
          }
        </header>

        {currentLang == null ? <p className=' text-center'>Nessun linguaggio selezionato</p> :

          <LangCard title={languages[currentLang].title} description={languages[currentLang].description} />
        }
      </div >
    </>
  )
}

export default App
