import React, { useState } from 'react'
import { MdHome, MdOutlineVideoLibrary, MdSubscriptions, MdHistory, MdWatchLater, MdThumbUp, MdExpandMore, MdMenu } from 'react-icons/md'
import { SiYoutubeshorts } from 'react-icons/si'
import { FaFire } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";
import { BiMovie } from "react-icons/bi";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
const SidebarItem = ({ Icon, text, isActive = false }) => (
    <li className={`flex items-center px-3 py-2 rounded-lg cursor-pointer ${isActive ? 'bg-gray-100' : 'hover:bg-gray-100'}`}>
        <Icon className="w-6 h-6 mr-4" />
        <span className="text-sm font-medium">{text}</span>
    </li>
)

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(true)

    let content = [
        {
            id: 1,
            name: ' Trending',
            icon: <FaFire />
        },
        {
            id: 2,
            name: ' Sopping ',
            icon: <FaShoppingBag />
        }
        , {
            id: 3,
            name: ' Music ',
            icon: <FaMusic />,
        }
        , {
            id: 4,
            name: ' Movies ',
            icon: <BiMovie />,
        }
    ]

    return (
        <div className=''>
            <div className="  md:p-0 md:m-0 md:text-sm  lg:p-2 lg:m-0  md:w-36    lg:w-54  max-sm:hidden  sm:hidden   md:block  px-6    mt-2  h-[calc(100vh-6.625rem)]  flex  bg-white p-4     overflow-x-hidden ">
        
                {/* Mobile menu button */}
                <button
                    className="md:hidden fixed top-4 left-4 z-20"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <MdMenu className="w-6 h-6" />
                </button>

                {/* Sidebar */}
                <aside className={`
        fixed left-0 top-0 z-10 h-full bg-white transition-all duration-300 ease-in-out
        ${isExpanded ? 'w-64' : 'w-20'}
        md:relative md:translate-x-0
        ${isExpanded ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
                    <nav className="h-full overflow-y-auto ">
                        
                        <ul className="space-y-2 py-4">
                          
                  
                            <SidebarItem Icon={MdHome} text="Home" isActive />
                            <SidebarItem Icon={SiYoutubeshorts} text="Shorts" />
                            <SidebarItem Icon={MdSubscriptions} text="Subscriptions" />
                            <hr className="my-4 border-gray-200" />
                            <SidebarItem Icon={MdOutlineVideoLibrary} text="Library" />
                            <SidebarItem Icon={MdHistory} text="History" />
                            <SidebarItem Icon={MdWatchLater} text="Watch Later" />
                            <SidebarItem Icon={MdThumbUp} text="Liked Videos" />
                            <hr />

                        </ul>
                        {
                content.map((item) => {
                    return (
                        <>
                        <div  key={item.id} className="  " >
          <ul className='flex p-4 space-x-6  hover:bg-gray-100 duration-150  hover: rounded-full'>
            
                            <div className='   size-6 cursor-pointer'>
                                
                                {item.icon }


                            </div>
                              <span>{item.name}</span>
                                                        
          </ul>
                        </div>
                        </>
        
                    )
                })
            }
      <span  className='flex    p-4 space-x-6  hover:bg-gray-100 duration-150  hover: rounded-full'>
      
      <FaRegArrowAltCircleDown  className='size-5' />
      <h3>
       
      Show more
        </h3>  
      </span>

      <hr></hr>
            
                    </nav>
                </aside>

                {/* Main content area */}
                {/* <main className="flex-1 p-4 md:ml-20">
                    <h1 className="text-2xl font-bold mb-4">YouTube Content</h1>
                    <p>Your main content goes here.</p>
                </main> */}
            </div>

           
        </div>
    )
}