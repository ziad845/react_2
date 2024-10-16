import Title from "../Main Title/Title"
import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <>
      <Helmet> 
        <title>About</title>
      </Helmet>
      <section className="h-[83vh] flex justify-center items-center bg-[#1abc9c]">
        <div className="container">
          <div className="content w-4/5 m-auto text-center text-white">

          <Title title={"ABOUT COMPONENT"}/>

            <div className='mt-3 flex text-start gap-4'>
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;