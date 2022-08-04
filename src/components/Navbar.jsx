import React from 'react'
import { BsLightningFill } from 'react-icons/bs'


const Navbar = () => {
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap justify-between items-center mx-auto w-full">
  <a href="https://flowbite.com/" class="flex items-center h-6 md:mr-[6.4rem] sm:mr-0 sm:h-9">
      <BsLightningFill class="w-8 h-8 mr-auto hover:text-indigo-300 transition-all" />
  </a>
  <div class="flex md:order-2">
      <button type="button" class="text-black border-[1px] border-black hover:bg-indigo-300 font-medium rounded-[5px] text-sm px-8 py-2.5 text-center mr-3 md:mr-0 transition-all">Contact</button>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-indigo-300 md:p-0 transition-all" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded md:hover:bg-transparent md:hover:text-indigo-300 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all">Portfolio</a>
      </li>
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded md:hover:bg-transparent md:hover:text-indigo-300 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
  )
}

export default Navbar