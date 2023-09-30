import React, { useEffect } from 'react'


import { useTypedSelector } from '@/stores/configureStore'
import useAuth from '@/utils/hooks/useAuth'
import useNotify from '@/utils/hooks/useNotify'

const Layout = ({ children }: { children: React.ReactNode }) => {


  const { hide } = useNotify()
  const { isAuthenticated } = useAuth()

  return (
    <>
      {children}
      {/* {isAuthenticated ? children : <AuthLayout />} */}

    </>
  )
}

export default Layout
