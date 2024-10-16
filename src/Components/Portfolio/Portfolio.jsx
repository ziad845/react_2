
import {useEffect, useState } from "react"
import { Helmet } from 'react-helmet-async';
import Title from "../Main Title/Title";
import img1 from './images/port1.png'
import img2 from './images/port2.png'
import img3 from './images/port3.png'
import Item from "./PortfolioItems"


export default function Portfolio() {


const [images] = useState([
    {id: 1, imgSrc: img1},
    {id: 2, imgSrc: img2},
    {id: 3, imgSrc: img3},
    {id: 4, imgSrc: img1},
    {id: 5, imgSrc: img2},
    {id: 6, imgSrc: img3},
]);

// Handle The Appearance of Modal 
  useEffect(() => {
    const items = document.querySelectorAll('.item');
    const modalLayer = document.querySelector('.modal');
    const modalImage = document.querySelector('.modal img');

    const showModal = (e) => {
      modalImage.src = images[e.currentTarget.dataset.id - 1].imgSrc
      modalLayer.classList.replace('hidden', 'flex')
    }

    const hideModal = (e) => { if (e.target == e.currentTarget) e.target.classList.replace('flex', 'hidden')}

    items.forEach( item => {
      item.addEventListener('click', showModal)
    })

    modalLayer.addEventListener('click', hideModal)

    return () => {
      // Remove Event Listener In ComponentWillUnmount Phase
      items.forEach( item => {
        item.removeEventListener('click', showModal)
      })

      modalLayer.removeEventListener('click', hideModal)
    }
    
  } , [])


  return (
    <>
      <Helmet> 
        <title>Portfolio</title>
      </Helmet>

      <section className="py-8 flex justify-center p">
        <div className="container">

        <Title title={"PORTFOLIO COMPONENT"} color={"black-star"}/>

          <div className="modal hidden justify-center items-center  fixed top-0 right-0 bottom-0 left-0 z-[99999999] bg-blue-700 bg-opacity-20 ">
            <img src={images[0].imgSrc} className="w-[600px]" alt="" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 w-[85%] lg:grid-cols-3 gap-10 m-auto">
            { images.map(img => <Item key={img.id} source={img}/>) }
          </div>  

        </div>      
      </section>
    </>
  )
}
