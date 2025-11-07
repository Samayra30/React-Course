import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task,setTask] =useState([])


  const sumbitHandler = (e) => {
    e.preventDefault();

    const copyTask=[...task]
    copyTask.push({title,details})
    setTask(copyTask)
    console.log(task)
    setTitle("")
    setDetails("")
  };

  const  deleteNote=(idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  

  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          sumbitHandler(e);
        }}
        className="flex gap-5 lg:w-1/2 flex-col items-start p-10 "
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        <input
          className="px-5 py-2 w-full font-medium outline-none h-16 border-2 rounded"
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          
        />
        <textarea
          type="text"
          className="px-5 py-2 h-32 w-full font-medium outline-none border-2 rounded"
          placeholder="Write Details"
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />
        <button className="bg-white active:scale-95 w-full font-medium outline-none text-black px-5 py-2 h-14 rounded">
          Add Note
        </button>
      </form>
      <div className=" lg:w-1/2 lg:border-l-2 bg-gray-800 p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-10 mt-5 h-90% overflow-auto">
         {task.map(function(elem,idx){
          return<div key={idx} className="flex justify-between items-start flex-col relative h-60 w-46 bg-cover pt-9 px-4 rounded-2xl text-black pb-5 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
            <div>
              <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
            <p className="mt-3 leading-tight font-medium text-gray-500">{elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx)
            }} className="w-full font-bold text-xs rounded py-1 text-white bg-red-400 cursor-pointer active:scale-95">Delete</button>
            
          </div>
         })}
        </div>
      </div>
    </div>
  );
};

export default App;
