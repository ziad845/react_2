

function Footer() {

  return (
    <footer className=' text-white'>
        <div className="bg-[#2c3e50]">
            <div className="info w-3/4 m-auto py-24 sm:flex justify-around ">
                <div className="location mb-10 sm:mb-0 sm:w-1/3 text-center">
                    <h3 className='text-[24px] font-semibold mb-2'>LOCATION</h3>
                    <p className='mb-2'>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>

                <div className="links px-3 mb-10 sm:mb-0 sm:w-1/3 text-center">
                    <h3 className='text-[24px] font-semibold mb-2'>AROUND THE WEB</h3>
                    <ul className='flex justify-center items-center gap-3'>
                        <li className='w-[35px] h-[35px] rounded-full border border-1 border-white flex justify-center items-center'><i className="fa-brands fa-facebook"></i></li>
                        <li className='w-[35px] h-[35px] rounded-full border border-1 border-white flex justify-center items-center'><i className="fa-brands fa-twitter"></i></li>
                        <li className='w-[35px] h-[35px] rounded-full border border-1 border-white flex justify-center items-center'><i className="fa-brands fa-linkedin-in"></i></li>
                        <li className='w-[35px] h-[35px] rounded-full border border-1 border-white flex justify-center items-center'><i className="fa-solid fa-globe"></i></li>
                    </ul>
                </div>

                <div className="about-freelancers sm:w-1/3 text-center">
                    <h3 className='text-[24px] font-semibold mb-2'>AROUND THE WEB</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, numquam.</p>
                </div>
            </div>
        </div>

        <div className="copyright bg-[#1a252f] text-center py-6">
            <p>Copyright © Your Website 2021</p>
        </div>
    </footer>
  )
}

export default Footer;