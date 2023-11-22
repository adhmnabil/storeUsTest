import './App.css';
import Router from './Routing/Router';
import { useSelector } from 'react-redux';
import Loader from './compontens/Loader';
import { Link } from 'react-router-dom';

function App() {

const selector = useSelector((state)=>state.common)

  return (
    <div> 
      {
        selector.loader && 
        <Loader />
      }
      <div className='flex justify-between'>
        <Link to={'/favorite'} 
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 m-5">
          Favorite
        </Link>
        <Link to={'/add'} 
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 m-5">
          add user
        </Link>
        <Link to={'/'} 
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 m-5">
          Home
        </Link>
      </div>
      <Router />
    </div>
  );
}

export default App;
