'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'
import { ProductType } from '@/constans'
import { Input } from '@/components/ui/input'


interface ProductModalProps {
    product: ProductType
}

const ProductModal = ({ product }: ProductModalProps) => {

    const [quantity, setQuantity]=useState(1)


    const descQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    const addQuantity = () => {
        setQuantity(quantity + 1)
    }


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive">Detail</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[900px]'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className=''>
                        <Image alt={product.title} className='w-full mb-4 rounded-xl h-96 object-cover' src={product.image} width={1000} height={500} />
                    </div>
                    <div className='p-4'>
                        <h2 className='text-4xl font-semibold'>{product.title}</h2>
                        <p className='mt-5 font-light'>{product.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, voluptatibus!</p>
                        <div className='flex mt-8 justify-between items-center'>
                            <span>${product.price}</span>
                            <span className='line-through'>${product.mrp}</span>
                        </div>

                        <div className='flex flex-row items-center gap-4'>
                            <Button onClick={descQuantity} variant='destructive'>-</Button>
                            {quantity}
                            <Button onClick={addQuantity} variant='success'>+</Button>
                        </div>
                    </div>

                </div>

                <DialogFooter className=''>
                    <Button>Add to Cart</Button>
                </DialogFooter>
            </DialogContent>

        </Dialog>




    )
}

export default ProductModal