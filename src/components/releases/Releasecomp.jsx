import React from 'react'

const Releasecomp = ({num,text}) => {
  return (
    <div className='flex flex-col border-l border-[#7A7A7A] font-inter pl-4 w-[110px] gap-2' >
        <h3 className='text-base font-bold text-[#565656]'>{num}</h3>
        <p className='font-sm font-normal text-[#696969] break-normal text-balance'>{text}</p>
    </div>
  )
}

export default Releasecomp