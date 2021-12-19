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
	payload: string,
	errorMessage: string
}

export const reducer = (state = initialState, action:IAction) => {
	switch (action.type) {
		case 'cd':
			if (action.payload.trim() === 'cd') return state
			return {
				...state,
				history: [...state.history, state.directory.join('') + ' ' + action.payload],
				directory: [...state.directory, '\\' + action.payload.split(' ')[1]],
				bufferCommands: [...state.bufferCommands, action.payload],
				currentPosition: state.bufferCommands.length + 1
			}
				
		case 'cd/print':
			if (action.payload.trim() === 'print') return state
			return {
				...state,
				history: [...state.history, state.directory.join('') + " " + action.payload, action.payload.replace('print ', '')],
				bufferCommands: [...state.bufferCommands, action.payload],
				currentPosition: state.bufferCommands.length + 1
			}

		case 'cd/back':
			if (state.directory.length > 1) {
				return {
					...state,
					history: [...state.history, state.directory.join('') + " " + action.payload],
					bufferCommands: [...state.bufferCommands, action.payload],
					directory: state.directory.slice(0, state.directory.length - 1),
					currentPosition: state.bufferCommands.length + 1
				}
			} else {
				return state
			}
				
		case 'cd/prevCommand':
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
			if (state.currentPosition === state.bufferCommands.length - 1) {
				return {
					...state,
					stateNextCommand: state.bufferCommands[state.currentPosition]
				}
			} else {
				return {
					...state,
					stateNextCommand: state.bufferCommands[state.currentPosition + 1],
					currentPosition: state.currentPosition + 1
				}
			}

		case 'cd/errorMessage': 
			return {
				...state,
				history: [...state.history, state.directory.join('') + action.payload, action.errorMessage],
				bufferCommands: [...state.bufferCommands, action.payload],
				currentPosition: state.bufferCommands.length + 1
			}

		default:
			return state;
	}
}