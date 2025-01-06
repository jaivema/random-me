import './App.css'
import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'

function App() {
  const requestURL = "https://randomuser.me/api/"
  const resultsFilter = "?results"
  const [numberUsers, setNumberUsers] = useState(3)
  const [randomUser, setRandomUser] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  async function fetchRandomUsers() {
    const pathURL = `${requestURL}${resultsFilter}=${numberUsers}`
    let response = ''
    try {
      response = await fetch(pathURL)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} ${response.url}`)
      }
      const data = await response.json()
      const newUsers = data.results.map(user => (
        <article key={user.login.uuid}>
          <h3>{user.name.first} {user.name.last}</h3>
          <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
          <p>Country: {user.location.country} {user.nat}</p>
          <p>State: {user.location.state}</p>
          <p>City: {user.location.city}</p>
          <p>Email: {user.email}</p>
        </article>
      ))
      setRandomUser(newUsers)
      setIsLoading(false)
      setError(null)
    } catch (error) {
      setError(`Failed to fetch response: ${error.message}`)
      setIsLoading(false)
      setRandomUser([])
    }
  }

  useEffect(() => {
    fetchRandomUsers()
  }, [])

  return (
    <div className="container">
      <header>
        <h1>Random users generator</h1>
        <input type="number" onChange={(e) => setNumberUsers(e.target.value)}
          value={numberUsers}
          placeholder='number'
        />
        <button type="button" onClick={fetchRandomUsers}>Submit &gt; </button>
      </header>
      <div className="content">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <main>
          <section>
            {isLoading && <p className='onLoading'>Loading...</p>}
            {error ? <p className='onError'><strong>{error}</strong></p> : randomUser}
          </section>
        </main>
      </div>
        <footer>
          <h3>Powered by <a href="https://randomuser.me">https://randomuser.me</a></h3>
          <h4>Copyright Notice</h4>
          <p>
            All randomly generated photos were hand picked from the authorized section of
            <a href="http://uifaces.com"> UI Faces</a>. Please visit
            <a href="https://web.archive.org/web/20160811185628/http://uifaces.com/faq"> UI Faces FAQ </a>
            for more information regarding how you can use these faces.
          </p>
        </footer>
    </div>
  )
}
export default App
