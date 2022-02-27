const _apiBase = 'http://dev.trainee.dex-it.ru' 

const request = async (url: string, data: any, token: string | undefined) => {

    const tokening = localStorage.getItem("token")
    const headersForToken = tokening
    ? {
        Authorization : `Bearer ${tokening}`,
    } : {}
    const headersMultiPart = typeof data.body === 'string' ? {
        "Content-type" : "application/json;charset=utf-8",
    } : {}
    const response = await fetch(url, {
        ...data,
        headers: {
            mode: 'no-cors',
            ...headersForToken,
            ...headersMultiPart,
        },
    })

    if (response.ok) {
        if (response.headers.get('Content-Length') === '0') {
            return true
        }

        const typeResponse = response.headers.get("Content-type");
        let result;

        if (typeResponse === 'aplication/text') {
            result = await response.text()
            return result
        }
        result = await response.json()
        return result
    }

    // eslint-disable-next-line no-throw-literal
    throw {status: response.status}
}  

export const get = (url: string, token: string) => {
    return request(`${_apiBase}${url}`, {method: "GET"}, token)
}
export const post = (url: string, body: {}, token: string ) => {
    return request(`${_apiBase}${url}`, {method: "POST", body}, token)
}
export const put = (url: string, body: {}, token: string) => {
    return request(`${_apiBase}${url}`, {method: "PUT", body}, token)
}
export const remove = (url: string, token: string) => {
    return request(`${_apiBase}${url}`, {method: "DELETE"}, token)
}