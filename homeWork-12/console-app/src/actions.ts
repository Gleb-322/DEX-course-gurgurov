const cd = (str: string) => ({
    type: 'cd',
    payload: str
})

const print = (str: string) => ({
    type: 'cd/print',
    payload: str
})

const cdBack = (str: string) => ({
    type: 'cd/back',
    payload: str
})

const prevCommand = () => ({
    type: 'cd/prevCommand'
})

const nextCommand = () => ({
    type: 'cd/nextCommand'
})

const errorMessage = (str: string) => ({
    type: 'cd/errorMessage',
    payload: str
})

export {
    cd,
    print,
    cdBack,
    prevCommand,
    nextCommand,
    errorMessage
}