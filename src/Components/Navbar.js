import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillYoutube } from "react-icons/ai";
import { TbZoom } from "react-icons/tb";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaVideoSlash } from "react-icons/fa";
import { GoBellFill } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom"
import Home from './Home'



function Navbar({ value, setvalue }) {


    let [inputvalue, setinputvalue] = useState('')

    return (  
        <div  className=''>

       
        <div className='    bg-black  flex  justify-between  align-middle   text-white  ' >
        {/* max-sm:bg-orange-300   sm:bg-red-600   md:bg-black  lg:bg-slate-600  xl:bg-yellow-400    */}

            <div className='   mt-2 cursor-pointer  w-64   flex justify-around  align-middle '   >
                <GiHamburgerMenu className='  max-sm:hidden  max-sm:size-5 max-sm:mt-5 hover:size-8  md:size-6   sm:size-5  sm:mt-5  sm:hover:size-6  '  />
                <div className='   max-sm:hidden  flex justify-evenly  align-middle '>
                    {/* <AiFillYoutube  onClick={(e)=>{
                    alert('going to home page')
                        
                    }} className='m-2 size-6  hover:size-7'  /> */}

                    <Link to="/"> {/* Add Link component here */}
                        <AiFillYoutube onClick={(e) => {
                            alert('going to home page')   
                        }} className='  max-sm:mt-5    size-6  hover:size-7   md:size-6   sm:mt-5  sm:size-5  sm:hover:size-6 ' />
                    </Link>
                    <span className='max-sm:mt-5  sm:mt-5   sm:ml-2 max-sm:ml-2   max-sm:text-base text-2xl  sm:text-base  '>
                        hint/xx
                    </span>
                </div>

            </div>
            {/* md:border border-b-white  rounded-full     max-sm:border-none   sm:border-none   md:flex  md:mb-2  */}

            <div className='   max-sm:rounded-2xl   flex    sm:w-full  sm:items-center sm: justify-end  md:justify-center 
             '>
                <div className='   md:mt-4         md:border-2 md:border-white-500 md:rounded-full  p-1   flex  ' >
                    <input type='text' placeholder='**SEARCH*** ' className=  '   md:inline-flex        sm:hidden   md:w-[24vh]    lg:w-96   m-1 w-80  cursor-pointer   md:outline-none  bg-transparent   ' onChange={(e) => {
                        setinputvalue(e.target.value)
                    }} />
                    <button    className=' sm:flex sm:justify-end   md:flex' onClick={(e) => {
                        alert(`searching ..${inputvalue}. on utube clonne`)
                        setinputvalue(' ')
                        setvalue(inputvalue)

                    }} >
                        <TbZoom className='  max-sm:size-6 max-sm:mt-2  md:size-5    sm:size-10  sm:hover:size-6   hover:size-7 mt-2  mr-2 font-mono  cursor-pointer      size-6' />
                    </button>
                </div>

                <div className='  ml-4    cursor-pointer    rounded-full'>
                    <FaMicrophoneAlt className='  max-sm:hidden      md:size-6     sm:hidden mt-4  ml-4  mr-1 font-mono  cursor-pointer    size-6' />
                </div>
            </div>



            <div className='    md:flex    sm:hidden max-sm:hidden   w-48    flex  justify-end items-center  '>
                <div><FaVideoSlash className='  sm:mt-8  md:size-6   sm:size-5  sm:hover:size-6  cursor-pointer m-2 size-6  hover:size-7' /></div>
                <div><GoBellFill className='     sm:mt-8 md:size-6   sm:size-5  sm:hover:size-6 cursor-pointer m-2 size-6  hover:size-7' /></div>
                <div> <CgProfile className='       sm:mt-8  sm:m-2   md:size-6   sm:size-5  sm:hover:size-6  cursor-pointer  size-8  hover:size-9' /></div>
            </div>
        </div>
        </div>
    )
}

export default Navbar




