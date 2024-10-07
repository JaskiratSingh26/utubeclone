import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Home from './Components/Home'
import PlayingVideo from './Components/PlayingVideo'
import Search from './Components/Search'

import Apidata from './Api/Apidata'  
import { RiH1 } from 'react-icons/ri'


function App() {
  let [loading, setLoading] = useState(false)
  let [data, setdata] = useState([])
  let [value, setvalue] = useState("New")

  const [prevValue, setPrevValue] = useState(null);
  let navigate = useNavigate();

 let[error, setError] = useState('')
  // let baseurl = "https://youtube138.p.rapidapi.com"
  // const options = {

  //   headers: {
  //     method: 'GET',
  //     // 'x-rapidapi-key':  '2f0dc6d3b1msheec2986436c14e4p1a0915jsn9f118fe3b12d',
  //     'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  //   }
  // };


  // async function Apidata(url) {


  //   console.log('Apidata function called with URL:', url);
  //   try {
  //     const data = await fetch(`${baseurl}/${url}`, options);

  //     let ans = await data.json()
  //     // console.log(ans);
  //     return ans;

  //   } catch (error) {
  //     console.error(error, 'fetching data time error '); // Log the error
  //     // or return an error message
  //     throw error;
  //   }

  // }



  // let serach = `search/?q=New`
  // Apidata(serach)


  let fetchingdata = (query) => {

    setLoading(true)
    Apidata(`search/?q=${query}&hl=en&gl=US`).then(({ contents }) => {
        
      
      if (contents) {
        setdata(contents)
      } else {
              Apidata('search/?q=New&hl=en&gl=US').them(({contents})=>{
                console.log(contents)
                setdata(contents)
              }  ).catch(err=>{
                console.log('Error:', err);
                setLoading(false);
              }) }




      setLoading(false)
    }).catch(err=>{
      console.log('Error:', err);
      setError('Something went wrong, please try again later')
      setLoading(false);
    })
  }


  useEffect(() => {
    if (value !== prevValue) {
      setPrevValue(value);
      fetchingdata(value);
      navigate('/', { replace: true });
    }


  }, [value])

  // console.log('App component rendered');

  
  // console.log('data saved ', data)


  return (

     <>
     
     {
      error?(<div  className='      font-mono  items-center justify-center   flex flex-col'>
        <h2>Error: {error}</h2>
        <p>Loading...</p>
        <p>APi key is expire please contact to a developer to set new api key</p>

        
      </div>):(   <div >
        <Navbar value={value} setvalue={setvalue} />
        <Routes>
  
          <Route  exact   path='/' element={<Home  data={data} />}/>
          <Route  path='/search/:searchQuery' element={<Search/>}/>
          <Route  path='/video/:id' element={<PlayingVideo/>}/>
          {/* <Route path="/play/:videoId" element={<PlayingVideo />} /> */}
  
        </Routes>
  
  
      </div>)
     }
     
     </>
   
  )
}

export default App
