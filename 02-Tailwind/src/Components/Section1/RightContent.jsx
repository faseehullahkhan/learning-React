import React from 'react'
import Card from './Card'

const RightContent = (props) => {
  return (

    <div className=' h-full w-3/4 flex flex-row gap-10 overflow-x-auto '>
      {props.users.map(function(elem, idx){
        return <Card key={idx} img= {elem.img} id = {idx} tag = {elem.tag} intro = {elem.intro} color = {elem.color}/>
      })}
    </div>
  )
}

export default RightContent