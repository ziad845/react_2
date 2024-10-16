import { Outlet } from 'react-router-dom';
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import {HelmetProvider} from 'react-helmet-async'

export default function Layout() {

  const helmetContext = {};

  return (
    <>
    <HelmetProvider context={helmetContext}>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </HelmetProvider>
    </>
  )
}
