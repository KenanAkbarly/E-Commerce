interface HeadingProps{
    center:boolean,
    text:string
}
const Heading:React.FC<HeadingProps> = ({center,text}) => {
  return (
    <div className={`font-semibold text-slate-900 px-3 md:py-8 md:text-2xl ${center? 'text-center':'text-start'}`}>{text}</div>
  )
}

export default Heading