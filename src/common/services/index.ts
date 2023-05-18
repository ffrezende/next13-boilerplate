const URL = 'https://api.github.com/users/'

export const getGitUser = async (gitName: string): Promise<any> => {
  const response = await fetch(`${URL}${gitName}`, {
    next: {
      // extended from commmon fetch
      revalidate: 30,
    },
    cache: 'no-cache', //  users get diferents responses
  })

  return response.json()
}

// const repo = `${URL}${gitName}/repos`
export const getGitUserRepos = async (gitName: string): Promise<any> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`, {
    next: {
      // extended from commmon fetch
      revalidate: 30,
    },
    cache: 'no-cache', //  users get diferents responses
  })

  return response.json()
}
