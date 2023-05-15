import { ReactNode } from 'react'

interface AuthLayoutProp {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProp) {
  return (
    <div>
      <h1>AuthLayout</h1>
      {children}
    </div>
  )
}
