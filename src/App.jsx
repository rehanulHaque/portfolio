import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import Blogs from "./Pages/Blogs"
import {Route, Routes} from 'react-router-dom'
import Navbar from "./Pages/Navbar"
import BlogPage from "./Pages/BlogPage"


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/blog/:find" element={<BlogPage/>}/>
    </Routes>
    </>
  )
}

export default App
