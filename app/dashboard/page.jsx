import React from 'react'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'

export const metadata = {
    title: "Moodie ⋅ Dashboard",
}
export default function DashboardPage() {
    const isAuthenticated = true;


  return (
    isAuthenticated ? <Dashboard /> : <Login />
  )
}
