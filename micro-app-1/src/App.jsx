import './App.scss'
import Button from './Button';
import useSession from 'hostApp/store';

function App() {

  const [user,] = useSession();
  return (
    <div className='app-1'>
      <h4 className="logged-user">
        {user === '' && 'No user logged in'}
        {user !== '' && 'Logged user ' + user}
      </h4>
      <h2 className='title'>Micro App 1</h2>
      <div className='card'>
        <Button />
      </div>
    </div>
  );
}

export default App
