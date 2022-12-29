import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
const TaskLayout = () => {
    return (
        <div>
            <Navbar/>

            
<aside class="w-64" aria-label="Sidebar">
   <div class="overflow-y-auto py-4 px-3  text-white rounded dark:bg-gray-800">
    
      <ul class="space-y-2">
         <li>
            <a href="#" class="flex items-center p-2  font-normal  rounded-lg   dark:hover:bg-gray-700">
               {/* <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg> */}
               <span class="ml-3">Dashboard</span>
            </a>
         </li>
    
      </ul>
   </div>
</aside>
        <h3>Hello world</h3>
        </div>
    );
};

export default TaskLayout;