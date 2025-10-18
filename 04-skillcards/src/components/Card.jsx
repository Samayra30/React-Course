import React from 'react'

const Card = (props) => {
  return (
    
      <div className="card">
        <div className="top">
          <p>available</p>
          <p>{props.pay}</p>
        </div>
        <div className="center">
          <img src={props.img}/>
          <h2>{props.name}</h2>
          <h4>{props.work}</h4>
          <p>{props.speciality}</p>
          <div className="skills">
            <p>{props.skill1}</p>
            <p>{props.skill2}</p>
            <p>{props.skill3}</p>
            <p>+{props.num}</p>
          </div>
          <div className="dess">
          <p>{props.des}</p>
          </div>
        </div>
        <div className="bottom">
          <h4>VIEW PROFILE</h4></div>
        
      </div>
    
  )
}

export default Card
