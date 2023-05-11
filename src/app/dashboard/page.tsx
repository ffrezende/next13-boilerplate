import Link from 'next/link'

export const metadata = {
  title: 'Dashboard',
}

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-between w-full h-40 items-center">
      <h1 className="w-20 h-10 bg-blue-400 text-center">Dashboard</h1>
      <h2 className="w-20 h-10 bg-red-400 text-center">
        <Link href={'/'}>Home</Link>
      </h2>
    </div>
  )
}
