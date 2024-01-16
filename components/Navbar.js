'use client';
import Link from 'next/link';
import Image from 'next/image';
import profile from '../assets/profile.png';
import memoji8 from '../assets/Memoji 8.png';
import thumb from '../assets/thumb.webp';
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [menuBar, setMenuBar] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const refSearchBar = useRef(null);
  const refMenuBar = useRef(null);
  const refNotif = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true);
    window.addEventListener('keydown', handleEscape);
  }, []);

  const handleShowNavbar = () => {
    if (pathname === '/login' || pathname === '/register' || pathname === '/forget-password' || pathname === '/reset-password') {
      return false;
    } else {
      return true;
    }
  };

  const handleOutsideClick = (e) => {
    if (!refSearchBar.current.contains(e.target)) {
      setSearchBar(false);
    }
    if (!refMenuBar.current.contains(e.target)) {
      setMenuBar(false);
    }
    if (!refNotif.current.contains(e.target)) {
      setShowNotif(false);
    }
  };

  const handleEscape = (e) => {
    if (e.keyCode === 27) {
      setSearchBar(false);
    }
  };

  return (
    <div className={`${handleShowNavbar() === true ? 'block' : 'hidden'} md:relative w-full shadow py-5 px-5 md:px-0`}>
      <div className={`${searchBar === true ? 'fixed' : 'hidden'} h-screen bottom-0 left-0 right-0 bg-dark-background/35 z-10 backdrop-blur`}></div>
      {/* search pop up */}
      <div className={` ${searchBar === true ? 'absolute' : 'hidden'} left-0 right-0 md:top-32 top-16 px-5 md:px-0 z-20`}>
        <div className="lg:w-1/2 md:w-[65%] w-full mx-auto bg-light-container dark:bg-dark-container rounded-lg overflow-hidden shadow" ref={refSearchBar}>
          {/* search icon */}
          <div className="flex gap-3 justify-between items-center bg-light-background dark:bg-dark-in-container p-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input placeholder="Search aricle here..." type="text" className="w-full bg-light-background dark:bg-dark-in-container focus:outline-none" />
            <p className="text-xs p-[3px] opacity-50 rounded-lg border-light-text dark:border-dark-text border-[2px] cursor-pointer" onClick={(e) => setSearchBar(false)}>
              Esc
            </p>
          </div>
          {/* result content */}
          <div className="max-h-[600px] overflow-scroll px-10">
            <div className="flex items-center gap-5 border-b-[1px] border-dark-in-container py-5">
              <div className="xl:w-[25%] md:w-[50%] hidden md:block">
                <Image src={thumb} className="rounded-xl" />
              </div>
              <div className="w-full">
                <h3 className="xl:text-lg text-base font-bold mb-1 truncate">5 Common Mistakes with useEffect</h3>
                <p className="xl:text-sm text-xs">
                  When reviewing React codebases, I often see that useEffect is being used for everything. However, most of the time, it is not required. In this article, I point out the most common misuses of useEffect in the codebases
                  that I review every day.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 border-b-[1px] border-dark-in-container py-5">
              <div className="xl:w-[25%] md:w-[50%] hidden md:block">
                <Image src={thumb} className="rounded-xl" />
              </div>
              <div className="w-full">
                <h3 className="xl:text-lg text-base font-bold mb-1 truncate">5 Common Mistakes with useEffect</h3>
                <p className="xl:text-sm text-xs">
                  When reviewing React codebases, I often see that useEffect is being used for everything. However, most of the time, it is not required. In this article, I point out the most common misuses of useEffect in the codebases
                  that I review every day.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 border-b-[1px] border-dark-in-container py-5">
              <div className="xl:w-[25%] md:w-[50%] hidden md:block">
                <Image src={thumb} className="rounded-xl" />
              </div>
              <div className="w-full">
                <h3 className="xl:text-lg text-base font-bold mb-1 truncate">5 Common Mistakes with useEffect</h3>
                <p className="xl:text-sm text-xs">
                  When reviewing React codebases, I often see that useEffect is being used for everything. However, most of the time, it is not required. In this article, I point out the most common misuses of useEffect in the codebases
                  that I review every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex justify-between items-center">
        <Link className="font-bold md:text-2xl text-xl" href={'/'}>
          ✨Blink Media
        </Link>
        {/* menu */}
        <div className="flex gap-3 justify-center items-center">
          {/* search icon */}
          <div className="rounded-full cursor-pointer bg-light-container dark:bg-dark-container p-2 md:p-3" onClick={() => setSearchBar(!searchBar)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          {/* notif icon */}
          <div className="md:relative rounded-full cursor-pointer bg-light-container dark:bg-dark-container p-2 md:p-3" onClick={(e) => setShowNotif(!showNotif)} ref={refNotif}>
            <div className="relative ">
              <div className="absolute right-[-2px] top-[-4px] bg-primary rounded-full w-4 h-4 flex justify-center items-center">
                <p className="text-xs font-semibold">3</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-7 h-7">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </div>
            {/* pop notification */}
            <div
              className={`${
                showNotif === true ? 'block' : 'hidden'
              } fixed md:absolute md:top-16 md:-left-40 md:-right-40 left-0 right-0 bottom-0 top-20 md:bottom-auto px-2 md:rounded-lg rounded-tl-2xl rounded-tr-2xl bg-light-container dark:bg-dark-container shadow `}
              ref={refNotif}
            >
              <div className="p-2">
                <div className="flex gap-2 border-b-[1px] py-3 border-dark-in-container justify-between items-center">
                  <Image src={memoji8} width={50} />
                  <div className="text-xs">
                    <p>
                      <span className="font-semibold">username.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 border-b-[1px] py-3 border-dark-in-container justify-between items-center">
                  <Image src={memoji8} width={50} />
                  <div className="text-xs">
                    <p>
                      <span className="font-semibold">username.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 border-b-[1px] py-3 border-dark-in-container justify-between items-center">
                  <Image src={memoji8} width={50} />
                  <div className="text-xs">
                    <p>
                      <span className="font-semibold">username.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* profile picture */}
          <div className="md:relative flex gap-3 justify-center items-center cursor-pointer" onClick={() => setMenuBar(!menuBar)} ref={refMenuBar}>
            {/* pop up menu */}
            <div
              className={`${
                menuBar === true ? 'block' : 'hidden'
              } md:absolute fixed left-0 md:-left-10 right-0 md:top-16 bottom-0 md:bottom-auto px-2 md:rounded-lg rounded-tl-2xl rounded-tr-2xl bg-light-container dark:bg-dark-container shadow`}
              ref={refMenuBar}
            >
              <div className="flex gap-2 items-center p-3 cursor-pointer border-b dark:border-dark-in-container">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <p>My Profile</p>
              </div>
              <div className="flex gap-2 items-center p-3 cursor-pointer border-b dark:border-dark-in-container">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                <p>Write Article</p>
              </div>
              <div className="flex gap-2 items-center p-3 cursor-pointer border-b dark:border-dark-in-container">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                  />
                </svg>
                <p>Content Manager</p>
              </div>
              <div className="flex gap-2 items-center p-3 cursor-pointer mb-1" onClick={() => router.push('/login')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                </svg>
                <p>Log Out</p>
              </div>
            </div>
            <div className="rounded-full overflow-hidden md:w-12 w-11">
              <Image src={profile} />
            </div>
            <div className="hidden md:block">
              <p className="text-xs">Wellcome,</p>
              <p className="text-sm font-bold">Adzeni Rustianda</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
