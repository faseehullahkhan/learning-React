import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className=' h-[85vh] py-8 px-18 gap-10 flex items-center'>
      <LeftContent/>
      <RightContent users = {props.users}/>
    </div>
  )
}

export default Page1Content