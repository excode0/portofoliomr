import React from 'react';

const Home = () => {
  return (
    // <div className='sticky top-0 min-h-screen w-full bg-background z-20'>
    //   <div className='bg-background flex flex-col justify-between h-screen '>
    //     <div className='p-5 flex flex-col mt-10 md:mt-20'>
    //       <div className='flex justify-center'>
    //         <span className='font-serif md:text-8xl text-xl text-text font-bold'>
    //           MUHAMMAD RIVAN
    //         </span>
    //       </div>
    //       <div className='flex justify-center items-center  gap-2 md:gap-5 mt-2 md:mt-5'>
    //         <span className='w-11 md:w-52 h-1 md:h-2 bg-text' />
    //         <span className='font-sans text-text md:text-4xl'>FullStack</span>
    //         <span className='w-11 md:w-52 h-1 md:h-2 bg-text' />
    //         <span className='font-sans text-text md:text-4xl'>UI/UX</span>
    //         <span className='w-11 md:w-52 h-1 md:h-2 bg-text' />
    //       </div>
    //     </div>

    //     <div className='w-full flex justify-between'>
    //       <div className='md:w-[30%] h-full flex flex-col justify-end text-text p-5'>
    //         <span className='text-sm md:text-xl'>
    //           I am now a freelance based in Indonesia who loves creating
    //           engaging brands & experiences for the web. Working as freelance
    //           since 2018
    //         </span>
    //       </div>
    //       <div className='flex justify-end items-end'>
    //         <div className='flex gap-5 bg-secondary p-2 md:rounded-l-xl'>
    //           <span>Home</span>
    //           <span>About</span>
    //           <span>Project</span>
    //           <span>Aksiblitas</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='fixed top-0 min-h-screen w-full bg-background z-10'>
      <div className='flex flex-col justify-center items-center h-screen'>
        <div className='p-5'>
          <span className='font-serif md:text-8xl text-xl text-text font-bold'>
            MUHAMMAD RIVAN
          </span>
        </div>
        <div className='flex justify-center items-center gap-2 md:gap-5 mt-2 md:mt-5'>
          <span className='w-11 md:w-52 h-1 md:h-2 bg-text' />
          <span className='font-sans text-text md:text-4xl'>FullStack</span>
          <span className='w-11 md:w-52 h-1 md:h-2 bg-text' />
          <span className='font-sans text-text md:text-4xl'>UI/UX</span>
          <span className='w-11 md:w-52 h-1 md:h-2 bg-text' />
        </div>
      </div>
    </div>
  );
};

export default Home;
