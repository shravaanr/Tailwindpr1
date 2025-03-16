import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    
    <div className='max-w-[1170px] mx-auto'>
    <nav className="display-flex-grow shadow-lg pl-2 pb-2 pt-2 py-3 border-b">
      <div className="flex justify-between gap-2">
        <div className='pt-4'>
        <img src={reactLogo} className="h-[55px]" alt="React Logo" />
</div>
<div className="flex space-x-6 pr-6 ">
        <button className="bg-white text-[25px] text-black px-4 py-2 rounded-lg font-bold hover:text-gray-100 duration-200 hover:bg-cyan-400">About </button>
        <button className="bg-white text-[25px] text-black px-4 py-2 rounded-lg font-bold hover:text-gray-100 duration-200 hover:bg-cyan-400">Services</button>
        <button className="bg-white text-[25px] text-black px-4 py-2 rounded-lg font-bold hover:text-gray-100 duration-200 hover:bg-cyan-400" >Login</button>
        </div>
      </div>

    </nav>
    <div className="grid grid-cols-2 gap-8 ">
        <div className="font-bold text-[50px] p-[50px] pr-[75px] pt-[175px]">This is React
        <div className="text-gray-500 text-[25px] font-thin justify-between">A small versatile library made using JavaScript</div>
        <button className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:text-gray-100 duration-200 hover:bg-cyan-400 text-[25px]">Know more</button>
        </div>
        <div className="p-[90px] animate-spin">
          <img src={reactLogo} className="w-full h-auto pb-[80px]" alt="Vite Logo" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-12 ">
  <div className="flex flex-col items-center">
<div className="shadow-lg p-4 rounded-lg hover:scale-110 transition duration-500">
    <img src={reactLogo} alt="React Logo" className="w-full h-[75px] animate-bounce " />
    <div className="text-[25px] font-bold">React is a powerful JavaScript library for building user interfaces, especially single-page applications (SPAs) </div></div>
  </div>
  <div  className="flex flex-col items-center">
  <div className="shadow-lg p-4 rounded-lg  hover:scale-110  transition duration-300">
  <img src={viteLogo} alt="React Logo" className="w-full h-[75px] animate-bounce " />
  <div className="text-[25px] font-bold">Vite is a lightning-fast build tool and development server for modern web projects, especially for frameworks like React, Vue. </div></div>
  </div>
  

  <div  className="flex flex-col items-center">
  <div className="shadow-lg p-4 rounded-lg   hover:scale-110  transition duration-500">
  <img src={reactLogo} alt="React Logo" className="w-full h-[75px] animate-bounce " />
  <div className="text-[25px] font-bold"> React is an efficient JavaScript library for creating fast and scalable user interfaces, with many characterstics</div>
  </div>
  </div>




</div>


<div className="font-semibold text-[50px] p-[50px] pr-[75px] pt-[115px]">Snapshot of React and Vite</div>
<div className="grid grid-cols-2 gap-12 ">
       
        <div className="">
          <img src="https://c8.alamy.com/comp/2AEMY9Y/visual-studio-code-extension-snippets-react-graphql-2AEMY9Y.jpg" className="w-full h-[425px] pb-[80px] hover:scale-110 duration-300 rounded-lg" alt="Vite Logo" />
        </div>
           
        <div >
          <img src="https://reactjsexample.com/content/images/2022/04/Code-2022-02-13-45.jpg" className="w-full h-auto pb-[80px]  rounded-lg hover:scale-110 duration-300" alt="Vite Logo" />
        </div>
      </div>



      <div className="font-semibold text-[50px] p-[50px] pr-[75px] pt-[40px]">About US </div>

<div className="grid grid-cols-2 gap-2 ">
  
 <div className="font-semibold text-[35px] p-[10px] pr-[55px] ">
  This is the simple landing page developed using Tailwind CSS
  <button className="bg-white text-black px-4  py-4 rounded-lg font-bold hover:text-gray-100 duration-200 hover:bg-cyan-400 text-[25px]">Know more</button>
  </div>
 <div  >
  
  
 <form className="mt-6 space-y-4">
      <div className="text-2xl font-bold">FIll the form</div>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full p-2 border border-gray-300 rounded-lg"
      />
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-2 border border-gray-300 rounded-lg"
      />
      <button
        type="submit"
        className= "bg-white text-black  px-5 py-2 rounded-lg  hover:text-gray-100  duration-200  font-bold hover:bg-cyan-400"
      >
        Submit
      </button>
    </form>
  
  
  
  
  
  </div> 
  </div>

      
   



</div>

    </>
  )
}

export default App
