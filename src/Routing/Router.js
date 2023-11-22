import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MYROUTES } from './Routes'
import Home from '../compontens/Home'
import Favorite from '../compontens/Favorite'
import SingleUser from '../compontens/SingleUser'
import AddUser from '../compontens/AddUser'

export default function Router() {
  return (
    <Routes>
       <Route exact path={MYROUTES.HOME}  element={<Home />}/> 
       <Route exact path={MYROUTES.FAVORITE}  element={<Favorite />}/> 
       <Route exact path={MYROUTES.USER}  element={<SingleUser />}/> 
       <Route exact path={MYROUTES.ADD}  element={<AddUser />}/> 
    </Routes>
  )
}
