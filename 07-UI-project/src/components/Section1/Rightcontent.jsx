import React from 'react'
import RightCard from './RightCard'

const Rightcontent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 p-4 flex flex-nowrap gap-10 overflow-x-auto'>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} intro={elem.intro} tag={elem.tag}/>
      })}
    </div>
  )
}

export default Rightcontent
