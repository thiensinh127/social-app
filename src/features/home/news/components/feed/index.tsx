import CardFollow from "@/components/common/card-follow"
import CardPost from "@/components/common/card-post"
import IconCirclePlus from "@/components/icons/ic_circle_plus"
import IconCircleUser from "@/components/icons/ic_circle_user"
import React from "react"

const Feed = () => {
  return (
    <>
      <div className="my-6 gap-2 flex items-center justify-between px-3 py-4 bg-white-500 rounded-border-base shadow-shadow-sm">
        <div className="flex gap-3 items-center">
          <IconCircleUser width={20} color="#0d6efd" />
          <p>What's on your mind.</p>
        </div>
        <IconCirclePlus width={20} color="#0d6efd" />
      </div>
      <CardFollow />
      <CardPost />
    </>
  )
}

export default Feed
