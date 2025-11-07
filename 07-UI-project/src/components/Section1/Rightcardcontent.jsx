import React from 'react'

const Rightcardcontent = (props) => {
  return (
    <div className=' h-full absolute w-full top-0 left-0 p-10 flex flex-col justify-between'>
        <h1 className='bg-white rounded-full h-12 w-12 font-semibold flex justify-center items-center '>{props.id+1}</h1>
        <div>
            <p className='text-xl leading-normal text-white mb-10 text-shadow-blue-50' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, excepturi sed! Atque magni at sit.</p>
            <div  className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className=' text-white font-medium  px-5 py-1 rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
  )
}

export default Rightcardcontent
