import {BaseRequest} from '../../common/hooks/HTTPHook'
export const useSignUp = () => {
    const postSignUp = async (body: string) => {
        return await BaseRequest(`/api/Auth/SignUp`, "POST", body, {'Content-Type': 'application/json'})
    }
    return {postSignUp}
}
