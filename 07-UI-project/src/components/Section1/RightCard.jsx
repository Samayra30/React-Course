import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const RightCard = (props) => {
  return (
    <div className='h-full w-70 overflow-hidden shrink-0 relative rounded-4xl'>
      <img className='h-full w-full object-cover relative shrink-0 overflow-hidden' src={props.img}/>
      <Rightcardcontent id={props.id} color={props.color} tag={props.tag}/>
    </div>
  )
}

export default RightCard
