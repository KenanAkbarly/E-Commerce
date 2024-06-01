import { BlobOptions } from "buffer";
import React from "react";

interface ButtonProps{
    text:string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>)=> void
    small?: boolean;
    disabled?:boolean;
    outline?:boolean
}
const Button: React.FC<ButtonProps> = ({text,onClick,small,outline,disabled}) => {
  return (
    <button disabled={disabled} onClick={onClick} className={`p-3 rounded-md text-lg ${small? 'w-[250px]':'w-full'} ${outline? 'border text-black':'bg-black text-white hover:bg-[#1f2329] hover:drop-shadow-xl'}`}>
        {text}
    </button>
  )
}

export default Button