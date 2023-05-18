export const getGitUser = async (gitName: string): Promise<any> => {
  const response = await fetch(`https://api.github.com/users/${gitName}`)

  return response.json()
}
