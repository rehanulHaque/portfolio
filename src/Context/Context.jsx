import request from "graphql-request";
import { createContext, useContext, useState } from "react";
const {VITE_API_KEY} = import.meta.env
const portfolioContext = createContext()

export const usePortfolioContext = () => {
    return useContext(portfolioContext)
}

export const PortfolioProvider = ({children}) => {
    const [projectData, setProjectData] = useState([])
    const [blogData, setBlogData] = useState([])
    const [blogPageData, setBlogPageData] = useState([])

    const ProjectDataGraphQl = async ()=>{
        const {projects} = await request(
          VITE_API_KEY,
            `
            query Assets {
                projects {
                  description
                  projectImage {
                    url
                  }
                  title
                  date
                  demoLink
                  sourceCode
                  tags
                }
              }
            `
        )
        setProjectData(projects)
    }

    const blogDataGraphQl = async ()=>{
        const data = await request(
          VITE_API_KEY,
            `
            query Assets {
                blogs {
                  id
                  image {
                    url
                  }
                  miniDescription
                  title
                  blogUrl
                  body {
                    html
                  }
                }
              }
            `
        )
        setBlogData(data.blogs)
    }

    const blogPageDataGraphQl = async (url)=>{
        const data = await request(
          VITE_API_KEY,
            `
            query Asset {
                blogs(where: {blogUrl: "${url}"}) {
                    image {
                      url
                    }
                    title
                    body {
                      raw
                      html
                    }
                    blogUrl
                  }
              }
              
            `
        )
        // return data.blogs[0]
        setBlogPageData(data.blogs[0])
    }
    return (
        <portfolioContext.Provider value={{ProjectDataGraphQl, projectData, blogDataGraphQl, blogData, blogPageDataGraphQl, blogPageData}}>
            {children}
        </portfolioContext.Provider>
    )
}