import React from 'react'

const Card = (props) => {
     console.log(props.user)
  return (
    <div>
       <div className="card">
        <img src={props.img}/>
        <h1>{props.user}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
