import React from "react";
import {Link} from 'react-router-dom'

const BlogCard = ({ blog }) => {
  return (
    <div className="lg:flex md:flex shadow-lg mb-8 mt-8 rounded-md items-center ">
      <div className="lg:mr-4 lg:w-[300px] md:w-[300px] sm:w-[300px]">
        <img src={blog.imgSrc} alt="" className="object-contain w-full"/>
      </div>
      <div className="p-3">
        <Link className="font-semibold text-2xl" to={blog.url}>{blog.title}</Link>
        <p>{blog.summary}</p>
      </div>
    </div>
  );
};

export default BlogCard;
