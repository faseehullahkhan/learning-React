import React from 'react'
import Carddata from './Carddata'

const Card = (props) => {
  return (
    <div className='w-1/2 rounded-3xl bg-cover bg-center flex flex-col justify-between px-10 bg-black/50' style={{backgroundImage : `url(${props.img})`,backgroundBlendMode: "darken",}}>
      <Carddata num = {props.id} tag = {props.tag} para ={props.intro} color = {props.color}/>
    </div>
  )
}

export default Card