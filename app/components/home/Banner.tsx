import Image from "@/node_modules/next/image"

const Banner = () => {
  return (
    <div className="h-[237px] flex items-center justify-center bg-black">
        <div className="h-[137px] relative w-full">
            <Image src={'/banner.jpeg'} fill className="object-cover"/>
        </div>
    </div>
  )
}

export default Banner