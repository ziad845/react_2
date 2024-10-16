import myImage from './images/avataaars.svg'
import Title from './../Main Title/Title';
import { Helmet } from 'react-helmet-async';

function Home() {

  return (
    <>
    <Helmet> 
      <title>Home</title>
    </Helmet>
    
      <section className="h-[83vh] flex justify-center items-center bg-[#1abc9c]">
        <div className="container flex justify-center">
          <div className="content text-center text-white">
            <img src={myImage} className='w-64 m-auto' alt="Home Avatar"/>
            <Title title={"START FRAMEWORK"}/>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </section>
    </>
  )
  
}

export default Home;