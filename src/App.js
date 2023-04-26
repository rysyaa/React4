import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import CardBlog from './components/CardBlog'
import AddBlog from './components/AddBlog'
import Favorites from './components/Favorites'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

const App = () => {
  const API = "http://localhost:8000/Blog";

  const [blog, setBlog] = useState([]);

  async function getBlogs(){
    let result = await axios.get(API);
    setBlog(result.data);
  }

  function addBlog(newBlog){
    axios.post(API, newBlog)
  }

  return (
    <div>
      <BrowserRouter>
        <Home/> 
        <Routes>
          <Route path='/cards' element={<CardBlog blog={blog} getBlogs={getBlogs}/>}/>
          <Route path='/add-blog' element={<AddBlog addBlog={addBlog}/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about-me' element={<AboutMe/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App