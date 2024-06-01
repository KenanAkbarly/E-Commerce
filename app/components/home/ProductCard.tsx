'use client'
import { Rating } from '@/node_modules/@mui/material/index';
import Image from '@/node_modules/next/image'
import { useRouter } from 'next/navigation';
import textClip from '@/utils/TextClip';
import React from 'react'

const ProductCard = ({product}:{product:any}) => {
    let productRating = product?.reviews?.reduce((acc:number, item:any)=> acc + item.rating,0) / product?.reviews?.length
    let router = useRouter()
    const handleChange = ()=>{
      router.push(`product/${product.id}`)
    }
  return (
    <div onClick={handleChange} className='w-[240px] border-[1px] border-slate-500 p-5 rounded-sm cursor-pointer bg-transparent'>

    <div className='h-[170px] relative'>
        <Image src={product?.image} fill alt='Product Image' className='object-cover'/>
    </div>
    <div className='spacing-y-1'>
        <p className='text-center mt-2 text-md'>{textClip(product.name)}</p>
        <div className='text-center'>
        <Rating name="read-only" value={productRating} readOnly />
        <p className='font-bold'>{product.price} $</p>
        </div>
    </div>
    </div>
  )
}

export default ProductCard