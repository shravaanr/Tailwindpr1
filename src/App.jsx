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
        <img src={reactLogo} alt="React Logo" />
</div>
<div className="flex space-x-6 pr-6 ">
        <button className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:text-gray-100 duration-200 hover:bg-cyan-400">About </button>
        <button className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:text-gray-100 duration-200 hover:bg-cyan-400">Services</button>
        <button className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:text-gray-100 duration-200 hover:bg-cyan-400" >Login</button>
        </div>
      </div>

    </nav>
    <div className="grid grid-cols-2 gap-8 ">
        <div className="font-bold text-[50px] p-[50px] pr-[75px] pt-[75px]">This is React
        <div className="text-gray-500 text-[25px] font-thin justify-between">A small versatile library made using JavaScript</div>
        <button className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:text-gray-100 duration-200 hover:bg-cyan-400 text-[25px]">Know more</button>
        </div>
        <div className="p-[70px]">
          <img src={reactLogo} className="w-full h-auto pb-[80px]" alt="Vite Logo" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
  <div className="flex flex-col items-center">
    <img src={reactLogo} alt="React Logo" className="w-full h-[35px]" />
  </div>
  <div>hello world</div>
  <div>hello world</div>
</div>


</div>

    </>
  )
}

export default App
