
export const useGetTeams = () => {
    // @ts-ignore
    const [request] = useHttp()

    const _apiBase = 'http://dev.trainee.dex-it.ru/api/Team' 

    const getTeams = async () => {
        return await request(`${_apiBase}/GetTeams`)
    }
    const getSimpleTeams = async () => {
        return await request(`${_apiBase}/Get`)
    }

    return {getTeams, getSimpleTeams}
}

