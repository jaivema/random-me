import { useEffect, useRef, useState } from 'react';
import './components/styles/App.css';
import { Sidebar, UserCard, UserModalCard, Pagination } from './components';
import { ErrorState, Filters, initFilters, PaginationState, initPagination, User } from './types/user';
import Loader from './components/Loader';


function App() {
  const [randomUsers, setRandomUsers] = useState<User[]>([])
  const [error, setError] = useState<ErrorState>({ error: null })
  const [isLoading, setIsLoading] = useState(true)
  const [filters, setFilters] = useState<Filters>(initFilters)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [pagination, setPagination] = useState<PaginationState>(initPagination)

  async function fetchRandomUsers(): Promise<void> {
    setIsLoading(true);
    setError({ error: null });
    try {
      let url = `https://randomuser.me/api/?results=${filters.numberUsers}&page=${pagination.page}`;
      if (filters.gender) url += `&gender=${filters.gender}`;
      if (filters.nat) url += `&nat=${filters.nat}`;
      if (filters.seed) url += `&seed=${filters.seed}`;
      console.info(url);
      const response = await fetch(url)
      const data = await response.json()
      setRandomUsers(data.results)
      setPagination(data.info)
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

  const handlePageChange = (page: number) => {
    setPagination({ ...pagination, page })
  }

  useEffect(() => {
    setRandomUsers([])
    fetchRandomUsers()
  }, [filters, pagination.page]);

  return (
    <div id="container">
      <header>
        <h1>Random users generator</h1>
      </header>
      <div id="content">
        <aside id="sidebar">
          <Sidebar filters={filters} onFiltersChange={setFilters} pagination={pagination} />
        </aside>
        <main>
          <section id="random-users">
            <div className="load-card">
              <Loader isLoading={isLoading} />
            </div>
            {error.error ?
              <ul className='onError'>
                <li><strong>{error.error.message}</strong></li>
                <li><strong>Name:</strong> {error.error.name}</li>
                <li><strong>Message:</strong> {error.error.message}</li>
              </ul>
              : randomUsers.map((user: User, index) => (
                <UserCard key={index} user={user} onClick={() => setSelectedUser(user)} />
              ))}
          </section>
        </main>
        {selectedUser && (
          <UserModalCard
            user={selectedUser}
            onClose={() => setSelectedUser(null)}
          />
        )}
      </div>
      <div id="paginator-section">
        {randomUsers.length > 1 ? <Pagination pagination={pagination} onChangePage={handlePageChange} /> : null}
      </div>
      <footer>
        <div id="footerContent">

          <h3>Powered by <a href="https://randomuser.me">https://randomuser.me</a></h3>
          <p>Copyright Notice @2024</p>
          <p>
            All randomly generated photos were hand picked from the authorized section of
            <a href="http://uifaces.com"> UI Faces</a>. Please visit
            <a href="https://web.archive.org/web/20160811185628/http://uifaces.com/faq"> UI Faces FAQ </a>
            for more information regarding how you can use these faces.
          </p>
        </div>
      </footer>
    </div>
  )
}
export default App;
