// This code uses the ES6 module syntax to import variables, components, and hooks.
// Importing the 'name' and 'about' variables from the '../app/lib/info' module
import { name, about } from '../app/lib/info'

// Importing the 'BlogIcon' and 'GitHubIcon' components from the '../app/components/icons' module
import { BlogIcon, GitHubIcon } from '../app/components/icons'

// Importing the 'useDarkMode' custom hook from the './lib/useDarkMode' module
import useDarkMode from './lib/useDarkMode'

// Importing the 'RainEffect' component from the './components/rainEffect' module
import RainEffect from './components/rainEffect'

// Defining a functional React component called 'Home'
export default function Home() {
  // Using the custom 'useDarkMode' hook to get the current color theme and the function to change it
  const [colorTheme, setTheme] = useDarkMode()

  // The JSX code to render the Home component
  return (
    <section className='relative'>
      {/* Displaying the imported 'name' variable with specified CSS styles */}
      <h1 className='font-bold text-[#ecb365] text-3xl font-serif'>{name}</h1>

      {/* Displaying the result of the imported 'about' function with specified CSS styles */}
      <p className='my-5 max-w-[320px] text-justify text-neutral-200 dark:text-neutral-200 '>
        {about()}
      </p>

      {/* Creating a container to hold the GitHub and Blog links */}
      <div className='flex items-center md:items-center my-6 flex-col md:flex-row'>
        {/* Container for the GitHub link and the GitHubIcon component */}
        <div className='mt-8 ml-0 space-y-6 text-neutral-200'>
          {/* Creating a link to the GitHub profile with the 'GitHubIcon' component */}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://github.com/CVB91'
            className='flex items-center gap-2'
          >
            Lets connect on Github
            <GitHubIcon />
          </a>

          {/* Creating a link to the Blog with the 'BlogIcon' component */}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href=''
            className='flex items-center gap-2'
          >
            Have a peek at my blog
            <BlogIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
