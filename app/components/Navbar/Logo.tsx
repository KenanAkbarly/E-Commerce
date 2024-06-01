'use client'
import Image from "@/node_modules/next/image"
import { useRouter } from 'next/navigation';

const Logo = () => {
  let router = useRouter()
  const handleChange = ()=>{
    router.push(`/`)
  }
  return (
    <div onClick={handleChange} className="cursor-pointer">
      <Image src={'/logo.png'} alt='Logo' width={120} height={60}/>
    </div>
  )
}

export default Logo