import React from "react"
import News from "./news"
import Follows from "./follows"
import SidebarMenu from "./sidebar"

const Home = () => {
  return (
    <div className=" grid grid-cols-4 gap-6 m-auto overflow-hidden bg-bg-primary-200">
      <div className="md:col-span-1">
        <SidebarMenu />
      </div>
      <div className=" md:col-span-2">
        <News />
      </div>
      <div className="md:col-span-1">
        <Follows />
      </div>
    </div>
  )
}

export default Home
