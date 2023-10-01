import IconCircleUser from "@/components/icons/ic_circle_user"
import IconComment from "@/components/icons/ic_comment"
import IconLike from "@/components/icons/ic_like"
import IconSetting from "@/components/icons/ic_setting"
import IconShare from "@/components/icons/ic_share"
import Image from "next/image"
import React from "react"

const CardPost = () => {
  return (
    <div className="my-6 flex gap-3 p-4 bg-white-500 rounded-border-base">
      <Image
        width={60}
        height={60}
        src="https://askbootstrap.com/preview/vogel-v-12/img/rmate1.jpg"
        alt="avatar"
        className="rounded-full h-[60px]"
      />

      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center gap-2 justify-between ">
          <div className="flex gap-2 items-center justify-start">
            <p className="tex-sm text-primary-500 font-medium">Shay Jordon</p>
            <p className="text-xs text-primary-200">@shay-jordon</p>
          </div>
          <div className="flex items-center justify-end gap-2">
            <p className="text-xs">19 Aug</p>
            <IconSetting className="cursor-pointer" />
          </div>
        </div>
        <div>
          Welcome to the Vogel family 🙂 1. Follow people you like by clicking
          on the ’+ Follow’ button to see their posts in your feed. 2. Share
          your thoughts with others and gain a following. Happy Vogel to you!
        </div>
        <Image
          width={300}
          height={300}
          src="https://askbootstrap.com/preview/vogel-v-12/img/post2.png"
          alt=""
          className="rounded-md w-full h-auto"
        />
        <div className="flex items-center justify-between gap-6">
          <div className="flex gap-2 items-center cursor-pointer">
            <IconLike color="#6c757d" />
            <p>30.4k</p>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <IconComment color="#6c757d" />
            <p>30.4k</p>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <IconShare color="#6c757d" />
            <p>Share</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <IconCircleUser width={36} color="#0d6efd" />
          <input
            className="w-full border-gray rounded-lg px-2 py-1 text-sm !focus:border-gray"
            type="text"
            placeholder=" Write Your comment"
          />
        </div>
      </div>
    </div>
  )
}

export default CardPost
