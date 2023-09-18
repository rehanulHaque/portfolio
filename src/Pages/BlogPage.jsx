import React from 'react'
import { useParams } from 'react-router-dom'
import {BlogsData} from '../Data/BlogData'
import SocialComp from '../Components/HomeComponents/SocialComp'


const BlogPage = () => {
    const {find} = useParams()
    const blog = BlogsData.find(blog => blog.find === find)

  return (
    <div className='p-8'>
        <div className='w-1/3 block m-auto'>
            <img src={blog.blog.imgSrc} alt="" className='w-full'/>
        </div>
        <div className=''>
            <h1 className='text-3xl font-semibold mt-6'>{blog.blog.title}</h1>
            <br />
            <p>{blog.blog.description}</p>
        </div>
        <div className='text-center mt-5'>
            {
                blog.blog.socialLink.map(link=>{
                    return(
                        <SocialComp key={link.id} {...link}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default BlogPage
