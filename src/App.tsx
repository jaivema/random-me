import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import type { ErrorState, Filters, User } from './types/user';

function App() {
  const [randomUsers, setRandomUsers] = useState<User[]>([])
  const [error, setError] = useState<ErrorState>({ error: null })
  const [isLoading, setIsLoading] = useState(true)
  const [filters, setFilters] = useState<Filters>({
    numberUsers: 4,
    gender: "",
    nat: "",
  });

/**
 * Fetches random user profiles from the Random User Generator API based on the specified filters.
 * Updates the state with the fetched user data or sets an error if the fetch fails.
 *
 * @async
 * @function
 * @returns {Promise<void>} A promise that resolves when the fetch operation is complete.
 * @throws {Error} If the fetch operation fails, an error is caught and the error state is updated.
 */
  async function fetchRandomUsers(): Promise<void> {
    setIsLoading(true);
    try {
      let url = `https://randomuser.me/api/?results=${filters.numberUsers}`;
      if (filters.gender) url += `&gender=${filters.gender}`;
      if (filters.nat) url += `&nat=${filters.nat}`;

      const response = await fetch(url)
      const data = await response.json()
      setRandomUsers(data.results)
      setError({ error: null })
    } catch (error) {
      if (error instanceof Error) {
        setError({
          error: {
            message: error.message,
            name: error.name || ''
          }
        });
      }
      setRandomUsers([])
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setRandomUsers([])
    fetchRandomUsers()

  }, [filters])

  return (
    <div className="container">
      <header>
        <h1>Random users generator</h1>
      </header>
      <div className="content">
        <aside className="sidebar">
          <Sidebar filters={filters} onFiltersChange={setFilters} />
        </aside>
        <main>
          <section>
            {isLoading && <p className='onLoading'>Loading...</p>}
            {error.error ?
              <ul className='onError'>
                <li><strong>{error.error.message}</strong></li>
                <li><strong>Name:</strong> {error.error.name}</li>
                <li><strong>Message:</strong> {error.error.message}</li>
              </ul>
              : randomUsers.map((user: User, index) => (
                <article key={index}>
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
