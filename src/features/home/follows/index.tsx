import IconSearch from "@/components/icons/ic_search"
import React from "react"

const Follows = () => {
  return (
    <form className="py-6 pr-8">
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IconSearch color="#0d6efd" />
        </div>
        <input
          type="text"
          id="voice-search"
          className=" border-none text-primary-500 text-sm px-3 py-4 bg-white-500 rounded-border-base shadow-shadow-sm block w-full pl-10 p-2.5"
          placeholder="Search Vogel"
        />
      </div>
    </form>
  )
}

export default Follows
