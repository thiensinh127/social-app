import React, { useRef } from "react"
import classNames from "classnames"
import Link from "next/link"
import { SiFuturelearn } from "react-icons/si"
import { SiOpenaccess } from "react-icons/si"
import { CgProfile } from "react-icons/cg"
import { useClickOutside } from "@/utils/hooks/useClickOutSide"

// define a NavItem prop
export type NavItem = {
  label: string
  href: string
  icon: React.ReactNode
}
// add NavItem prop to component prop
type Props = {
  open: boolean
  navItems?: NavItem[]
  setOpen(open: boolean): void
}
const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: <SiFuturelearn className="w-6 h-6" />,
  },
  {
    label: "Team",
    href: "/team",
    icon: <SiOpenaccess className="w-6 h-6" />,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <CgProfile className="w-6 h-6" />,
  },
  {
    label: "Calendar",
    href: "/calendar",
    icon: <CgProfile className="w-6 h-6" />,
  },
]

const Sidebar = ({ open, setOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, (e) => {
    setOpen(false)
  })
  return (
    <div
      className={classNames({
        "flex flex-col justify-between ": true, // layout
        "bg-bg-primary-200 text-zinc-50": true, // colors
        "lg:w-full lg:sticky lg:top-26 lg:z-0 top-[64px] z-20 fixed": true, // positioning
        "lg:h-[calc(100vh_-_64px)] h-full w-[300px]": true, // for height and width
        "transition-transform .3s ease-in-out lg:-translate-x-0": true, //animations
        "-translate-x-full ": !open, //hide sidebar to the left when closed
      })}
      ref={ref}
    >
      <nav className="lg:sticky top-0 lg:top-32">
        {/* nav items */}
        <ul className="py-2 flex flex-col gap-2">
          {navItems.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <li
                  className={classNames({
                    "text-[#6c757d] hover:bg-[#fff] hover:shadow-sm hover:text-[#000]":
                      true, //colors
                    "flex gap-4 items-center ": true, //layout
                    "transition-colors duration-300": true, //animation
                    "rounded-[11px] px-[16px] py-3 mx-2": true, //self style
                  })}
                >
                  {item.icon} {item.label}
                </li>
              </Link>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
export default Sidebar
