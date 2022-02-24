import {BaseRequest} from '../../common/hooks/HTTPHook'
export const useSignIn = () => {
    const postSignIn = async (body: string) => {
        return await BaseRequest(`/api/Auth/SignIn`, "POST", body, {'Content-Type': 'application/json'})
    }
    return {postSignIn}
}

