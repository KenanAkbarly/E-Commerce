import CardCount from "./CardCount"
import Hamburger from "./Hamburger"
import Logo from "./Logo"
import Search from "./Search"
import User from "./User"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-3 px-3 md:gap-10 md:px-10 h-16 text-black border-b-[1px] border-black">
        <Logo />
        <Search />
        <CardCount/>
        <User />
        <Hamburger />
    </div>
  )
}

export default Navbar