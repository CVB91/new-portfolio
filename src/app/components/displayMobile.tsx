import Link from 'next/link'
import { projects } from '../constants/constants'
import { useState, useEffect } from 'react'

import React from 'react'
import Image from 'next/image'

const MobileDisplay = ({ imageUrl, text }) => {
 
  return (
    <div class='flex h-96 w-80 items-center justify-center'>
      <div class='group h-96 w-80 [perspective:1000px]'>
        <div class='relative h-full w-full rounded-xl shadow-xl'>
          <div class='absolute inset-0 h-4/5'>
            <Image
              alt={text}
              src={imageUrl}
              fill
              className='rounded-xl object-cover shadow-xl shadow-black/80'
            />
          </div>
          <div class='absolute bottom-2 left-1/4 h-1/5'>
            <div class='flex min-h-full flex-col items-center justify-center text-center'>
              <h1 class='mt-2 text-3xl font-bold'>Jane Doe</h1>
              <div class='flex w-full gap-6'>
                <button class='mt-2 rounded-md bg-neutral-100 py-1 px-2 text-sm'>
                  Discover
                </button>{' '}
                <button class='mt-2 rounded-md bg-neutral-100 py-1 px-2 text-sm'>
                  Github
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
