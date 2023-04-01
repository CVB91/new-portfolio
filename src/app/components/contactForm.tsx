import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

import { sendContactData } from '../lib/utils'
import { toast } from './toast'

type NotificationType = {
  status: string
  title: string
  message: string
}

const ContactForm = (): JSX.Element => {
  const [enteredEmail, setEnteredEmail] = useState<string>('')
  const [enteredName, setEnteredName] = useState<string>('')
  const [enteredMessage, setEnteredMessage] = useState<string>('')
  const [requestError, setRequestError] = useState<string>()
  const [requestStatus, setRequestStatus] = useState<string>() //'pending', 'success', 'error

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(undefined)
        setRequestError(undefined)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [requestStatus])

  async function sendMessageHandler(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault()

    //add client-side validation optional here

    setRequestStatus('pending')

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      })

      setRequestStatus('success')
      setEnteredMessage('')
      setEnteredName('')
      setEnteredEmail('')
    } catch (error : any) {
      console.log(error.message)
      setRequestError(error.message)
      setRequestStatus('error')
    }
  }

 

  if (requestStatus === 'pending') {
    toast({
      title: 'Sending message...',
      message: 'Your message is on its way!',
      type: 'pending',
    })
  }

  if (requestStatus === 'success') {
    toast({
      title: 'Success!',
      message: 'Your message has been sent!',
      type: 'success',
    })
  }

  if (requestStatus === 'error') {
    toast({
      title: 'Error!',
      message: 'Something went wrong!',
      type: 'error',
    })
  }

  return (
    <>
      <section className=' my-8 rounded-xl bg-slate-800 w-full md:w-10/12 p-4 shadow-md text-lg'>
        <h1 className='text-xl md:text-2xl mb-4 text-center'>Get in touch</h1>
        <form className='space-y-4' onSubmit={sendMessageHandler}>
          <div className='flex flex-wrap -mx-2'>
            <div className='w-full md:w-1/2 px-2'>
              <label htmlFor='email' className='block  mb-1'>
                Your Email
              </label>
              <input
                type='email'
                id='email'
                required
                value={enteredEmail}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEnteredEmail(e.target.value)
                }
                className='w-full p-1 text-black rounded border-gray-400 bg-gray-50'
              ></input>
            </div>
            <div className='w-full md:w-1/2 px-2'>
              <label htmlFor='name' className='block  mb-1'>
                Your Name
              </label>
              <input
                type='text'
                id='name'
                required
                value={enteredName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEnteredName(e.target.value)
                }
                className='w-full p-1 rounded  text-black border-gray-400 bg-gray-50'
              ></input>
            </div>
          </div>
          <div className='w-full px-2'>
            <label htmlFor='message' className='block  mb-1'>
              Your Message
            </label>
            <textarea
              id='message'
              rows={5}
              required
              value={enteredMessage}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setEnteredMessage(e.target.value)
              }
              className='w-full p-1  text-black rounded border-gray-400 bg-gray-50'
            ></textarea>
          </div>

          <div className='text-right'>
            <button className='py-2 px-4 rounded bg-slate-700 text-white shadow-md hover:bg-slate-500 '>
              Send Message
            </button>
          </div>
        </form>
        
      </section>
    </>
  )
}

export default ContactForm
