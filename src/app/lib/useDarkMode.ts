

import { useState, useEffect } from 'react'

// Define a union type of two possible themes
type Theme = 'dark' | 'light'

// Define a custom hook called useDarkMode that returns a tuple with a theme and a function to set the theme
function useDarkMode(): [Theme, React.Dispatch<React.SetStateAction<Theme>>] {
  // Use the useState hook to create a theme state variable and a function to update it
  const [theme, setTheme] = useState<Theme>(
    // If localStorage.theme exists and is one of the two defined themes, use that as the initial theme, otherwise default to "dark"
    typeof window !== 'undefined' ? (localStorage.theme as Theme) : 'dark'
  )

  // Create a colorTheme variable that is the opposite of the current theme
  const colorTheme: Theme = theme === 'dark' ? 'light' : 'dark'

  // Use the useEffect hook to update the document's root element when the theme changes
  useEffect(() => {
    // Get the root element of the current document
    const root = window.document.documentElement

    // Remove the previous color theme class and add the new one
    root.classList.remove(colorTheme)
    root.classList.add(theme)

    // If localStorage is available, save the current theme to it
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme)
    }
  }, [theme, colorTheme]) // Only re-run this effect if the theme or colorTheme changes

  // Return a tuple with the current colorTheme and the setTheme function
  return [colorTheme, setTheme]
}

// Export the useDarkMode hook as the default export
export default useDarkMode
