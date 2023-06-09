import React from 'react'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import {Tilt}  from 'react-tilt'
import {fadeIn, textVariant} from '../utils/motion'
import {services} from '../constants' 
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon }) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
    variants={fadeIn('right', 'spring', 0.5 * index, 0.75 )}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] 
    shadow-card'>
      <div 
      options={{
        max:45,
        scale: 1,
        speed: 450}}
       className='bg-tertiary rounded-[20px] py-6 px-12 
       min-h-[280px] flex justify-evenly items-center flex-col '>
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold 
        text-center'>{title}</h3>
       </div>
    </motion.div>
      
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant}>
      <p className={styles.sectionSubText} > Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p  
    variants={fadeIn("", "", 0.2, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify' >
    proficiency: I have work and amass adept experience in building impactful project with teams and personal projects. Thus, i have vast experience as a frontend developer: React and Angular and backend developer: node and express. <br />
    Collaboration and Teamwork: As a diverse developer, i would prefer working with cross-functional teams and fostering a sense of unity of purpose and cooperation with the sense of setting and achieveing superior and impactful goals. This developer is eager to continue expanding their skill set and learning from different teams. </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index}
         {...service} />
      ))}
    </div>

    </>
  )
}

export default SectionWrapper(About, "about" )