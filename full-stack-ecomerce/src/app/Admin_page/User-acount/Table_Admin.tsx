import React from 'react';
import { FaUser } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../Component/data/Data';
import Remove from './remove';
import { fetchUsers } from '../../../utile/Data';
const orders = async() => {
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/api/Sign_in", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        // Handle non-successful responses (e.g., 404 Not Found, 500 Internal Server Error)
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data_user = await response.json();
      console.log(data_user);
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  }
  
  // Call the function
  fetchData();
  
 

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between px-4 pt-4'>
        <h2>user all(30)</h2>
        <h2>user table</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>name</span>
            <span className='sm:text-left text-right'>Email</span>
            <span className='hidden sm:grid'>password</span>
            <span className='hidden sm:grid'>action</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
              >
                <div className='flex'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <FaUser className='text-purple-800' />
                  </div>
                  <div className='pl-4'>
                    <p className='text-gray-800 font-bold'>
                    mossab
                    </p>
                    <p className='text-gray-800 text-sm'>chaib</p>
                  </div>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>
                  <span
                    className={
                    'bg-blue-200 p-2 rounded-lg'
                      
                    }
                  >
                    mossabchb230@gmail.com
                  </span>
                </p>
                <p className='hidden md:flex'>MOSSAB2004</p>
                <div className='sm:flex hidden justify-between items-center'>
                  <p><Remove/></p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;