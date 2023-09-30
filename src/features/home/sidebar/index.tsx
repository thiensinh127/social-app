import React, { useState, PropsWithChildren } from "react"

import Navbar from "@/components/layouts/navbar"
import Sidebar from "@/components/layouts/sidebar"

const SidebarMenu = (props: PropsWithChildren) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="grid min-h-screen grid-rows-header bg-bg-primary">
      <div className="lg:hidden">
        <Navbar onMenuButtonClick={() => setSidebarOpen((prev) => !prev)} />
      </div>

      <div className="grid lg:grid-cols-sidebar">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        {props.children}
      </div>
    </div>
  )
}

export default SidebarMenu
