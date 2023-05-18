import useGitUser from '@/common/hooks/useGitUser'

export default async function User() {
  const { getUserGitInfo } = useGitUser()

  const user = await getUserGitInfo('ffrezende')
  return (
    <div>
      <div>User:</div>
      <div>{JSON.stringify(user, null, 2)}</div>
    </div>
  )
}
