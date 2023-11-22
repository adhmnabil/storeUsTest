import React from 'react'
import { DotLoader } from 'react-spinners';
export default function Loader() {
  return (
    <div className='fixed top-0	right-0	bottom-0 left-0	flex justify-center items-center bg-[#00000073]'>
        <DotLoader color="#FFFFFF" />
    </div>
  )
}
