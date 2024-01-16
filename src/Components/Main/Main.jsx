import React from 'react'
import mainImg from '../../assets/heroImg.png'

const Main = () => {
  return (
    <div>
        <div className='h-100 w-100'>
        <img src={mainImg} alt="" className='opacity-90 object-cover h-[549px] w-full relative' />
        </div>
        <div className='md:absolute inset-1/4 flex flex-col items-center justify-center gap-5 absolute'>
            <h1 className='md:text-5xl text-3xl'>Furniture Store</h1>
            <p className='md:w-[70%] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nulla nam eos laudantium impedit corporis quidem expedita alias, iste deserunt officia ab quae, rem sapiente error vitae nemo. Minus, labore.</p>
            <button className='bg-[#c19a6b] text-white py-1 px-5 rounded-md'>Get Started</button>
        </div>
    </div>
  )
}

export default Main