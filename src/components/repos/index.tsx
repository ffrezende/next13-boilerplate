import useGitUser from '@/common/hooks/useGitUser'

export default async function Repos() {
  const { getUserReposInfo } = useGitUser()

  const user = await getUserReposInfo('ffrezende')
  return (
    <div className="w-50">
      <div>Repos:</div>
      <div>{JSON.stringify(user, null, 2)}</div>
    </div>
  )
}
