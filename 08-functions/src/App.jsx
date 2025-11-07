import React from 'react'


const App = () => {
 
  return (
    <div onWheel={(elem)=>{
      console.log(elem)
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
    </div>
  )
}

export default App
