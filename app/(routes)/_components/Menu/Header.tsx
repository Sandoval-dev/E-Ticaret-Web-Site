'use client'
import { ModeToggle } from '@/components/ModeToggle'
import { Input } from '@/components/ui/input'
import { Heart, Search, ShoppingBagIcon, User, UserIcon } from 'lucide-react'
import { Pacifico } from 'next/font/google'
import React from 'react'
import NavMenu from './NavMenu'
import { Button } from '@/components/ui/button'
import MobileMenu from './MobileMenu'
import CartMenu from './Cart'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const pacificio = Pacifico({ subsets: ["cyrillic"], weight: "400" })


const Header = () => {
    const router = useRouter()
    const [query, setQuery] = React.useState('')

    const handleSearch = () => {
        if (query.trim()) {
           router.push(`/search?query=${encodeURIComponent(query)}`)
        }
    }

    return (
        <div className='mx-auto bgone shadow-md'>
            <div className='container flex flex-row items-center justify-between p-5'>
                <div>
                    <h2 className={`${pacificio.className} text-xl`}>ECoomerce</h2>
                </div>
                <div className='hidden md:flex relative md:min-w-96 lg:w-1/2'>
                    <Input className='w-full border-2' onChange={(e) => setQuery(e.target.value)} />
                    <Button onClick={handleSearch} variant='link' className='absolute right-1'>
                        <Search />
                    </Button>
                </div>
                <div className='flex flex-row items-center space-x-4'>
                    <ModeToggle />
                    <Link href='/fav'>
                        <Heart />
                    </Link>
                    <CartMenu />
                    <Link href='/login'>
                        <UserIcon />
                    </Link>
                    <MobileMenu />
                </div>
            </div>
            <NavMenu />
        </div>
    )
}

export default Header
