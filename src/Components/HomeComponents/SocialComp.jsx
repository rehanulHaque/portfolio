import React from 'react'
import { Link } from 'react-router-dom'

const SocialComp = ({url, icon}) => {
  return (
    <Link to={url} target='_blank' className='mr-2 text-2xl inline-block w-fit'>{icon}</Link>
  )
}

export default SocialComp
