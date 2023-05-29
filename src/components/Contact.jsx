import React, {useState, useRef} from 'react'
import {motion} from 'framer-motion'
import emiailjs from '@emailjs/browser'
import {SectionWrapper} from '../hoc'
import {styles} from '../styles'
import {slideIn} from '../utils/motion'
import { EarthCanvas } from './canvas'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import dotenv from 'dotenv';
// dotenv.config();






const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const formRef = useRef()

  const [loading, setLoading] = useState(false)
  // const [isFormValid, setIsFormValid] = useState(false);


  const handleChange = (e) => {
    const  { name, value} = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormValid) {
      setLoading(true)
    }

    //import.meta.env.YOUR_SERVICE_ID
    //import.meta.env.YOUR_TEMPLATE_ID
    //import.meta.env.PUBLIC_ID

    emiailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
       import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
       {
        from_name: form.name,
        to_name: "Abdullahi",
        from_email: 'abdullahiemoabino2@gmail.com',
        message: form.message
       },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
       
    )
    .then(() => {
      setLoading(false),
      toast.success('your message has been received, you will get a reply shortly')
      

      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false)
      console.log(error)
      toast.error('something went wrong, Please try again...')
    })
    //e.target.reset()
  }

  const isFormValid = () => {
    const { name, email, message } = form;

    const nameValid = name.trim() !== '';
    const emailValid = validateEmail(email);
    const messageValid = message.trim() !== '';

    return nameValid && emailValid && messageValid;
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

 
 


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse
    flex gap-10 overflow-hidden'>
       <motion.div 
    variants={slideIn('left', 'tween', 0.2, 1)}
    className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
     <p className={styles.sectionSubText} > get in touch</p>
      <h3 className={styles.sectionHeadText}>contact.</h3>

      <form 
      ref={formRef}
      onSubmit={handleSubmit}
      className='mt-12 flex flex-col gap-8'>
      <label className='flex flex-col '>
        <span className='text-white font-medium mb-4'>Your Name</span>
        <input
        type='text'
        name='name'
        value={form.name}
        onChange={handleChange}
        placeholder="what's your name?"
        className="bg-tertiary py-4 px-6 
        placeholder:text-secondary text-white rounded-lg 
        outline-none border-none font-medium"
         />
      </label>

      <label className='flex flex-col '>
        <span className='text-white font-medium mb-4'>Your Email</span>
        <input
        type='email'
        name='email'
        value={form.email}
        onChange={handleChange}
        placeholder="what's your email?"
        className="bg-tertiary py-4 px-6 
        placeholder:text-secondary text-white rounded-lg 
        outline-none border-none font-medium"
         />
      </label>

      <label className='flex flex-col '>
        <span className='text-white font-medium mb-4'>Your Message</span>
        <textarea
        rows='7'
        name='message'
        value={form.message}
        onChange={handleChange}
        placeholder="what do you want to say?"
        className="bg-tertiary py-4 px-6 
        placeholder:text-secondary text-white rounded-lg 
        outline-none border-none font-medium"
         />
      </label>

      <button type='submit'
      className='bg-tertiary py-3 px-8 outline-none w-fit 
      text-white font-bold shadow-md shadow-primary rounded-xl'>
      {loading ? 'Sending...' : 'Send'}
      </button>

      </form>
      <ToastContainer />

    </motion.div>

    <motion.div 
    variants={slideIn('right', 'tween', 0.2, 1)}
    className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
    >
    <EarthCanvas />
    </motion.div>
    <div>

    </div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')