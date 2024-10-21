import ReduxProvider from '@/provider'
import React from 'react'

export default function CommonLayout({children}){
  return (
    <ReduxProvider>
      {children}
    </ReduxProvider>
  )
}
