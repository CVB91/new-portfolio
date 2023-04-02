import Link from 'next/link'
import { projects } from '../constants/constants'
import { useState, useEffect } from 'react'

import React from 'react'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

type MobileProps = {
  key: string
  text: string
  imageUrl: string
  description: string // Add this line
  tags: string
  source: string
  code: string
}

const MobileDisplay = ({
  imageUrl,
  text,
  description,
  tags,
  source,
  code,
}: MobileProps) => {
  return (
    <div className='flex h-96 w-70 items-center justify-center'>
      <div className='group h-96 w-80 [perspective:1000px]'>
        <div className='relative h-full w-full rounded-xl '>
          <div className='absolute inset-0 h-4/5 bg-slate-800 rounded-xl text-center text-white'>
            <div className='flex min-h-full flex-col items-center w-4/5 ml-8 justify-around'>
              <h1 className='text-xl font-bold'>{text}</h1>
              <p className='text-base'>
                {description ? description : 'No description'}
              </p>
              <p className='text-base'>Built with: {tags}</p>
            </div>
          </div>
          <div className='absolute bottom-2  h-1/5 w-full'>
            <div className='flex min-h-full flex-col items-center justify-center text-center  mt-3 '>
              <h4 className='mt-2 font-bold '>{text}</h4>
              <div className='mt-2 flex space-x-4'>
                <button className='text-sm py-1 px-3 rounded-md text-[#ecb365]'>
                  <Link href={source}>
                    <FaExternalLinkAlt />
                  </Link>
                </button>
                <button className='p-1 rounded-md text-[#ecb365]'>
                  <Link href={code}>
                    <FaGithub />
                  </Link>
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
