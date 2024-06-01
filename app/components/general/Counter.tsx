import { DetailClientProps } from "../detail/DetailClient"

interface CounterProps{
    cardProduct:DetailClientProps
    increaseProductFunc:()=> void
    decreaseProductFunc:()=> void
}

const Counter:React.FC<CounterProps> = ({cardProduct,increaseProductFunc,decreaseProductFunc}) => {
const buttonStyle = 'w-10 h-8 border bg-transparent flex items-center justify-center text-lg rounded-md cursor-pointer'
  return (
    <div className="flex items-center gap-4">
        <div className={buttonStyle} onClick={decreaseProductFunc}>-</div>
        <div className="w-5 flex items-center justify-center">{cardProduct.quantity}</div>
        <div className={buttonStyle} onClick={increaseProductFunc}>+</div>
    </div>
  )
}

export default Counter