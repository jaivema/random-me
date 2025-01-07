import './App.css'
import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'

function App() {
  const [numberUsers, setNumberUsers] = useState(3)
  const [randomUsers, setRandomUsers] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [filters, setFilters] = useState({
    gender: "",
    nat: "",
  });

  async function fetchRandomUsers() {
    setIsLoading(true);
    try {
      let url = `https://randomuser.me/api/?results=${numberUsers}`;
      if (filters.gender) url += `&gender=${filters.gender}`;
      if (filters.nat) url += `&nat=${filters.nat}`;

      const response = await fetch(url)
      const data = await response.json()
      setRandomUsers(data.results)
      setError(null)
    } catch (error) {
      console.error("Error fetching users:", error);
      setError(`Failed to fetch response: ${error.message}`)
      setRandomUsers([])
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchRandomUsers()
  }, [filters])

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
          <Sidebar filters={filters} setFilters={setFilters} />
        </aside>
        <main>
          <section>
            {isLoading && <p className='onLoading'>Loading...</p>}
            {error ? <p className='onError'><strong>{error}</strong></p> : randomUsers.map((user, index) => (
              <article key={user.login.uuid}>
              <h3>{user.name.first} {user.name.last}</h3>
              <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
              <p>Country: {user.location.country} {user.nat}</p>
              <p>State: {user.location.state}</p>
              <p>City: {user.location.city}</p>
              <p>Email: {user.email}</p>
            </article>
            ))}
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
