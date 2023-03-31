import Link from 'next/link'
import { projects } from '../constants/constants'
import { useState, useEffect } from 'react'

import React from 'react'
import Image from 'next/image'

import { FaGithub,FaExternalLinkAlt } from 'react-icons/fa'

const Display = ({ imageUrl, text, description, tags, source, code }) => {
  const cardStyle = `
    relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] mask [backface-visibility:hidden]
  `

  const frontStyle = `
    absolute inset-0 z-10 bg-slate-800 rounded-xl text-center text-white 
  `

  const backStyle = `
    absolute inset-0 h-full w-full  rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] mask z-0
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
              <div className='flex min-h-full flex-col items-center w-4/5 ml-8 justify-around'>
                <h1 className='text-xl font-bold'>{text}</h1>
                <p className='text-base'>
                  {description ? description : 'No description'}
                </p>
                <p className='text-base'>Built with: {tags}</p>
              </div>
            </div>
            <div className={backStyle}>
              <Image
                alt={text}
                src={imageUrl}
                fill
                className='rounded-xl object-cover shadow-xl shadow-black/80'
              />
            </div>
            <div className={overlayStyle}></div>
          </div>
        </div>
      </div>
      <div className='mt-4 flex space-x-4'>
        <button className=' text-white text-sm py-1 px-3 rounded-md hover:text-[#ecb365]'>
        <Link href={source}><FaExternalLinkAlt /></Link>  
        </button>
        <button className=' text-white p-1 rounded-md hover:text-[#ecb365]'>
          <Link href={code}><FaGithub /></Link>
        </button>
      </div>
    </div>
  )
}

export default Display
