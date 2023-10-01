import { Tabs } from "@/components/common/tabs"

import React, { useState } from "react"
import Feed from "./components/feed"

const News = () => {
  const [selectedTab, setSelectedTab] = useState("a")
  return (
    <div className="py-6 pl-5">
      <Tabs
        tabs={[
          { id: "feed", title: "FEED", content: <Feed /> },
          { id: "people", title: "PEOPLE", content: "Content of Tab 2" },
          { id: "page", title: "PAGE", content: "Content of Tab 3" },
        ]}
        selectedTab={selectedTab}
        onSelectTab={setSelectedTab}
      />
    </div>
  )
}

export default News
