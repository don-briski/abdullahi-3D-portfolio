import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { technologies } from '../constants'


const Tech = () => {
  return (
    <div className='xs:hidden md:flex flex-row flex-wrap justify-center
    gap-10'>
      {technologies.map((technology, index) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '')