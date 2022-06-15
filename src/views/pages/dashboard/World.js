import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavWorld from '../../components/SectionWorld/NavWorld/NavWorld'
import WorldPosts from '../../components/SectionWorld/WorldPosts/WorldPosts'
import WorldUsers from '../../components/SectionWorld/WorldUsers/WorldUsers'
import WorldTravels from '../../components/SectionWorld/WorldTravels/WorldTravels'
import UserPage from './UserPage'

function World() {
  return (
    <div>
   
    <NavWorld/>

    <Routes>
      <Route exact path='/posts' element={<WorldPosts/>}/>
      <Route exact path='/users' element={<WorldUsers/>}/>
      <Route exact path='/travels' element={<WorldTravels />}/>
      <Route exact path="/users/:id" element={<UserPage/>} />
    </Routes>

    </div>
  )
}

export default World