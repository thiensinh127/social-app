import Head from "next/head"
import AppLayout from "@/components/layouts/app-layout"
import Home from "@/features/home"

const App = () => {
  return (
    <>
      <Head>
        <title>Social App</title>
        <meta name="description" content="Social App" key="desc" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <Home />
      </AppLayout>
    </>
  )
}

export default App
