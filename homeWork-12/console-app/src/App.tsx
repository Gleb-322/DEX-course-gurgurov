import { useState, useRef, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { cd, cdBack, print, nextCommand, prevCommand, errorMessage } from './actions'
import { IInitialState } from "./reducer"
import './App.css'

const App = () => {

  const [input, setInput] = useState('')

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
  }, [])

  // useEffect(() => {
  //   setInput(statePrevCommand)
  // },[statePrevCommand])

  // useEffect(() => {
  //   setInput(stateNextCommand)
  // },[stateNextCommand])

  const enterCaseIf = () => {
    if (input.split(' ')[1] === '..' && input.split(' ').length === 2) {
      dispatch(cdBack(input))
      setInput('')

    } else if (input.split(' ').length > 2) {
      const syntaxError = `Не удается найти позиционный параметр, который принимает аргумент - ${input.split(' ')[2]}.`
      dispatch(errorMessage(syntaxError))
      setInput('')

    } else if (input.split(' ').length === 2) {
      dispatch(cd(input))
      setInput('')
    } 
  }

  const enterCaseElse = () => {
    if (input.split(' ')[0] !== 'cd' && input.split(' ')[0] !== 'print') {
      const commandNotFound = `${input.split(' ')[0]} - такой команды не существет`
      dispatch(errorMessage(commandNotFound))
      setInput('')

    } else if (input.split(' ')[0] === 'print') {
      dispatch(print(input))
      setInput('')

    } else if (input === 'cd') {
      dispatch(cd(input))
    }
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'Enter':
        (input.split(' ')[0] === 'cd') ? enterCaseIf() : enterCaseElse()
        break;

      case 'ArrowUp':
        dispatch(prevCommand())
        setInput(statePrevCommand)
        break;

      case 'ArrowDown':
        dispatch(nextCommand())
        setInput(stateNextCommand)
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
          value={input}
          ref={inputRef}
          onKeyUp={handleKeyUp}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      
    </div>
  );
}

export default App;