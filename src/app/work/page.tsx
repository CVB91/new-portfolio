'use client'

import Link from 'next/link'
import { projects } from '../constants/constants'
import { useState, useEffect } from 'react'

import React from 'react'
import Image from 'next/image'
import MobileDisplay from '../components/displayMobile'
import Display from '../components/display'

const Grid: React.FC<Props> = ({ projects }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // adjust the threshold as needed
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-10 place-content-center'>
      {projects.map((project) =>
        isMobile ? (
          <MobileDisplay
            key={project.title}
            text={project.title}
            imageUrl={project.image}
            description={project.description}
            tags={project.tags}
            source={project.source}
            code={project.code}
          />
        ) : (
          <Display
            key={project.title}
            text={project.title}
            imageUrl={project.image}
            description={project.description}
            tags={project.tags}
            source={project.source}
            code={project.code}
          />
        )
      )}
    </ul>
  )
}

export default function WorkPage() {
  return (
    <section>
      <h1 className='font-bold text-3xl text-[#ecb365] font-serif mb-5'>
        Work
      </h1>

      <Grid projects={projects} />
    </section>
  )
}