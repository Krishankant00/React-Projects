import React from 'react'

function App() {
  return (
    <div className='h-screen w-screen flex '>
      <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
        <a className='py-2 px-3 border border-blue-300 rounded mb-3 text-blue-400' href="">Add new Product</a>
        {/* <hr className='w-[70%]'/> */}
        <h1 className=' mb-3 w-[80%] font-semibold'>Category Filter</h1>
        <ul className=' w-[80%]'>
          <li className=' mb-2 flex items-center ' > <span className='mr-2 rounded-full w-[15px] h-[15px] bg-blue-300'></span> cat 1</li>
          <li className=' mb-2 flex items-center ' > <span className='mr-2 rounded-full w-[15px] h-[15px] bg-red-300'></span> cat 2</li>
          <li className=' mb-2 flex items-center ' > <span className='mr-2 rounded-full w-[15px] h-[15px] bg-green-300'></span> cat 3</li>
          <li className=' mb-2 flex items-center ' > <span className='mr-2 rounded-full w-[15px] h-[15px] bg-yellow-300'></span> cat 4</li>
        
        </ul>
      </nav>
      <div className='h-full w-[85%] bg-red-400'>
        
        <div className='w-[18%] h-[25vh] card m-5 border shadow rounded-md overflow-hidden'>
          {/* <div className='w-full h-50 bg-[url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)] bg-contain bg-no-repeat'></div> */}
          <img className='w-full h-45' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        </div>

      </div>
    </div>
  )
}

export default App