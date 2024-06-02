import PageContainer from "../containers/PageContainer"
import CardCount from "./CardCount"
import Hamburger from "./Hamburger"
import Logo from "./Logo"
import Search from "./Search"
import User from "./User"

const Navbar = () => {
  return (
    <PageContainer>
      <div className="flex items-center justify-between gap-3 px-4 py-8 md:gap-10 md:px-10 h-16 text-black ">
        <Logo />
        <Search />
        <CardCount/>
        <User />
        <Hamburger />
    </div>
    </PageContainer>
  )
}

export default Navbar