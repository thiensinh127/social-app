import 'tailwindcss/tailwind.css'

import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from '@/stores/configureStore'

import Layout from './layout'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={'loading'}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Layout>{children}</Layout>
        </PersistGate>
      </Provider>
    </Suspense>
  )
}
