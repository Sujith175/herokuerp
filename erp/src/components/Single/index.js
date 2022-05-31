import React from 'react'
import Sidebar from '../Sidebar'
import SingleJob from '../SingleJob'
import { SingleDesign } from './SingleElements'


const Single = () => {
  return (
    <>
    <SingleDesign>
        <SingleJob/>
        <Sidebar/>
    </SingleDesign>
    </>
  )
}

export default Single