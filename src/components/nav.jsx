import React, { useState, useEffect } from 'react';
import Profile from './profile.jsx';
import { Link } from 'react-router-dom';
import WindowWidth from '../hooks/width.jsx';

function Nav() {

  const width = WindowWidth();

  return (
    <>
      {width > 767 ?
        <div id="tablap" className="backdrop-blur-sm">
          <div className="grid grid-cols-[30%,70%] mt-6">
            <Profile />
            <div className="flex flex-row w-[100%] justify-between px-24
                      text-sm md:text-lg lg:text-xl 2xl:text-2xl
                      ">
              <div>
                <Link to={'/'}>
                  <p>about</p>
                </Link>
              </div>
              <div>
                <Link to={'/projects'}>
                  <p>Projects</p>
                </Link>
              </div>
              <div>
                <Link to={'/ProfileCertificates'}>
                  <p>Profile|&|Certificates</p>
                </Link>
              </div>
              <div>
                <Link to={'/contact'}>
                  <p>Contact</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        :
        <div className="backdrop-blur-sm z-10">
          <div isd="mobile" className="flex justify-between  sm:mx-16  mx-6 mt-8">
            <div className="mt-1">
              <Profile />
            </div>
            <details className="dropdown z-3">
              <summary className="btn m-1" >
                <div className="flex flex-row gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                  </svg>
                  <p className="text-md" >Menu</p>
                </div>
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box w-32 p-2 shadow">
                <li><Link to={'/'}>about</Link></li>
                <li><Link to={'/Projects'}>Projects</Link></li>
                <li><Link to={'/ProfileCertificates'}>Profile</Link></li>
                <li><Link to={'/Contact'}>Contact</Link></li>
              </ul>
            </details>
          </div>
        </div>
      }
    </>
  );
}

export default Nav