import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export async function sendContactData(contactDetails: {
  email: string
  name: string
  message: string
}): Promise<void> {
  const response = await fetch('api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong')
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
