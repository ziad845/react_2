
import {createHashRouter, RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Erorr from './Components/Page Not Found/Erorr404';


const routes = createHashRouter([
  {path: '/', element: <Layout/>, children: [
    {index: true, element: <Home/>},
    {path: 'about', element: <About/>},
    {path: 'portfolio', element: <Portfolio/>},
    {path: 'contact', element: <Contact/>},
    {path: '*', element: <Erorr/>},
  ]},
])

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
  </>
  )
}

export default App
