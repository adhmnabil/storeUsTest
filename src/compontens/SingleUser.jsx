import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getResource } from '../network'
import { useDispatch } from 'react-redux'
import { setLoader } from '../Store/common'

export default function SingleUser() {
  const params = useParams()
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)

  useEffect(() => {
    dispatch(setLoader(true))
    getResource(
        `/${params.id}`,
        (success)=>{
             dispatch(setLoader(false))
             setUser(success)
        },
        (fail)=>{
            dispatch(setLoader(false))
            setUser(fail)
        }
    )
  }, [])
  
  if(user === null){
    return null
  }else if(user.status == 404){
    return(
      <div className='text-center text-3xl font-bold'>
        No User Found
      </div>
    )
  }

  return (
    <section className='mx-5'>
      <div>
        <label htmlFor="name">Name : </label>
        <span>{user.name}</span>
      </div>
      <div>
        <label htmlFor="Email">Email: </label>
        <span>{user.email}</span>
      </div>
      <div>
        <label htmlFor="Phone">Phone: </label>
        <span>{user.phone}</span>
      </div>
      <div>
        <label htmlFor="Phone">Website: </label>
        <span>{user.website}</span>
      </div>
      <div>
        <label htmlFor="Phone">Address: </label>
        <span>{user.address.city}</span>
      </div>
    </section>
  )
}
