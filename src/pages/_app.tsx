import type { AppProps } from "next/app"
import AppLayout from "@/components/layouts/app-layout"
import Head from "next/head"
import "../../styles/global.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/next.svg" />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}
