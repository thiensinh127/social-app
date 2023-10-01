import React, { useRef } from "react"
import classNames from "classnames"
import Link from "next/link"
import { SiOpenaccess } from "react-icons/si"
import { CgProfile } from "react-icons/cg"
import { useClickOutside } from "@/utils/hooks/useClickOutSide"
import { useRouter } from "next/router"
import Image from "next/image"
import IconHome from "@/components/icons/ic_home"

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
    label: "FEED",
    href: "/",
    icon: <IconHome />,
  },
  {
    label: "PROFILE",
    href: "/profile",
    icon: <SiOpenaccess className="w-6 h-6" />,
  },
  {
    label: "PAGE",
    href: "/page",
    icon: <CgProfile className="w-6 h-6" />,
  },
  {
    label: "TRENDING",
    href: "/trending",
    icon: <CgProfile className="w-6 h-6" />,
  },
]

const Sidebar = ({ open, setOpen }: Props) => {
  const { asPath = "" } = useRouter()
  console.log("🚀 ~ asPath:", asPath)
  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, (e) => {
    setOpen(false)
  })
  return (
    <div
      className={classNames({
        "flex flex-col pt-6 pl-8": true, // layout
        "bg-white-200 text-zinc-50": true, // colors
        "lg:w-full lg:sticky lg:top-26 lg:z-0 top-[64px] z-20 fixed": true, // positioning
        "lg:h-[calc(100vh_-_64px)] h-full w-[300px]": true, // for height and width
        "transition-transform .3s ease-in-out lg:-translate-x-0": true, //animations
        "-translate-x-full ": !open, //hide sidebar to the left when closed
      })}
      ref={ref}
    >
      <Image
        src="https://askbootstrap.com/preview/vogel-v-12/img/logo.png"
        alt="Landscape picture"
        width={51}
        height={51}
      />
      <nav className="lg:sticky top-0 lg:top-32">
        {/* nav items */}
        <ul className="py-2 flex flex-col gap-2">
          {navItems.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <li
                  className={classNames({
                    "text-primary-200 hover:bg-white-500 hover:shadow-shadow-sm hover:text-primary-500":
                      true, //colors
                    "flex gap-4 items-center ": true, //layout
                    "transition-colors ease-in-out duration-300": true, //animation
                    "rounded-[11px] px-[16px] py-3 mx-2": true, //self style
                    "bg-white-500 !text-primary-500 shadow-shadow-sm":
                      asPath.includes(item.href),
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
