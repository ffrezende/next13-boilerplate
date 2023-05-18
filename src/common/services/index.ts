export const getGitUser = async (gitName: string): Promise<any> => {
  const response = await fetch(`https://api.github.com/users/${gitName}`, {
    next: {
      // extended from commmon fetch
      revalidate: 30,
    },
    cache: 'no-cache', //  users get diferents responses
  })

  return response.json()
}

export const getGitUserRepos = async (gitName: string): Promise<any> => {
  const response = await fetch(`https://api.github.com/users/${gitName}/repos`, {
    next: {
      // extended from commmon fetch
      revalidate: 30,
    },
    cache: 'no-cache', //  users get diferents responses
  })

  return response.json()
}
