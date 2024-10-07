

import { abbreviateNumber } from "js-abbreviation-number";

import React from 'react'
import { Link } from "react-router-dom";


export default function Video({ video }) {
  // console.log(video)
  if (!video) {
    return null; // or some default component
  }
  return (
    <div className='' >
      {/* //link */}
      {/* <Link to={`/video/${video.video?.videoId}`}> */}
      
      
      <div className=" m-4" >

        <div className='     h-full   '>

        <Link to={`/video/${video.video?.videoId}`}>
          <img   className='h-48 w-full  sm:w-56 sm:bg-slate-400 rounded-xl hover:rounded-none duration-200 overflow-hidden' src={video.video?.thumbnails[0]?.url} alt="" />
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
              <img className='h-14 w-28 rounded-2xl' src={video.video.author?.avatar?.[0]?.url} alt=""  />
            </div>
            <div className=' ml-3'>
              {/* content  */}

              <h3  className='text-sm  font-bold'>
                {video.video.title}
              </h3>
              {/* <p>{video.video.descriptionSnippet}</p> */}

            </div>
          </div>
    <span  className='ml-16   text-lg  font-bold'>{video.video?.author.title}</span>

          <div className='flex  justify-evenly '>
            {/* views */}
            <span className='text-sm  font-bold' >{`${abbreviateNumber(video.video?.stats?.views,2)}`}k views</span>
            {/* upload time */}
            <span>{video.video?.publishedTimeText}</span>
          </div>

        </ div>


      </div>
     
    </div>
  )
}

// function truncateText(text, maxLength) {
//   return text.substring(0, maxLength) + (text.length > maxLength ? '...' : '');
// }