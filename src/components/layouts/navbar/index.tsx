import React from "react"
import { BsArrowLeftCircle } from "react-icons/bs"
import classNames from "classnames"
type Props = {
  onMenuButtonClick(): void
}
const Navbar = (props: Props) => {
  return (
    <nav
      className={classNames({
        "bg-white text-zinc-500": true, // colors
        "flex items-center": true, // layout
        "w-full fixed z-10 px-4 shadow-sm h-16": true, //positioning & styling
      })}
    >
      <div className="font-bold text-lg">My Logo</div>
      <div className="flex-grow"></div>
      <button className="lg:hidden" onClick={props.onMenuButtonClick}>
        <BsArrowLeftCircle className="h-6 w-6" />
      </button>
    </nav>
  )
}

export default Navbar
