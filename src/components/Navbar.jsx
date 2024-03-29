import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import {navLinks} from '../constants'
import {logo, close, menu } from '../assets'
import { FaSun, FaMoon } from 'react-icons/fa';

function Navbar() {
    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState("false")

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const isDarkModeOption = localStorage.getItem('darkMode') === 'true'

        setDarkMode(isDarkModeOption)
    }, [])

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode.toString())

    }, [darkMode])

    const handleThemeChange = () => {
        setDarkMode(!darkMode)
    }

    return (
        <nav className={`${styles.paddingX} fixed top-0 z-20 w-full flex items-center bg-primary
        ${darkMode ? 'dark-mode' : 'light-mode'} 
    py-5 border-b-[2px] `}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link to="/" className='flex items-center gap-2'
                    onClick={() => {
                        setActive(""),
                        window.scrollTo(0, 0)
                    } }>
                    <img src={logo} alt="logo" className=' w-9 h-9 object-contain' />
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'> Abdul &nbsp;   <span className='sm:block hidden'>| Portfolio</span> </p>
                </Link>

                <ul className='list-none hidden sm:flex flex-row gap-10 '>
                    {navLinks.map((link) => (
                        <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium, cursor-pointer`}
                            onClick={() => setActive(link.title)}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center  '>
                    <img src={toggle ? menu : close}
                        alt='menu'
                        className='w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={() => setToggle(!toggle)} />

                    <div className={`${!toggle ? "flex" : "hidden"} p-6 black-gradient absolute top-20
        right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex items-start justify-end flex-col gap-4'>
                            {navLinks.map((link) => (
                                <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"}
                font-poppins text-[16px] font-medium cursor-pointer`}
                                    onClick={() => {
                                        setActive(link.title)
                                        setToggle(!toggle)
                                    } }>
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>

            </div>
            <button className='text-white ml-5 items-center flex gap-1'
                onClick={handleThemeChange}>
             {darkMode ? <FaSun className={'light-mode'} /> : <FaMoon className={'dark-mode'} />} 
         </button>
        </nav>
    )
}

export default Navbar