export const request = async (url: string) => {
    // const _apiBase = 'dev.trainee.dex-it.ru/swagger/v1/swagger.json'
    // const response = await fetch(`${_apiBase}${url}`)
    const response = await fetch(`url`)

    if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`)
    }
    return await response.json()
}

export const getPlayers = async () => {
    return await request(`/GetPlayers`)
}
export const getSimplePlayers = async () => {
    return await request(`/Get`)
    }
export const getPosition = async () => {
    return await request(`/GetPositions`)
}
  
