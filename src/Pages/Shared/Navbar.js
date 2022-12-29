import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  
  const handleLogout = () => {
    logout()
      .then(() => { })
      .catch(err => console.error(err));
  }
  const menue = <>
    <li>
      <Link to="#" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Home</Link>
    </li>
    {
      user?.uid ? <>
        <li>
          <button onClick={handleLogout} className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Logout</button>
        </li>
      </> :
        <>
          <li>
            <Link to="/signin" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Sign in</Link>
          </li>
          <li>
            <Link to="/login" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Login</Link>
          </li>
        </>
    }

    <li>
      <Link to="/addTask" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Add Task</Link>
    </li>
    <li>
      <Link to="/task" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Tasks</Link>
    </li>
    {/* <li>
      <Link to="/myTask" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">My Task</Link>
    </li>
    <li>
      <Link to="/completedTask" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Completed Task</Link>
    </li> */}
  </>
  return (
    <div>
      <nav className=" text-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">

            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Mission</span>
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className=" w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

              {menue}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;