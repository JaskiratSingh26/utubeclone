import React from 'react'
import Slidebar from './Sidebar'
import Video from './Video'
import { Link } from 'react-router-dom'

export default function Home({ data }) {
  // console.log(data  ,'home se')


  return (
    <div className='flex   ' >



      <Slidebar  />  

      <div  className='  max-h-screen overflow-x-hidden  overflow-y-scroll'>

      
      <div className='   mt-5  sm:ml-[10vh]    md:grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-6  p-2   overflow-y-scroll  overflow-x-hidden   md:p-1 m-1 ' >
        {
          data.map((item, index) => {
            
            
            if (item.type !== 'video') return (
              
              // <h1>loading .......</h1>
              
              <div>

        <div className='     h-full   '>

        <Link to={`/video/${'ecdaDecwxJ0'}`}>
          <img   className='h-48 w-full  sm:w-56 sm:bg-slate-400 rounded-xl hover:rounded-none duration-200 overflow-hidden' src='https://i.ytimg.com/vi/jITF0VALtXI/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLB3fYeaMi46sk2frPRu-1TSpI24SQ' alt="" />
          </Link>

          {/* for below in video.thumbnails */}
          <div className='mt-2 p-3 overflow-hidden flex  align-middle  items-center  '>
            <div className=' mr-1'>
              {/* profile pic */}
              {/* <Link to={`/video/${video.video.id}`}>

          
    <img
      className='h-12 w-12 rounded-full'
      src={video.video.author?.avatar?.[0]?.url}
      alt=""
    />
  </Link> */}
              <img className='h-14 w-28 rounded-2xl' src= 
"https://yt3.ggpht.com/ytc/AIdro_nrDyb10wBEKwaSWJlaL6gZxjz8OS27Yda1q4WTjFXclw=s68-c-k-c0x00ffffff-no-rj" alt=""  />
            </div>
            <div className=' ml-3'>
              {/* content  */}

              <h3  className='text-sm  font-bold'>
              Bhai Bhupinder Singh Ji । Hazoori Ragi Sri Darbar Sahib । GURDWARA SAHIB FREMONT/ USA  KIRTAN
              </h3>
              {/* <p>{video.video.descriptionSnippet}</p> */}

            </div>
          </div>
    <span  className='ml-16   text-lg  font-bold'> Nirmal Singh Sohal</span>

          <div className='flex  justify-evenly '>
            {/* views */}
            <span className='text-sm  font-bold' >290k views</span>
            {/* upload time */}
            <span> month ago</span>
          </div>

        </ div>


      </div>
            )
            return (
              
              <Video key={index} video={item} />
              
              
            )
          })
        }
      </div>

        </div>
    </div>



  )
}
