import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Favorite() {
    const [favorites, setFavorites] = useState([]);
    const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const navigate = useNavigate()
    useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
    }, [])
    const toggleFavoriteInLocalStorage = (user) => {
        const isUserInFavorites = favorites.some((favorite) => favorite.id === user.id);
        if (isUserInFavorites) {
          const updatedFavorites = favorites.filter((favorite) => favorite.id !== user.id);
          setFavorites(updatedFavorites);
          localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
          const updatedFavorites = [...favorites, user];
          setFavorites(updatedFavorites);
          localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
    }
    if(favorites.length === 0){
        return(
            <div className='text-center text-3xl font-bold'>
                No Favorite users for now 
            </div>
        )
    }
  return (
    <div>
         <h2 className='p-5 text-4xl'>Favorite</h2>
         <table className="min-w-full divide-y divide-gray-200 my-5 text-center">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider "
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
              Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
              Phone Number
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
              Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {
                        favorites.map((user , index) => (
                          <tr key={index} className='cursor-pointer'>
                            <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                            <td className={`px-6 py-4 whitespace-nowrap text-center`}>
                                <div className={` p-2 w-[50%] m-auto`}>
                                {user.email}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                            <button 
                            type="button" 
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            onClick={()=>navigate(`/user/${user.id}`)}
                            >
                                View
                            </button>
                            <button 
                            type="button"
                            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            onClick={()=>toggleFavoriteInLocalStorage(user)}
                            >
                                {existingFavorites.some((favorite) => favorite.id === user.id)
                                    ? 'Remove from favorites'
                                    : 'Add to favorites'
                                }
                            </button>
                            </div>    
                            </td>
                          </tr>
                        ))
            }
      
          </tbody>
        </table>
    </div>
  )
}
