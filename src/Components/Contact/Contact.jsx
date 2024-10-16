import { useEffect } from "react"
import Title from "../Main Title/Title";
import { Helmet } from 'react-helmet-async';

export default function Contact() {


  const handleInputChange = (e) => {
    if (e.target.value != '') {
        e.target.previousElementSibling.classList.replace('top-[25px]', 'top-[-20px]')
    } else {
        e.target.previousElementSibling.classList.replace('top-[-20px]', 'top-[25px]')
    }
  };

  useEffect(() => {
    const inputs = document.querySelectorAll('input')

    inputs.forEach( input => { input.addEventListener('input', handleInputChange) })

    return () => {
      inputs.forEach( input => input.removeEventListener('input', handleInputChange))
    }

  }, [])

  return (
    <>
      <Helmet> 
        <title>Contact Us</title>
      </Helmet>

    <section className="pt-16 pb-20 flex justify-center p">
    <div className="container">
      
      <Title title={"CONATCT SECTION"} color={"black-star"}/>

      <div className="form w-11/12 md:w-3/4 lg:w-1/2 m-auto">
          <div className="username-group mb-6 relative">
            <label htmlFor="username" className='block text-[#1abc9c] absolute top-[25px] z-[-1] transition-all duration-500'>userName:</label>
            <input id='username' type="text" placeholder='userName' className='w-full p-3 mt-3 rounded-[8px] border-0 outline-none shadow-[0_1px_0_0_rgba(0,0,0,0.1)]'/>
          </div>

          
          <div className="age-group mb-6 relative">
            <label htmlFor="age" className='block text-[#1abc9c] absolute top-[25px] z-[-1] transition-all duration-500'>userAge:</label>
            <input id='age' type="text" placeholder='userAge' className='w-full p-3 mt-3 rounded-[8px] border-0 outline-none shadow-[0_1px_0_0_rgba(0,0,0,0.1)]'/>
          </div>

          <div className="email-group mb-6 relative">
            <label htmlFor="email" className='block text-[#1abc9c] absolute top-[25px] z-[-1] transition-all duration-500'>userEmail:</label>
            <input id='email' type="text" placeholder='userEmail' className='w-full p-3 mt-3 rounded-[8px] border-0 outline-none shadow-[0_1px_0_0_rgba(0,0,0,0.1)]'/>
          </div>

          <div className="password-group mb-7 relative">
            <label htmlFor="password" className='block text-[#1abc9c] absolute top-[25px] z-[-1] transition-all duration-500'>userPassword:</label>
            <input id='password' type="password" placeholder='userPassword' className='w-full p-3 mt-3 rounded-[8px] border-0 outline-none shadow-[0_1px_0_0_rgba(0,0,0,0.1)]'/>
          </div>

          <button className="py-2 px-6 bg-[#1abc9c] text-white rounded">Send Message</button>

      </div>
          
    </div>      
    </section>
    </>
  )
}
