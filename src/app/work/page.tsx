'use client'

import Link from "next/link"
import { projects } from "../constants/constants"
import {useState} from 'react'

import React from 'react'
import Image from "next/image"


const Display = ({
  imageUrl,
  altText,
  text,
}) => {
  return (
    <div className='flex min-h-full items-center justify-center bg-slate-400'>
      <div className='group h-96 w-80 [perspective:1000px]'>
        <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] '>
          <div className='absolute inset-0'>
            <img
              src={imageUrl}
              className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/40'
            />
          </div>
          <div className='absolute inset-0 h-full w-full rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform: rotateY(180deg)] [backface-visibility:hidden]'>
            <div className='flex min-h-full flex-col items-center justify-center'>
              <h1 className='text-3xl font-bold'>Hello</h1>
              <button className='mt-2 rounded-md bg-neutral-200 py-1 px-2 text-sm hover:bg-neutral-600'>
                Discover
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}





// function Accordion({ title, children }) {
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen)
//   }

//   return (
//     <div className='accordion'>
//       <button className='accordion-title' onClick={toggleAccordion}>
//         {title}
//       </button>
//       {isOpen && <div className='accordion-content'>{children}</div>}
//     </div>
//   )
// }


const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='accordion'>
      <button
        className='accordion-title  text-white py-2 px-4  mb-2'
        onClick={toggleAccordion}
      >
        {title}
      </button>
      <div
        className={`accordion-content ${
          isOpen ? 'accordion-expanded' : 'accordion-collapsed'
        } overflow-hidden transition-max-height duration-700 ease-in-out`}
        style={{
          maxHeight: isOpen ? '600px' : '0',
        }}
      >
        <div className='bg-white p-4 rounded-md shadow-md'>{children}</div>
      </div>
    </div>
  )
}

export default function WorkPage() {
  return (
    <section>
      <h1 className='font-bold text-3xl text-[#ecb365] font-serif mb-5'>
        Work
      </h1>

      {projects.map((project) => (
        <Accordion key={project.id} title={project.title}>
          <div className='flex flex-col space-y-1 mb-4 text-white'>
           <Display imageUrl={project.image} altText={project.title} text={project.description} />
          </div>
        </Accordion>
      ))}
    </section>
  )
}
