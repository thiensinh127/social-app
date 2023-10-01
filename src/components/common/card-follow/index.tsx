import Image from "next/image"
import React from "react"
import { Button } from "../button"

const CardFollow = () => {
  return (
    <div className=" w-[130px] p-4 flex flex-col justify-center items-center gap-4 bg-white-500 shadow-sm rounded-border-base">
      <div className="flex flex-col gap-2 justify-center items-center">
        <Image
          width={60}
          height={60}
          src="https://askbootstrap.com/preview/vogel-v-12/img/rmate1.jpg"
          alt="avatar"
          className="rounded-full"
        />
        <p className="text-sm text-primary-500 font-medium">Anisa Keena</p>
        <p className="text-xs text-primary-200">Designer</p>
      </div>
      <Button color="primary" borderRadius={50}>
        Following
      </Button>
    </div>
  )
}

export default CardFollow
