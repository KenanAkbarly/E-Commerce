'use client'
import Avatar from "../general/Avatar";
const Comment = ({prod}:{prod:any}) => {
  
  return (
    <div className="px-4">
      <div className="flex items-center gap-4">
      {<Avatar image={prod?.user?.image}/>}
      <div>
      <p>{prod?.user?.name}</p>
      <p className="text-[13px] text-gray-500">{prod?.createdDate.slice(0,10)}</p>
      </div>
      </div>
      <p className="px-4 py-3 text-slate-500 text-sm md:text-base"> 
      {prod.comment}
      </p>
    </div>
  )
}

export default Comment