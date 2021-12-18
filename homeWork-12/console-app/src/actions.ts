const cd = (str: string) => {
    return {
        type: 'cd',
        payload: str
    }
}

const print = (str: string) => {
    return {
        type: 'cd/print',
        payload: str
    }
}

const cdBack = (str: string) => {
    return {
        type: 'cd/back',
        payload: str
    }
}

const prevCommand = () => {
    return {
        type: 'cd/prevCommand'
    }
}

const nextCommand = () => {
    return {
        type: 'cd/nextCommand'
    }  
}

const errorMessage = (str: string) => {
    return {
        type: 'cd/errorMessage',
        payload: str
    }
}

export {
    cd,
    print,
    cdBack,
    prevCommand,
    nextCommand,
    errorMessage
}