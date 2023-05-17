import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full h-20 bg-gray-400">
      <div>Header</div>
      <h1 className="w-20 h-10 bg-red-400 text-center cursor-pointer">
        <Link href={'/'}>Home</Link>
      </h1>
    </div>
  )
}
