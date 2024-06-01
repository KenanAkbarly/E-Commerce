'use client'

import Image from "@/node_modules/next/image"
import { useState } from "react"
import PageContainer from "../containers/PageContainer"
import Counter from "../general/Counter"
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
  return (
    <div className="my-10">
      <PageContainer>
          <div className="block md:flex gap-10 justify-center max-h-screen">
            <div className="relative w-1/4">
              <Image src={product?.image} alt='Product image' fill/>
            </div>
            <div className="w-1/2 space-y-3">
              <p className="text-xl md:text-2xl">{product?.name}</p>
              <p className="text-slate-500">{product?.description}</p>
              <p className="flex items-center gap-2">
                <p className="text-md font-semibold">Stok Vəziyyəti:</p>
                {
                  product.inStock ? <p className="text-green-500">Məhsul mövcuddur</p>: <p className="text-red-500">Məhsul mövcud deyil</p>
                }
              </p>
              <Counter increaseProductFunc={increaseProductFunc} decreaseProductFunc={decreaseProductFunc} cardProduct={cardProduct}/>
            </div>
          </div>
      </PageContainer>
    </div>
  )
}

export default DetailClient