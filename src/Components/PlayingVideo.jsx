import React, { useState, useEffect, version } from 'react';
import { useParams } from 'react-router-dom';
import Apidata from '../Api/Apidata';
import { SlLike } from "react-icons/sl";
import { BiDislike } from "react-icons/bi";
import { FaShareNodes } from "react-icons/fa6";
import { IoCloudDownloadSharp } from "react-icons/io5";
import ReactPlayer from 'react-player';
import Suggestionvideo from './Suggestionvideo';
const PlayingVideo = () => {
  const [videoData, setVideoData] = useState({});
  const { id } = useParams(); // Assuming id is a prop passed from parent component

  const [realtedvideo, setrealtedvideo] = useState()
  const [showComments, setShowComments] = useState(false)


  useEffect(() => {
    Apidata(`video/details/?id=${id}`).then((res) => {
      // console.log(res)
      setVideoData(res)
    })


    Apidata(`video/related-contents/?id=${id}&hl=en&gl=US`).then((res) => {
      // console.log(res)
        setrealtedvideo(res)
    })


  }, [id])



  // useEffect(() => {



  //   setVideoData({
  //     author: {
  //       avatar: [
  //         { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s32-c-k-c0x00ffffff-no-rj', width: 32, height: 32 },
  //         { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s48-c-k-c0x00ffffff-no-rj', width: 48, height: 48 },
  //         { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s76-c-k-c0x00ffffff-no-rj', width: 76, height: 76 },
  //         { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s100-c-k-c0x00ffffff-no-rj', width: 100, height: 100 },
  //         { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s176-c-k-c0x00ffffff-no-rj', width: 176, height: 176 },
  //         { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s512-c-k-c0x00ffffff-no-rj', width: 512, height: 512 },
  //       ],
  //       badges: [{ type: 'VERIFIED_CHANNEL' }],
  //       canonicalBaseUrl: "/channel/UCRYJW3Ao5AOmeowheBEyKFQ",
  //       channelId: "UCRYJW3Ao5AOmeowheBEyKFQ",
  //       isVerified: true,
  //       stats: {
  //         subscribers: 6920000,
  //         subscribersText: "6.92M",
  //       },
  //       title: "Playtime With Peppa",
  //     },
  //     cards: null,
  //     description: "Remember to hit the like button and subscribe for more Peppa Pig! \nSubscribe here: bit.ly/KidsTVstory\n\nHave fun with Peppa Pig and her friends: Suzy Sheep,Rebecca Rabbit,Danny Dog,Candy Cat,Pedro Pony,Zoe Zebra,Emily Elephant,Freddy Fox,Kylie Kangaroo,Wendy Wolf,Gabriella Goat,Gerald Giraffe,Molly Mole,Belinda Bear,Delphine Donkey, Peggi and Pandora Panda,Mandy Mouse,Simon Squirrel!",
  //     endScreen: null,
  //     isLiveContent: null,
  //     keywords: [
  //       'peppa pig', 'peppa pig english episodes', 'peppa pig full episodes', 'peppa', '#peppapig', '#peppa', 'peppa pig english', 'pepa pig', '#peppapigenglish', 'peppa pig peppa pig', 'pig', 'pig peppa pig', 'peppa pig song', 'pepper pig', 'peppa pig in english', 'peppa pig live', 'papa pig', 'pepp', 'peppapig', 'pep', 'peppa pig new episodes 2018', 'peppa pig videos', 'peppa george', 'peppa pig new episodes 2019', 'peppa pig 2019', 'peppa pig songs', 'peppa pig official', 'pepap pig official channel', 'peppa pig live stream', 'mandy mouse'
  //     ],
  //     lengthSeconds: 2753,
  //     musics: null,
  //     publishedDate: "2020-03-25",
  //     publishedDateTime: null,
  //     stats: {
  //       likes: 36498,
  //       views: 12960151,
  //     },
  //     superTitle: null,
  //     thumbnails: [
  //       {
  //         quality: 'maxresdefault', url: 'https://i.ytimg.com/vi/28LWBZV2btg/maxresdefault.jpg'
  //       }],

  //     title: "Kids TV and Stories | Peppa Pig Visits Madame Gazelle's House! | Peppa Pig Full Episodes",
  //     type
  //       :
  //       "video",
  //     videoId
  //       :
  //       "28LWBZV2btg"

  //   })

  //   // console.log('PlayingVideo component rendered');



  //   setrealtedvideo({
  //     contents: [
  //       {
  //         type: "video",
  //         video: {
  //           author: {
  //             avatar: [
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s32-c-k-c0x00ffffff-no-rj', width: 32, height: 32 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s48-c-k-c0x00ffffff-no-rj', width: 48, height: 48 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s76-c-k-c0x00ffffff-no-rj', width: 76, height: 76 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s100-c-k-c0x00ffffff-no-rj', width: 100, height: 100 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s176-c-k-c0x00ffffff-no-rj', width: 176, height: 176 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s512-c-k-c0x00ffffff-no-rj', width: 512, height: 512 },
  //             ],
  //             badges: [{ type: 'VERIFIED_CHANNEL' }],
  //             title: "KidsFirst"
  //           },
  //           isLiveNow: false,
  //           lengthSeconds: 1871,
  //           publishedTimeText: "2 weeks ago",
  //           stats: { views: 1466964 },
  //           thumbnails: [
  //             {
  //               quality: 'maxresdefault', url: 'https://i.ytimg.com/vi/28LWBZV2btg/maxresdefault.jpg'
  //             }],
  //           title: "The Marble Run WORLD RECORD 🥇 | Peppa Pig Official Full Episodes |",
  //           videoId: "Joy4qmyIVJo"
  //         }
  //       },
  //       {
  //         type: "video",
  //         video: {
  //           author: {
  //             avatar: [
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s32-c-k-c0x00ffffff-no-rj', width: 32, height: 32 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s48-c-k-c0x00ffffff-no-rj', width: 48, height: 48 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s76-c-k-c0x00ffffff-no-rj', width: 76, height: 76 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s100-c-k-c0x00ffffff-no-rj', width: 100, height: 100 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s176-c-k-c0x00ffffff-no-rj', width: 176, height: 176 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s512-c-k-c0x00ffffff-no-rj', width: 512, height: 512 },
  //             ],
  //             badges: [{ type: 'VERIFIED_CHANNEL' }],
  //             title: "Genevieve's Playhouse - Learning Videos for Kids"
  //           },
  //           isLiveNow: false,
  //           lengthSeconds: 2616,
  //           publishedTimeText: "3 years ago",
  //           stats: { views: 328319217 },
  //           thumbnails: [
  //             {
  //               quality: 'maxresdefault', url: 'https://i.ytimg.com/vi/28LWBZV2btg/maxresdefault.jpg'
  //             }],
  //           title: "Best ♥PEPPA PIG♥ Toy Learning Videos for Kids and Toddlers!",
  //           videoId: "3r6jW-8QuBM"
  //         }
  //       },
  //       {
  //         type: "video",
  //         video: {
  //           author: {
  //             avatar: [
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s32-c-k-c0x00ffffff-no-rj', width: 32, height: 32 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s48-c-k-c0x00ffffff-no-rj', width: 48, height: 48 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s76-c-k-c0x00ffffff-no-rj', width: 76, height: 76 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s100-c-k-c0x00ffffff-no-rj', width: 100, height: 100 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s176-c-k-c0x00ffffff-no-rj', width: 176, height: 176 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s512-c-k-c0x00ffffff-no-rj', width: 512, height: 512 },
  //             ],
  //             badges: [{ type: 'VERIFIED_CHANNEL' }],
  //             title: "Genevieve's Playhouse - Learning Videos for Kids"
  //           },
  //           isLiveNow: false,
  //           lengthSeconds: 2616,
  //           publishedTimeText: "3 years ago",
  //           stats: { views: 328319217 },
  //           thumbnails: [
  //             {
  //               quality: 'maxresdefault', url: 'https://i.ytimg.com/vi/28LWBZV2btg/maxresdefault.jpg'
  //             }],
  //           title: "Best ♥PEPPA PIG♥ Toy Learning Videos for Kids and Toddlers!",
  //           videoId: "3r6jW-8QuBM"
  //         }
  //       }, {
  //         type: "video",
  //         video: {
  //           author: {
  //             avatar: [
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s32-c-k-c0x00ffffff-no-rj', width: 32, height: 32 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s48-c-k-c0x00ffffff-no-rj', width: 48, height: 48 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s76-c-k-c0x00ffffff-no-rj', width: 76, height: 76 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s100-c-k-c0x00ffffff-no-rj', width: 100, height: 100 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s176-c-k-c0x00ffffff-no-rj', width: 176, height: 176 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s512-c-k-c0x00ffffff-no-rj', width: 512, height: 512 },
  //             ],
  //             badges: [{ type: 'VERIFIED_CHANNEL' }],
  //             title: "Genevieve's Playhouse - Learning Videos for Kids"
  //           },
  //           isLiveNow: false,
  //           lengthSeconds: 2616,
  //           publishedTimeText: "3 years ago",
  //           stats: { views: 328319217 },
  //           thumbnails: [
  //             {
  //               quality: 'maxresdefault', url: 'https://i.ytimg.com/vi/28LWBZV2btg/maxresdefault.jpg'
  //             }],
  //           title: "Best ♥PEPPA PIG♥ Toy Learning Videos for Kids and Toddlers!",
  //           videoId: "3r6jW-8QuBM"
  //         }
  //       }, {
  //         type: "video",
  //         video: {
  //           author: {
  //             avatar: [
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s32-c-k-c0x00ffffff-no-rj', width: 32, height: 32 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s48-c-k-c0x00ffffff-no-rj', width: 48, height: 48 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s76-c-k-c0x00ffffff-no-rj', width: 76, height: 76 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s100-c-k-c0x00ffffff-no-rj', width: 100, height: 100 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s176-c-k-c0x00ffffff-no-rj', width: 176, height: 176 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s512-c-k-c0x00ffffff-no-rj', width: 512, height: 512 },
  //             ],
  //             badges: [{ type: 'VERIFIED_CHANNEL' }],
  //             title: "Genevieve's Playhouse - Learning Videos for Kids"
  //           },
  //           isLiveNow: false,
  //           lengthSeconds: 2616,
  //           publishedTimeText: "3 years ago",
  //           stats: { views: 328319217 },
  //           thumbnails: [
  //             {
  //               quality: 'maxresdefault', url: 'https://i.ytimg.com/vi/28LWBZV2btg/maxresdefault.jpg'
  //             }],
  //           title: "Best ♥PEPPA PIG♥ Toy Learning Videos for Kids and Toddlers!",
  //           videoId: "3r6jW-8QuBM"
  //         }
  //       }, {
  //         type: "video",
  //         video: {
  //           author: {
  //             avatar: [
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s32-c-k-c0x00ffffff-no-rj', width: 32, height: 32 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s48-c-k-c0x00ffffff-no-rj', width: 48, height: 48 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…w0G9vY-aLMKoRVEy6CmSUY8=s76-c-k-c0x00ffffff-no-rj', width: 76, height: 76 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s100-c-k-c0x00ffffff-no-rj', width: 100, height: 100 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s176-c-k-c0x00ffffff-no-rj', width: 176, height: 176 },
  //               { url: 'https://yt3.ggpht.com/lUDd1GqWr2xYSZZwUDNYxsjRzrCx…0G9vY-aLMKoRVEy6CmSUY8=s512-c-k-c0x00ffffff-no-rj', width: 512, height: 512 },
  //             ],
  //             badges: [{ type: 'VERIFIED_CHANNEL' }],
  //             title: "Genevieve's Playhouse - Learning Videos for Kids"
  //           },
  //           isLiveNow: false,
  //           lengthSeconds: 2616,
  //           publishedTimeText: "3 years ago",
  //           stats: { views: 328319217 },
  //           thumbnails: [
  //             {
  //               quality: 'maxresdefault', url: 'https://i.ytimg.com/vi/28LWBZV2btg/maxresdefault.jpg'
  //             }],
  //           title: "Best ♥PEPPA PIG♥ Toy Learning Videos for Kids and Toddlers!",
  //           videoId: "3r6jW-8QuBM"
  //         }
  //       },
  //       // ... rest of the array
  //     ],
  //     cursorNext: null
  //   });





  // }, [])








  const handleToggledes = () => {
    setShowComments(!showComments);
  }

  // console.log('PlayingVideo component rendered', videoData);
  // console.log('PlayingVideo component rendered with realted video', realtedvideo);
  return (
    // Your JSX code here
    <div className=' max-sm:absolute  max-sm:top-0  sm:absolute sm:top-0  lg:static h-full  w-full ' >

      <div className='   flex flex-col  rounded-lg    lg:flex-row  lg:w-full   justify-around  w-full'>
        {/* uper mai  */}
        {/* flex  items-center justify-between rounded-lg */}
        

        <div className='   max-sm:w-full  max-sm:h-[80vh]  flex  flex-col     lg:min-w-[90vh] xl:min-w[100vh] 2xl:min-w-[150vh]  lg:h-[90vh] lg:p-1  '>

          <div className='   sm:h-[50vh] max-sm:p-0   max-sm:mt-2  max-sm:h-[90vh]  max-sm:w-full sm:w-full  sm:p-0 sm:mt-1 h-[60vh] mr-2 p-1 rounded-md  lg:w-full  lg:h-full  ' >
            {/* video */}
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              height='100%'
              width='100%'
              controls={true}
              playing={true}

            />

          </div>



          {/* for beelow conetnt */}

          <span className= '  sm:p-1 text-sm  ml-2  lg:w-[120vh]   mt-2 font-bold  text-base' >
            {videoData.title}
          </span>



          <div className='   max-sm:w-full  max-sm:h-28    sm:p-1 sm:justify-around md:w-[100%]  max-sm:flex  max-sm:flex-col max-sm:justify-between  lg:min-w-[50vh]  lg:max-w-[80vh] flex  justify-center ' >
            <div className='  ml-2 flex  max-sm:mt-4 '>
              <div className=''>
                {/* frist */}
                <img className='h-12 w-12 rounded-full' src={videoData.author?.avatar?.[0].url} alt="logo" />


              </div>
              <div className='       justify-between     flex flex-col'>
                <span className='font-bold  w-36  text-sm ml-6'>{videoData.author?.title}</span>
                <span className='font-bold     w-36  text-sm ml-6'>{videoData.author?.stats?.subscribersText}  subscribers</span>

              </div>

            </div>

            <div className='    sm:w-full  sm:ml-24 max-sm:w-full  max-sm:mt-4  max-sm:justify-between   md:w-full  lg:min-w-[50vh]  lg:max-w-[80vh]'>

              <div className='   flex  justify-evenly' >
                <span className=' flex flex-col' ><SlLike /> {videoData.stats?.likes}  likes</span>
                <span><BiDislike />dislike</span>

                <span> <IoCloudDownloadSharp />download  </span>
              </div>
            </div>
          </div>

          <hr  className='mt-3'/>



          <div className='  md:w-[100%]  lg:min-w-[50vh]  lg:max-w-[vh] bg-slate-200 p-1 mt-3 rounded-lg  flex justify-between' >
            {/* <span>{videoData.description} </span> */}



            <button
              onClick={handleToggledes}
              className="text-sm font-bold text-gray-500 hover:text-gray-800"
            >
              {/* {showComments ? 'Hide comments' : 'Show comments'} */}
              {showComments ? 'description .....' : <span>{videoData.description} </span>
              }
            </button>





          </div>



          {/* <span  className=' font-bold  text-base   ml-4  mb-4  p-2 mt-4'>{videoData.stats?.comments}comments</span> */}

          <span className=' font-bold  text-base   ml-4  mb-4  p-2 mt-4'>{videoData.stats?.comments}comments</span>




          <hr />
        </div>



        <div className='  h-full  mt-3  w-full lg:min-w-[35vh]   lg:max-w-[50vh]' >

        

          <Suggestionvideo video={realtedvideo} />



        </div>







      </div>

    </div >

  );
};

export default PlayingVideo;


