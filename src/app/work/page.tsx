import Link from "next/link"
import { projects } from "../constants/constants"

export default function WorkPage() {

 

  return (
    <section>
      <h1 className='font-bold text-3xl text-[#ecb365] font-serif mb-5'>
        Work
      </h1>

      {projects.map((project) => (
        <Link
          key={project.id}
          className='flex flex-col space-y-1 mb-4 text-white'
          href='www.gooogle.com'
        >
          {project.title}
        </Link>
      ))}
    </section>
  )
  }

