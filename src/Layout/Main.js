import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../App.css';
import AuthorImage from '../Pages/AuthorImage/AuthorImage';

const Main = () => {
  const location = useLocation();

  return (
    <div className='h-screen overflow-y-auto flex flex-col border-[25px] bg-white border-[#f26b38] relative'>
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main content section */}
      <div className='absolute top-10 bottom-10 md:top-14 md:bottom-14 lg:top-16 lg:bottom-16 right-0 left-0 lg:right-[37px] lg:left-[37px] bg-[#f5faff] overflow-hidden'>

        {/* Author Image */}
        <AuthorImage />

        {/* Main Content */}

        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="page"
            timeout={1000}
          >
            <div className="w-full lg:w-4/6 xl:w-3/5 absolute right-0 top-0 bottom-0 overflow-y-auto px-6 md:px-10 lg:px-12 xl:px-20">
              <Outlet />
            </div>
          </CSSTransition>
        </TransitionGroup>

      </div>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
};

export default Main;