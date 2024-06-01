'use client'

import PageContainer from "../containers/PageContainer"

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
   <PageContainer>
     <div className=" flex items-center justify-center gap-3 md:gap-10 py-5  md:py-8 overflow-x-auto ">
        {categoryList.map((category,index)=>(
            <div key={index} className="border rounded-[15px] text-slate-700 text-xs md:text-lg cursor-pointer flex flex-1 min-w-[120px] justify-center px-4 py-2 text-center">
                {category.prodName}
            </div>
        ))}
    </div>
   </PageContainer>
  )
}

export default Category