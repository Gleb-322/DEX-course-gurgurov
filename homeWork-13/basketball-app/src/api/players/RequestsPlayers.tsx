import {BaseRequest} from '../../common/hooks/HTTPHook'
export const usePlayers = () => {

    const getPlayers = async (token: string) => {
        return await BaseRequest(`/api/Player/GetPlayers`,"GET", null, {'Content-Type': 'application/json', 'Authorization' : `Bearer ${token}`})
    }
    const getPagPlayers = async (token: string) => {
        return await BaseRequest(`/api/Player/Get`,"GET", null, {'Content-Type': 'application/json', 'Authorization' : `Bearer ${token}`})
    }
    // const addPlayers = async (token: string, body: BodyInit) => {
    //     return await BaseRequest(`/api/Player/Add`, "POST", body, {'Content-Type': 'application/json', 'Authorization' : `Bearer ${token}`})
    // }

    return {getPlayers, getPagPlayers }
}
