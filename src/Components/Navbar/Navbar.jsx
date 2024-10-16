import './navbar.css';
import { NavLink, Link } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {

    const navToggleHandler =  () => document.getElementById('dropMenu').classList.toggle('drop');

    useEffect( () => {

        if (window.screen.width <= 640){
            const myTargets = [document.querySelector('.nav-toggler'), ...document.querySelectorAll('.nav-link')];
            myTargets.forEach(t => t.addEventListener('click', navToggleHandler));
        }

    } , [])

    
    useEffect(() => {

        const nav = document.querySelector('nav');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.classList.replace('h-[110px]', 'h-[70px]');
                document.getElementById('dropMenu').classList.replace('top-[100px]', 'top-[70px]');
            }    
            else  {
                nav.classList.replace('h-[70px]', 'h-[110px]')
                document.getElementById('dropMenu').classList.replace('top-[70px]', 'top-[100px]');
            }
        })

    }, [])


    return (
        <>
            <nav className='fixed top-0 z-[9999] left-0 right-0 bg-[#2C3E50] h-[110px] flex items-center transition-all duration-500'>
                <div className="container py-5 w-[90%] sm:w-[85%] mx-auto flex justify-between">

                    <div className="logo text-[18px] md:text-[22px] lg:text-3xl font-bold text-white flex items-center">
                        <Link to="/">START FRAMEWORK</Link>
                    </div>

                    <div className="text-white text-3xl flex items-center">
                        <span className="nav-toggler sm:hidden ">
                            <i className="fa-solid fa-bars cursor-pointer"></i>   
                        </span>
                        

                        <ul id="dropMenu" className='pl-7 sm:pl-0 flex flex-col sm:flex-row items-center bg-[#2C3E50] absolute left-0 top-[100px] sm:top-0 h-0 sm:h-auto w-full overflow-hidden sm:relative transition-all duration-500'>

                        <li className='w-full py-2 sm:py-0 px-1 md:px-2 flex items-center'>
                            <NavLink className='nav-link text-[13px] md:text-[14px] lg:text-[15px] font-bold text-white px-3 md:px-2 rounded' to="/">
                            HOME
                            </NavLink>
                        </li>

                        <li className='w-full py-2 sm:py-0 px-1 md:px-2 flex items-center'>
                            <NavLink className='nav-link text-[13px] md:text-[14px] lg:text-[15px] font-bold text-white px-3 md:px-2 rounded' to="about">
                            ABOUT
                            </NavLink>
                        </li>

                        <li className='w-full py-2 sm:py-0 px-3 md:px-2 flex items-center'>
                            <NavLink className='nav-link text-[13px] md:text-[14px] lg:text-[15px] font-bold text-white px-1 md:px-2 rounded' to="portfolio">
                            PORTFOLIO
                            </NavLink>
                        </li>

                        <li className='w-full py-2 sm:py-0 px-3 md:px-2 flex items-center'>
                            <NavLink className='nav-link text-[13px] md:text-[14px] lg:text-[15px] font-bold text-white px-1 md:px-2 rounded' to="contact">
                            CONTACT
                            </NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

            <div className='hidden-layer w-full h-[100px]'></div>
        </>
    )
}
