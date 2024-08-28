import React from 'react'
import AccordionExample from '../_components/Accordion'
import AlertDialogExample from '../_components/AlertDialogExample'

const ContactPage = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-row items-center justify-center'>
        <div className='w-full md:w-1/2'>
        <AlertDialogExample/>
        </div>
        <div className='w-full md:w-1/2'>

        </div>
        <AccordionExample />
      </div>

    </div>
  )
}

export default ContactPage
