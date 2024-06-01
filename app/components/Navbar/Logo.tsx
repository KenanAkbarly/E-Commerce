import Image from "@/node_modules/next/image"

const Logo = () => {
  return (
    <div className="cursor-pointer">
      <Image src={'/logo.png'} alt='Logo' width={120} height={60}/>
    </div>
  )
}

export default Logo