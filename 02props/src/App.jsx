import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='Parent'>
     <Card user='Saniya' age={18} img='https://plus.unsplash.com/premium_photo-1759728838623-ebeccf966507?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'/>
     <Card user='Samayra' age={20} img='https://images.unsplash.com/photo-1733254729824-39e7f36bed36?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974'/>
     <Card user='Rani' age={21} img='https://plus.unsplash.com/premium_photo-1759793984013-dd5c1b087a09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'/>
     <Card user='Varsha' age={19} img='https://images.unsplash.com/photo-1757105388976-9c829ccd0013?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1970'/>
     
    </div>
  )
}

export default App
