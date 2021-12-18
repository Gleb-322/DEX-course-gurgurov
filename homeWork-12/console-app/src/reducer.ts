export interface IInitialState {
	history: string[],
	directory: string[],
	bufferCommands: string[],
	currentPosition: number,
	statePrevCommand: string,
	stateNextCommand: string
}
const initialState: IInitialState = {
	history: [],
	directory: ['C:'],
	bufferCommands: [],
	currentPosition: 0,
	statePrevCommand: '',
	stateNextCommand: ''
}
interface IAction {
	type: string,
	payload: string
}

export const reducer = (state = initialState, action:IAction) => {
	// console.log('в начале reducer',state)
	switch (action.type) {
		case 'cd':
			if (action.payload.trim() === 'cd') return state

			// console.log('currentPos', state.currentPosition)
			// console.log('bufferCommands', state.bufferCommands)
			// console.log('statePrevCommand', state.statePrevCommand)
			// console.log('stateNextCommand', state.stateNextCommand)

			return {
				...state,
				history: [...state.history, state.directory.join('') + ' ' + action.payload],
				directory: [...state.directory, '\\' + action.payload.split(' ')[1]],
				bufferCommands: [...state.bufferCommands, action.payload],
				currentPosition: state.bufferCommands.length
			}
				
		case 'cd/print':
			if (action.payload.trim() === 'print') return state
			return {
				...state,
				history: [...state.history, state.directory.join('') + " " + action.payload, action.payload.replace('print ', '')],
				bufferCommands: [...state.bufferCommands, action.payload]
			}

		case 'cd/back':
			if (state.directory.length > 1) {
				return {
					...state,
					history: [...state.history, state.directory.join('') + " " + action.payload],
					directory: state.directory.slice(0, state.directory.length - 1)
				}
			} else {
				return state
			}
				
		case 'cd/prevCommand':
			// console.log('currentPos', state.currentPosition)
			// console.log('bufferCommands', state.bufferCommands)
			// console.log('statePrevCommand', state.statePrevCommand)
			// console.log('stateNextCommand', state.stateNextCommand)
			if (state.currentPosition === 0) {
				return {
					...state,
					statePrevCommand: state.bufferCommands[state.currentPosition]
				}
			} else {
				return {
					...state,
					currentPosition: state.currentPosition - 1,
					statePrevCommand: state.bufferCommands[state.currentPosition - 1]
				}
			}

		case 'cd/nextCommand':
			// console.log('currentPos', state.currentPosition)
			// console.log('bufferCommands', state.bufferCommands)
			// console.log('statePrevCommand', state.statePrevCommand)
			// console.log('stateNextCommand', state.stateNextCommand)
			if (state.currentPosition === state.bufferCommands.length - 1) {
				return {
					...state,
					stateNextCommand: state.bufferCommands[state.currentPosition]
				}
			} else {
				return {
					...state,
					stateNextCommand: state.bufferCommands[state.currentPosition],
					currentPosition: state.currentPosition + 1
				}
			}

		case 'cd/errorMessage': 
			return {
				...state,
				history: [...state.history, state.directory.join('') + '\n' + action.payload + '\n']
			}

		default:
			return state;
	}
}