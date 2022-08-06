import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { BsCameraVideo } from 'react-icons/bs';
import HeroImg from './assets/hero-2.png'

const Home = () => {
  return ( 
    <section class="bg-white h-full mt-10">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-5">
            <h1 class="max-w-2xl mb-4 font-extrabold leading-none md:text-5xl xl:text-5xl ">High-quality
            Video Conferencing With No Strings Attach.</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">A minimalist and clutter free video chat platform. Just you and the person on the other side.
            
            </p>
         <div className="flex items-center"> 
           <a href="#" class="inline-flex items-center justify-center px-8 py-4 mr-3 text-base font-medium text-center text-white rounded-[5px] bg-black hover:bg-indigo-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 transition-all">
               <BsCameraVideo className="w-5 h-5 ml-2 mr-2"/>
               Create a Call
           </a>
           <a href="#" class="inline-flex items-center justify-center px-3 py-3 text-base font-medium text-center text-white bg-indigo-300 border-black rounded-lg hover:bg-indigo-500 hover:text-white transition-all">
               <FaGithub className='w-[2rem] h-[2rem]'/>
           </a>
           <span className='ml-3'>Visit Repository</span>
         </div>   
        </div>
        <div class="hidden lg:mt-0 lg:col-span-7 lg:flex">
            <img src={HeroImg} alt="mockup"/>
        </div>                
    </div>
</section> 
  )
}

export default Home