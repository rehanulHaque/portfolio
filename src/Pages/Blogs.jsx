import React from 'react'
import {BlogsData} from '../Data/BlogData'
import BlogCard from '../Components/BlogComponents/BlogCard'

const Blogs = () => {
  return (
    <div className="lg:mx-20 md:mx-20 sm:mx-8 lg:mb-8 md:mb-8 home">
      <h1 className="font-semibold text-2xl lg:mb-12 md:mb-12">Blog</h1>
      <div className="">
        {BlogsData.map(blog =>{
          return(
            <BlogCard key={blog.id} {...blog}/>
          )
        })}
      </div>
    </div>
  )
}

export default Blogs
