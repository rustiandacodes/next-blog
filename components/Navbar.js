'use client';
import Link from 'next/link';
import Image from 'next/image';
import profile from '../assets/profile.png';
import { useRef, useState, useEffect } from 'react';

const Navbar = () => {
  const [searchBar, setSearchBar] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true);
    window.addEventListener('keydown', handleEscape);
  }, []);

  const refOne = useRef(null);

  const handleOutsideClick = (e) => {
    if (!refOne.current.contains(e.target)) {
      setSearchBar(false);
    }
  };

  const handleEscape = (e) => {
    if (e.keyCode === 27) {
      setSearchBar(false);
    }
  };

  console.log(searchBar);

  return (
    <div className="relative w-full shadow py-5 px-5 md:px-0">
      <div className={`${searchBar === true ? 'fixed' : 'hidden'} h-screen bottom-0 left-0 right-0 bg-dark-background/35 z-10 backdrop-blur`}></div>
      {/* search pop up */}
      <div className={` ${searchBar === true ? 'absolute' : 'hidden'} left-0 right-0 md:top-32 top-16 px-5 md:px-0 z-20`}>
        <div className="lg:w-1/2 md:w-[75%] w-full mx-auto bg-light-container dark:bg-dark-container rounded-lg overflow-hidden shadow" ref={refOne}>
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
          <div className="min-h-[600px] p-3">
            Vivamus ligula enim, dapibus id pulvinar condimentum, porttitor quis enim. Sed sed augue volutpat, iaculis arcu in, rutrum urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus
            purus mauris, viverra ac purus laoreet, venenatis rhoncus libero. Maecenas ultrices ipsum in purus lacinia faucibus. Donec iaculis dolor ut magna egestas elementum. Morbi mattis gravida turpis, ac accumsan lectus maximus id.
            Suspendisse vehicula massa vitae nisl condimentum dignissim. Maecenas ut ultricies libero. Cras tristique nibh suscipit, posuere leo sit amet, dictum diam.
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
          <div className="rounded-full cursor-pointer bg-light-container dark:bg-dark-container p-2 md:p-3" onClick={() => setSearchBar(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          {/* notif icon */}
          <div className="rounded-full cursor-pointer bg-light-container dark:bg-dark-container p-2 md:p-3">
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
          </div>
          {/* profile picture */}
          <div className="flex gap-3 justify-center items-center cursor-pointer">
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
