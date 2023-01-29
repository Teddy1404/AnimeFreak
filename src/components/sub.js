import React from 'react'
import naruto from './naruto.gif'
import luffy from './luffy-meydsama.gif'
import tanj from './demon-slayer-kimetsu-no-yaiba.gif'
import eren from './eren.gif'
import bleach from './bleach.gif'
import gon from './gon.gif'
const sub = () => {
  return (
    <>
    <div  id= '#SUB' className="lg:hidden sub p-1 my-2 text-white">
   <a href="https://zoro.to/naruto-shippuden-355?ref=search" target="_blank"><img className='rounded' src={naruto} alt="" /></a> 
    <p className='p-2 mx-1 font-bold'>1: Naruto Shippuden</p>
   </div>

   <div id= '#SUB' className="lg:hidden sub p-1 my-2 text-white">
    <a href="https://zoro.to/one-piece-100?ref=search" target="_blank"><img className='rounded' src={luffy} alt="" /></a>
    <p className='p-2 mx-1 font-bold'>2: One piece</p>
   </div>
   
   <div id= '#SUB' className="lg:hidden sub p-1 my-2 text-white">
   <a href="https://zoro.to/demon-slayer-kimetsu-no-yaiba-47?ref=search" target="_blank"><img className='rounded' src={tanj} alt="" /></a> 
    <p className='p-2 mx-1 font-bold'>3: Demon Slayer</p>
   </div>

   <div id= '#SUB' className="lg:hidden sub p-1 my-2 text-white">
   <a href="https://zoro.to/attack-on-titan-112?ref=search" target="_blank"><img className='rounded' src={eren} alt="" /></a> 
    <p className='p-2 mx-1 font-bold'>4: AOT</p>
   </div>

   

   
   <div id= '#SUB' className="lg:hidden sub p-1 my-2 text-white">
   <a href="https://zoro.to/bleach-806?ref=search"><img className='rounded' src={bleach} alt="" /></a> 
    <p className='p-2 mx-1 font-bold'>5: Bleach</p>
   </div>

   
   <div id= '#SUB' className="lg:hidden sub p-1 my-2 text-white">
   <a href="https://zoro.to/hunter-x-hunter-128?ref=search" target="_blank"><img className='rounded' src={gon} alt="" /></a> 
    <p className='p-2 mx-1 font-bold'>6: Hunter x Hunter</p>
   </div>
    </>
   

   
  )
}

export default sub
