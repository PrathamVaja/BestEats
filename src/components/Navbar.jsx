import React, { useState } from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { FaUserFriends } from 'react-icons/fa'
import { MdFavorite, MdHelp, MdWallet } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'

const Navbar = (props ) => {
  const [nav , setNav] = useState(false);

  
  return (
   
    
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/*left side  */}
      <div className='flex items-center'>
        <div onClick={() => {setNav(!nav)}} className='cursor-pointer'>
        <AiOutlineMenu size={30} />
        </div>

        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
            Best <span className='font-bold'>Eats</span>
        </h1>

        <div className='hidden lg:flex items-center bg-gray-300 rounded-full p-1 text-[14px]'>
            <p className='bg-black text-white rounded-full p-1 text-[14px]'>Delivery</p>
            <p className='p-2'>Pickup</p>
        </div>
      </div>

        {/*Search input */}

        <div className='flex items-center   bg-gray-300 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
          <AiOutlineSearch size={25} />
          <input className='bg-transparent focus:outline-none p-2 w-full'  type="text" placeholder='Search foods' />
        </div>

         {/*cart button */}

         <button className=' rounded-full bg-black text-white hidden md:flex items-center py-2 '>
          <BsFillCartFill size={20} className='mr-2'/>Cart 
         </button>
         

          {/*mobile menu */}

           {/*overlay */}
           {nav ?   <div className='bg-black/80 left-0 top-0 fixed z-10 w-full h-screen'>  </div>: ''}
         

            {/*Side drower menu */}  

            <div className={nav ? 'bg-white w-[300px] h-screen z-10 left-0 top-0 fixed duration-500' : 'bg-white w-[300px] h-screen z-10 left-[-100%] top-0 fixed duration-300'} >
              <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='right-4 top-4 absolute cursor-pointer'/>
              <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
              <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                  <li className='text-xl py-4 flex  items-center'><TbTruckDelivery size={25} className='mr-4'/>Order</li>
                  <li className='text-xl py-4 flex  items-center'><MdFavorite size={25} className='mr-4'/>Favorites</li>
                  <li className='text-xl py-4 flex  items-center'><MdWallet size={25} className='mr-4'/>Wallet</li>
                  <li className='text-xl py-4 flex  items-center'><MdHelp size={25} className='mr-4'/>Help</li>
                  <li className='text-xl py-4 flex  items-center'><AiFillTag size={25} className='mr-4'/>Promotions</li>
                  <li className='text-xl py-4 flex  items-center'><BsFillSaveFill size={25} className='mr-4'/>Best One </li>
                  <li className='text-xl py-4 flex  items-center'><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>
                </ul>
              </nav>
            </div>

    </div>
  )
}

export default Navbar
