'use client'

import { Rating } from "@/node_modules/@mui/material/index"
import Image from "@/node_modules/next/image"
import { useState } from "react"
import PageContainer from "../containers/PageContainer"
import Button from "../general/Button"
import Counter from "../general/Counter"
import Heading from "../general/Heading"
import Comments from './Comments'
export type DetailClientProps={
  id:string
  name:string
  description:string
  price:number
  quantity:number
  image:string
  inStock:boolean
}

const DetailClient = ({product}:{product:any}) => {
  const [cardProduct, setCardProduct] = useState<DetailClientProps>({
    id:product.id,
    name:product.name,
    description:product.description,
    price:product.price,
    quantity:0,
    image:product.image,
    inStock:product.inStock,
  })
  const increaseProductFunc = ()=>{
    if(cardProduct.quantity == 10) return
    setCardProduct(prev=>({...prev , quantity:prev.quantity + 1}))
  }
  const decreaseProductFunc = ()=>{
    if(cardProduct.quantity == 0) return
    setCardProduct(prev=>({...prev , quantity:prev.quantity - 1}))
  }
  let productRating = (product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length)?.toFixed(1);

  
  
  return (
    <div className="my-10">
      <PageContainer>
          <div className="block md:flex gap-10 justify-center ">
            <div className="relative h-[200px] md:h-[400px] w-200px md:w-[400px]">
              <Image src={product?.image} alt='Product image' fill/>
            </div>
            <div className="w-fill md:w-1/2 space-y-3">
              
              <p className="text-xl md:text-2xl">{product?.name}</p>
              <div className="flex items-center gap-3">
                <Rating name="read-only" value={productRating} readOnly /> <span className="text-md">{isNaN(productRating)? 0: productRating}</span>
              </div>

              <p className="text-slate-500">{product?.description}</p>
              <p className="flex items-center gap-2">
                <p className="text-md font-semibold">Stok Vəziyyəti:</p>
                {
                  product.inStock ? <p className="text-green-500">Məhsul mövcuddur</p>: <p className="text-red-500">Məhsul mövcud deyil</p>
                }
              </p>
              <Counter increaseProductFunc={increaseProductFunc} decreaseProductFunc={decreaseProductFunc} cardProduct={cardProduct}/>
              <div className="flex gap-6">
              <p className="text-lg border p-3 inline-block rounded-sm font-bold">{product.price} $</p>
              <Button onClick={()=>{}} text='Əlavə et'  small />
              </div>
            </div>
          </div>
          <div className="border rounded-md bg-white drop-shadow-sm p-4 mt-5">
            <div className="flex">  <Heading text="Commentler" center={false}/> <p className="font-semibold text-slate-900 px-3 md:py-8 md:text-2xl">({product?.reviews.length})</p></div>
            {
              product?.reviews?.map((prod:any)=>(
                <Comments key={prod.id} prod={prod} />
              ))
            }
          </div>
      </PageContainer>
    </div>
  )
}

export default DetailClient