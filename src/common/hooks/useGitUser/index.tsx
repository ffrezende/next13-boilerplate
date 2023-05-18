import { getGitUser, getGitUserRepos } from '@/common/services'

export default function useGitUser() {
  const getUserGitInfo = async (name: string) => {
    const user = await getGitUser(name)

    return user
  }

  const getUserReposInfo = async (repo: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const user = await getGitUserRepos(repo)

    return user
  }

  return { getUserGitInfo, getUserReposInfo }
}
