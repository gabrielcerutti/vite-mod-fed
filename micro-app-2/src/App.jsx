import { useState } from 'react'
import useSession from 'hostApp/store';
import './App.scss'

function App() {
  const [user,] = useSession();
  const [count, setCount] = useState(0)

  return (
    <div className='app-2'>
      <h4 className="logged-user">
        {user === '' && 'No user logged in'}
        {user !== '' && 'Logged user ' + user}
      </h4>
      <h2 className='title'>Micro App 2</h2>
      <div className='card'>
        <button className='btn' onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
