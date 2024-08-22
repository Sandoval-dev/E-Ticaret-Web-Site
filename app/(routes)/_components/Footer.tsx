'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = () => {

  const router = useRouter()

  const handleClick = () =>{
    router.push("/")
  }
  return (
    <div className='text-sm text-center flex-col p-4'>
      <div>
        <Button variant='link' onClick={handleClick}>All right Reserved Ecommerce Website </Button>
      </div>
      <div>
        <Link target='_blank' href="https://www.linkedin.com/in/osman-kilic-809694231/">
          Copyright @ Osman Erdem
        </Link>
      </div>

    </div>
  )
}

export default Footer
