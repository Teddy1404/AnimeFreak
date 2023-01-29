import React from 'react'

const navbar = () => {
  return (
    <>
  <div className="container mx-0 h-12 bg-slate-500 text-white">
    <ul className='flex mx-2 justify-end space-x-8 px-8'>
      <li className='py-2'><i className=" fa-solid fa-magnifying-glass"></i> </li>
      <li  className='py-2'><i className="fa-brands fa-discord"></i></li>
    
    </ul>
  </div>
    </>
  )
}

export default navbar
