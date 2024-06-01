import { RxAvatar } from "react-icons/rx";
interface AvatarProps{
    image?:string
}
const Avatar:React.FC<AvatarProps> = ({image}) => {
    if(image) return <img width={40} className='rounded-full' src={image} alt='user photo'/>
    return <img width={40} className='rounded-full' src='/avatar.png' alt='avatar photo'/>
}

export default Avatar