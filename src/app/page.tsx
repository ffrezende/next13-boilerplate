import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col justify-between w-full h-40 items-center">
      <h1 className="w-20 h-10 bg-red-400 text-center">Home</h1>
      <h2 className="w-20 h-10 bg-blue-400 text-center">
        <Link href={'/dashboard'}>Dashboard</Link>
      </h2>
    </div>
  )
}
