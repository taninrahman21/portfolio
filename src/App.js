import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import BecheDaw from './Pages/Project/BecheDaw';
import SmartTutor from './Pages/Project/SmartTutor';
import StudyTrend from './Pages/Project/StudyTrend';
import Projects from './Pages/Projects/Projects';
import Uifry from './Pages/Project/Uifry';

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
          path: '/projects/smartTutor',
          element: <SmartTutor></SmartTutor>
        },
        {
          path: '/projects/studyTrend',
          element: <StudyTrend></StudyTrend>
        },
        {
          path: '/projects/uifry',
          element: <Uifry/>
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
