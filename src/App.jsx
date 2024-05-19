import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const url = "https://randomuser.me/api/?results=5"
  const [datosPersona, setDatosPersona]=useState([])
  const [error, setError] = useState(null);

  const fetchRandomUsers = async()=>{
    try{
      const lectura = await fetch(url)
      if(!lectura.ok){
        throw new Error(`HTTP error! status: ${lectura.status}`)
      }
      const datos = await lectura.json()
      const newPersonas = datos.results.map(persona => (
        <article key={persona.login.uuid}>
          <h3>{persona.name.first} {persona.name.last}</h3>
          <img src={persona.picture.medium} alt={`${persona.name.first} ${persona.name.last}`} />
          <p>Country: {persona.location.country} {persona.nat}</p>
          <p>State: {persona.location.state}</p>
          <p>City: {persona.location.city}</p>
          <p>Email: {persona.email}</p>
        </article>
      ))
      setDatosPersona(newPersonas)
      setError(null)
    } catch(error) {
      setError(`Failed to fetch data: ${error.message}`)
      setDatosPersona([])
    }
  }

  useEffect(()=>{
    fetchRandomUsers()
  },[])
  
  return (
    <>
    <main>
      <header>
        <h1>Random users generator</h1>
        <button type="button" onClick={fetchRandomUsers}>+</button>
      </header>
      <section>
        {error ? <p className='onError'>{error}</p> : datosPersona}
      </section>
    </main>
    <footer>
      <h3>Powered by <a href="https://randomuser.me">https://randomuser.me</a></h3>
      <h4>Copyright Notice</h4>
      <p>All randomly generated photos were hand picked from the authorized section of <a href="http://uifaces.com">UI Faces</a>. Please visit <a href="https://web.archive.org/web/20160811185628/http://uifaces.com/faq">UI Faces FAQ</a> for more information regarding how you can use these faces.</p>
    </footer>
    </>
  )
}
export default App
