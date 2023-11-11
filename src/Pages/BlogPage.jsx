import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { usePortfolioContext } from "../Context/Context";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const BlogPage = () => {
  const { find } = useParams();
  const { blogPageDataGraphQl, blogPageData } = usePortfolioContext();

  useEffect(() => {
    blogPageDataGraphQl(find);
  }, []);


  return (
    <div className="p-8">
      <div className="sm:w-full lg:w-1/2 block m-auto ">
        <img src={blogPageData.image?.url} alt="" className='w-full object-contain'/>
      </div>
      <div className="">
        <h1 className='text-3xl font-semibold mt-6'>{blogPageData.title}</h1>
        <div className="mt-8 data">
          {/* <RichText content={blogPageData.body?.raw} /> */}
          <div dangerouslySetInnerHTML={{__html: blogPageData.body?.html}}></div>
        </div>
      </div>
      <div className="text-center mt-5">
        <Link
          to="https://instagram.com/rehan_._cr"
          target="_blank"
          className="mr-2 text-2xl inline-block w-fit"
        >
          {<FaInstagram />}
        </Link>
        <Link
          to="https://github.com/rehanulHaque"
          target="_blank"
          className="mr-2 text-2xl inline-block w-fit"
        >
          {<FaGithub />}
        </Link>
        <Link
          to="https://twitter.com/MdRehan_CR"
          target="_blank"
          className="mr-2 text-2xl inline-block w-fit"
        >
          {<FaTwitter />}
        </Link>
        <Link
          to="https://www.linkedin.com/in/mdrehanulhaque1/"
          target="_blank"
          className="mr-2 text-2xl inline-block w-fit"
        >
          {<FaLinkedin />}
        </Link>
      </div>
    </div>
  );
};

export default BlogPage;
