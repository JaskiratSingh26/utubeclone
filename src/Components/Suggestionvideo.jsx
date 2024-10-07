import { abbreviateNumber } from "js-abbreviation-number";

import React from 'react'

import { Link } from "react-router-dom";


export default function Suggestionvideo({video}) {
    // console.log('suggestionvideo', video)
    // console.log('suggestionvideo  conetnets val', video)
    // let {contents}=video
  



  return(
  
<div  >
    {


video?        
  video.contents?.map((item,index)=>{
     if(item.type!=='video') return false
     
      return(
     


<div  className=   "     max-sm:h-[22vh]   sm:h-[18vh]  md:h-[18vh]   md:w-[98%]   lg:h-[18vh]   m-2    rounded-md  flex  justify-end  items-center  ">

{/* seetinf left riffth */}









<div className="    max-sm:h-28 h-48  p-1 lg:w-28  lg:h-34  xl:w-28  xl:h-38 mt-3 rounded-2xl hover:rounded-none duration-200 overflow-hidden" >

<Link  to={`/video/${item.video?.videoId}`}> 

<img 

className="   sm:mt-9 md:mt-7 w-full h-[15vh] rounded-2xl hover:rounded-none duration-200 overflow-hidden   "


src={item.video?.thumbnails[0]?.url} 
alt="thumbnails" 
srcset="" 
/>
</Link>

</div>
<div className=" ml-2  lg:w-60   xl:w-72  md:w-[100%]     max-sm:h-28 max-sm:w-full  " >
<Link  to={`/video/${item.video?.videoId}`}> 

<div className=" flex flex-col" >

<span    className='   max-sm:text-sm   lg:text-sm  font-bold  text-base'>
{item.video?.title}   
</span>

<span    className='    max-sm:text-sm font-bold  text-base'>
  {item.video?.author?.avatar?.title}
  {/* {truncateText(item.video?.author?.avatar?.title, 19)} */}
</span>




<span    className='   max-sm:text-sm font-mono  '  > {truncateText(item.video?.author?.title,26)} </span>


<div  className=" flex  max-sm:overflow-hidden  lg:w-56   md:w-[40vh]  justify-evenly     max-sm:flex-col  ">

<span    className='    max-sm:text-smfont-bold  text-base'>{item.video?.stats?.views}views </span>

<span    className='    max-sm:text-smfont-bold  text-base'> {item.video?.publishedTimeText}</span>
</div>

</div>




</Link>


</div>




</div>


      )


     })
 :  <h1>loading.....</h1>


    }





</div>

  
  )}


  function truncateText(text, maxLength) {
    return text.substring(0, maxLength) + (text.length > maxLength ? '...' : '');
  }