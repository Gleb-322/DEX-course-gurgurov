import { useRef, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { cd, cdBack, print, nextCommand, prevCommand, errorMessage } from './actions'
import { IInitialState } from "./reducer"
import './App.css'

const App = () => {
  const history = useSelector((state: IInitialState) => state.history)
  const directory = useSelector((state: IInitialState) => state.directory);
  const statePrevCommand = useSelector((state: IInitialState) => state.statePrevCommand);
  const stateNextCommand = useSelector((state: IInitialState) => state.stateNextCommand);

  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  })

  const enterCaseIf = () => {
    if (inputRef.current) {
      if (inputRef.current.value.split(' ')[1] === '..' && inputRef.current.value.split(' ').length === 2) {
        dispatch(cdBack(inputRef.current.value))
        inputRef.current.value = ""

      } else if (inputRef.current.value.split(' ').length > 2) {
        const syntaxError = `Не удается найти позиционный параметр, который принимает аргумент - ${inputRef.current.value.split(' ')[2]}.`
        dispatch(errorMessage(syntaxError))
        inputRef.current.value = ""

      } else if (inputRef.current.value.split(' ').length === 2) {
        dispatch(cd(inputRef.current.value))
        inputRef.current.value = ""
      } 
    }
  }

  const enterCaseElse = () => {
    if (inputRef.current) {
      if (inputRef.current.value.split(' ')[0] !== 'cd' && inputRef.current.value.split(' ')[0] !== 'print') {
        const commandNotFound = `${inputRef.current.value.split(' ')[0]} - такой команды не существет`
        dispatch(errorMessage(commandNotFound))
        inputRef.current.value = ""

      } else if (inputRef.current.value.split(' ')[0] === 'print') {
        dispatch(print(inputRef.current.value))
        inputRef.current.value = ""

      } else if (inputRef.current.value === 'cd') {
        dispatch(cd(inputRef.current.value))
      }
    }
  }

  const enterCase = () => {
    if (inputRef.current) {
      (inputRef.current.value.split(' ')[0] === 'cd') ? enterCaseIf() : enterCaseElse()
    }
  }

  const arrowUpCase = () => {
    if (inputRef.current) {
      dispatch(prevCommand())
      inputRef.current.value = statePrevCommand
    }
  }

  const arrowDownCase = () => {
    if (inputRef.current) {
      dispatch(nextCommand())
      inputRef.current.value = stateNextCommand
    } 
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'Enter':
        console.log('-------------------------')
        console.log('Enter')
        enterCase()
        break;

      case 'ArrowUp':
        console.log('-------------------------')
        console.log('ArrowUp')
        arrowUpCase()
        break;

      case 'ArrowDown':
        console.log('-------------------------')
        console.log('ArrowDown')
        arrowDownCase()
        break;

      default:
        break;
    } 
  }

  return (
    <div className="App">
      <div className="history">
        {history.map((el, i) => <div key={i}>{el}</div>)}
      </div>
      <div className="App_block">
        <div className="directory">{directory.join('')}</div>
        <input 
          className="input" 
          type="text"
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
      </div>
      
    </div>
  );
}

export default App;