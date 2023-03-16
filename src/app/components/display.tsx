import Link from 'next/link'
import { projects } from '../constants/constants'
import { useState, useEffect } from 'react'

import React from 'react'
import Image from 'next/image'

import { FaGithub } from 'react-icons/fa'

const Display = ({ imageUrl, text }) => {
  const cardStyle = `
    relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] mask [backface-visibility:hidden]
  `

  const frontStyle = `
    absolute inset-0 z-10
  `

  const backStyle = `
    absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] mask z-0
  `

  const overlayStyle = `
    absolute inset-0 z-20 bg-transparent pointer-events-none group-hover:pointer-events-auto
  `

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex h-96 w-80 items-center justify-center'>
        <div className='group h-96 w-80 [perspective:1000px]'>
          <div className={cardStyle}>
            <div className={frontStyle}>
              <Image
                alt={text}
                src={imageUrl}
                fill
                className='rounded-xl object-cover shadow-xl shadow-black/80'
              />
            </div>

            <div className={backStyle}>
              <div className='flex min-h-full flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold'>Jane Doe</h1>
                <p className='text-lg'>Photographer & Art</p>
                <p className='text-base'>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <button
                  id='back'
                  className='mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900'
                >
                  Read More
                </button>
              </div>
            </div>
            <div className={overlayStyle}></div>
          </div>
        </div>
      </div>
      <div className='mt-4 flex space-x-4'>
        <button className=' text-white py-1 px-3 rounded-md hover:text-[#ecb365]'>
          Discover
        </button>
        <button className=' text-white p-1 rounded-md hover:text-[#ecb365]'>
          <FaGithub />
        </button>
      </div>
    </div>
  )
}

export default Display
