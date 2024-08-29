import Image from 'next/image';
import React from 'react'

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className='flex flex-row items-center justify-center scale-x-14'>
            <div className='hidden lg:block lg:w-2/5 h-screen'>
                <Image alt="logo" className='w-full h-screen brightness-75 object-cover' 
                src={`/login.jpg`} width={1080} height={1920}  />
            </div>
            <div className='w-full ml-5 md:w-3/5 md:mt-0 mt-16'>
              {children}
            </div>
        </div>
    )
}

export default AuthLayout