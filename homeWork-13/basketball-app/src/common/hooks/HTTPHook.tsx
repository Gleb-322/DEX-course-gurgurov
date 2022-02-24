
const _apiBase = 'http://dev.trainee.dex-it.ru' 

export const BaseRequest = async (url: string, method: string, body: string | null, headers: {} ) => {
    
    
    try {
        const response = await fetch(`${_apiBase}${url}`, {method, body, headers})
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`)
        }
        return await response.json()
    } catch(e) {
        throw e
    }
}