import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const  users=[
    {
      img:'https://plus.unsplash.com/premium_photo-1661764601699-10c47be708aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro:'' ,
      color:'pink',
      tag:'Satisfied'
    },
    {
img:'https://plus.unsplash.com/premium_photo-1661749996118-799eff98b27d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687' ,
      intro:'' ,
      color:'lightseagreen',
      tag:'Underserved'
    },
    {
img: 'https://plus.unsplash.com/premium_photo-1661499894814-552676556099?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735',
      intro: '',
      color:'orange',
      tag:'Underbanked'
    },
    {
img: 'https://plus.unsplash.com/premium_photo-1661645312997-53c1204fae36?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro: '',
      color:'lightblue',
      tag:'Satisfied'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
