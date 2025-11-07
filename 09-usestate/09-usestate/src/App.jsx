import React, { useState } from 'react'

const App = () => {
  const[num,setNum]=useState({user:'Sam',age:20})
  
  return (
    <div>
      <form>
        <input type='text' placeholder='Enter name'></input>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
