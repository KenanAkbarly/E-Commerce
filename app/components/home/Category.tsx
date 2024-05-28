'use client'
const Category = () => {
    const categoryList = [
        {
            prodName:'Ayyaqqabi'
        },
        {
            prodName:'canta'
        },
        {
            prodName:'kurtka'
        },
        {
            prodName:'Ayyaqqabi ucun ip'
        },
        {
            prodName:'Ayyaqqabi'
        },
        {
            prodName:'Ayyaqqabi'
        },
    ]
  return (
    <div className=" flex items-center justify-center gap-3 md:gap-10 py-5 px-3 md:px-10  md:py-8 overflow-x-auto ">
        {categoryList.map((category,index)=>(
            <div className="border rounded-[15px] text-slate-500 cursor-pointer flex flex-1 min-w-[120px] justify-center px-4 py-2 text-center">
                {category.prodName}
            </div>
        ))}
    </div>
  )
}

export default Category