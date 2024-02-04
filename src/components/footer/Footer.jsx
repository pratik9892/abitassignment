import React from 'react'

const Footer = () => {
  return (
    <div className='h-[370px] w-full bg-[#FFFFFF] md:flex md:items-center md:justify-center flex px-4 md:px-0'>
        <div className='w-[1169px] h-[121px]  flex items-center justify-between '>
            <div className='flex flex-col items-start justify-between gap-2'>
                <h1 className='font-bold text-4xl text-[#262626]'>aBit</h1>
                <div className='w-[313px] h-[48px]'>
                    <p className='text-xl font-normal text-[#000000]'>Changing the way in which creators and fans interact.</p>
                </div>
            </div>
            <div className='flex flex-col items-start justify-between gap-3 md:border-l-[1px] md:border-[#9F9F9F] pl-4'>
                <h2 className='font-bold text-sm text-[#262626]'>Home</h2>
                <h2 className='font-bold text-sm text-[#262626]'>Are you a Creator?</h2>
                <h2 className='font-bold text-sm text-[#262626]'>Support</h2>
            </div>
        </div>
    </div>
  )
}

export default Footer