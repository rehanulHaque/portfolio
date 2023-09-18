import React from 'react'
import TagComp from '../HomeComponents/TagComp'
import ButtonComp from './ButtonComp'

const ProjectCard = ({portfolio}) => {
  return (
    <div className='shadow-lg project-card'>
        <div>
            <img src={portfolio.imgSrc} alt="Project" className='lg:w-fit'/>
        </div>
        <div className='lg:p-4 md:p-3 sm:p-2'>
            <h2 className='lg:text-2xl md:text-2xl sm:text-xl lg:mb-2'>{portfolio.title}</h2>
            <p className='flex items-center text-gray-600'><span className='mr-2'>{portfolio.date.icon}</span><span>{portfolio.date.datetime}</span></p>

            <p className='lg:mb-2'>{portfolio.summary}</p>

            <div className='mb-8'>{portfolio.tags.map(tag=> <TagComp key={tag.id} {...tag}/>)}</div>
            <div className='flex'>{portfolio.buttons.map(btn=> <ButtonComp key={btn.id} {...btn}/>)}</div>
        </div>
    </div>
  )
}

export default ProjectCard
