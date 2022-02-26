// import {BaseRequest} from '../BaseRequest'
// export const useTeams = () => {

//     const getTeams = async (token: string) => {
//         return await BaseRequest(`/api/Team/GetTeams`,"GET", null, {'Content-Type': 'application/json', 'Authorization' : `Bearer ${token}`})
//     }
//     const getPagTeams = async (token: string) => {
//         return await BaseRequest(`/api/Team/Get`,"GET", null, {'Content-Type': 'application/json', 'Authorization' : `Bearer ${token}`})
//     }
//     // const addTeams = async (body: BodyInit, token:string) => {
//     //     return await BaseRequest(`$/api/Teams/Add`, "POST", body, {'Content-Type': 'application/json', 'Authorization' : `Bearer ${token}`})
//     // }

//     return {getTeams, getPagTeams}
// }

export const name = () => {
    return (
        <div></div>
    )
};