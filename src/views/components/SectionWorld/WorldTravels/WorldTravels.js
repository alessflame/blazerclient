import React from 'react'
import { useSelector } from 'react-redux'
import SectionTravels from '../../SectionTravels/SectionTravels'

function WorldTravels() {

  const {travels}= useSelector(state=>state);

  return (
    <div>

   <SectionTravels travels={travels}/>

    </div>
  )
}

export default WorldTravels