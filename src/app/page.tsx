import useGitUser from '@/common/hooks/useGitUser'
import Repos from '@/components/repos'
import User from '@/components/user'
import Link from 'next/link'

// Component Async calling promise
export default async function Home() {
  return (
    <div className="flex flex-col justify-between w-full h-40 items-center">
      <h1 className="w-20 h-10 bg-red-400 text-center">Home</h1>
      <h2 className="w-20 h-10 bg-blue-400 text-center">
        <Link href={'/dashboard'}>Dashboard</Link>
      </h2>
      <h2 className="w-20 h-15 bg-yellow-400 text-center">
        <Link href={'/products/teste'}>Product param</Link>
      </h2>

      <User />
      <Repos />
    </div>
  )
}
