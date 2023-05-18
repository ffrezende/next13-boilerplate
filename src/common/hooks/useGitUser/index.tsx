import { getGitUser } from '@/common/services'

export default function useGitUser() {
  const getUserGitInfo = async () => {
    const user = await getGitUser('ffrezende')
  }

  return { getUserGitInfo }
}
