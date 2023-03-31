import Link from 'next/link'
import { projects } from '../constants/constants'
import { useState, useEffect } from 'react'

import React from 'react'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const MobileDisplay = ({ imageUrl, text }) => {
  return (
    <div className='flex h-96 w-80 items-center justify-center'>
      <div className='group h-96 w-80 [perspective:1000px]'>
        <div className='relative h-full w-full rounded-xl '>
          <div className='absolute inset-0 h-4/5'>
            <Image
              alt={text}
              src={imageUrl}
              fill
              className='rounded-xl object-cover shadow-xl'
            />
          </div>
          <div className='absolute bottom-2  h-1/5 w-full'>
            <div className='flex min-h-full flex-col items-center justify-center text-center  mt-3 '>
              <h4 className='mt-2 font-bold '>{text}</h4>
              <div className='mt-2 flex space-x-4'>
                <button className='text-sm py-1 px-3 rounded-md text-[#ecb365]'>
                  <FaExternalLinkAlt />
                </button>
                <button className='p-1 rounded-md text-[#ecb365]'>
                  <FaGithub />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileDisplay
