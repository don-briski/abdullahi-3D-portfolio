import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { profileImage } from '../assets'
import { fadeIn } from '../utils/motion'
import { Tilt } from 'react-tilt'


const ProfileCard = () => {
  return(
    <Tilt >
    <motion.div 
    variants={fadeIn("", "spring", 0.5, 1 )}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div 
       option={{
        speed: 450,
        max: 45,
        scale: 1,

        }}>
        <img src={profileImage} alt='profileImage'
        className='w-[400px] h-[400px] p-2 object-cover rounded-[20px]' />
      </div>
    </motion.div>


    </Tilt>
    )}


const Hero = () => {
  return (
    <section className='relative w-full mx-auto h-screen 
    flex flex-col justify-evenly items-center '>
      <div className={`${styles.paddingX} relative inset-0 top-[120px] max-w-7xl mx-auto
      flex flex-row gap-5 items-start mb-10 `}>
      <div className='flex flex-col justify-center items-center mt-5'>
      <div className='w-5 h-5 rounded-full bg-[#915eff] ' />
      <div className='w-1 sm:h-80 h-40  violet-gradient ' />
      </div>

      <div>
      <h1 className={`${styles.heroHeadText} `}>
        Hi, I am <span className='text-[#915eff]'>Abdullahi,</span>
      </h1>
      <p className={`${styles.heroSubText} text-white-100 mt-2 `}> a fullstack developer, frontend developer,  <br className='sm:block hidden' /> backend developer, UI/UX and Technical Writer</p>
      </div>
      
      </div>

      <div className='relative mt-10 sm:mt-[30px] '>
      <ProfileCard />
      </div>
      
     
      <div className=' xs:bottom-10 bottom-10 w-full flex justify-center items-center'>
      <a href='#about' >
        <div className='w-[35px] h-[65px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
        <motion.div
        animate={{y:[0, 24, 0]}}
        transition={{duration:1.5, repeat: Infinity, repeatType: "loop"}} 
        className='w-3 h-3 rounded-full bg-secondary mb-1' />
        </div>
      </a>

      </div>
    </section>
  )
}

export default Hero