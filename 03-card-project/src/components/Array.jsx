import React from 'react'

const Array = () => {
    const arr=[
        {user:'sam'},
        {user:"anjali"},
        {user:'Rani'}
    ]
  return (
    arr.map(function(a){
       return <h1>{a.user}</h1>
    })
  )
}

export default Array
