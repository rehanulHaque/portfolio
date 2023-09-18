import React from 'react'
import { Link } from 'react-router-dom'

const ButtonComp = ({name, url, icon}) => {
  return (
    <Link target='_blank' to={url} className='flex items-center border border-black px-4 py-2 w-fit rounded-md mr-2 hover:bg-black hover:text-white transition-all'>
      <span className='mr-2 text-2xl'>{icon}</span>
      <span>{name}</span>
    </Link>
  )
}

export default ButtonComp
