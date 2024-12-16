import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import BecheDaw from './Pages/Project/BecheDaw';
import Projects from './Pages/Projects/Projects';
import Uifry from './Pages/Project/Uifry';
import FurneHouse from './Pages/Project/FurneHouse';
import Unique from './Pages/Project/Unique';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/projects',
          element: <Projects></Projects>
        },
        {
          path: '/projects/becheDaw',
          element: <BecheDaw></BecheDaw>
        },
        {
          path: '/projects/unique',
          element: <Unique></Unique>
        },
        {
          path: '/projects/uifry',
          element: <Uifry/>
        },
        {
          path: '/projects/furne-house',
          element: <FurneHouse/>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
