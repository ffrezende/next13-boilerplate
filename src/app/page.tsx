import useGitUser from '@/common/hooks/useGitUser'
import Link from 'next/link'

// Component Async calling promise
export default async function Home() {
  const { getUserGitInfo } = useGitUser()

  const user = await getUserGitInfo()
  return (
    <div className="flex flex-col justify-between w-full h-40 items-center">
      <h1 className="w-20 h-10 bg-red-400 text-center">Home</h1>
      <h2 className="w-20 h-10 bg-blue-400 text-center">
        <Link href={'/dashboard'}>Dashboard</Link>
      </h2>
      <h2 className="w-20 h-15 bg-yellow-400 text-center">
        <Link href={'/products/teste'}>Product param</Link>
      </h2>
      <div>{JSON.stringify(user, null, 2)}</div>
    </div>
  )
}
