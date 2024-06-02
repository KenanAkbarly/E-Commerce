'use client'
import { Rating } from "@/node_modules/@mui/material/index";
import Avatar from "../general/Avatar";
const Comment = ({prod}:{prod:any}) => {
  
  return (
    <div className="px-4">
      <div className="flex items-center gap-4">
      {<Avatar image={prod?.user?.image}/>}
      <div>
      <p>{prod?.user?.name}</p>
      <p className="text-[13px] text-gray-500">{prod?.createdDate.slice(0,10)}</p>
      <Rating name="read-only" size='small' value={prod?.rating} readOnly /> 

      </div>
      </div>
      <p className="px-4 py-3 text-slate-500 text-sm md:text-base"> 
      {prod.comment}
      </p>
    </div>
  )
}

export default Comment