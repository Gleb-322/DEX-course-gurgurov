import { useState, useRef, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux";
import {cd, cdBack, print, nextCommand, prevCommand, errorMessage} from './actions';
import './App.css';

interface IInitialState {
  history: string[],
  directory: string[],
  bufferCommands: string[],
  currentPosition: number,
  statePrevCommand: string,
  stateNextCommand: string
}

const App = () => {

  const [inputValue, setInputValue] = useState('')
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

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {

      case 'Enter':
        if (inputValue.split(' ')[0] === 'cd') {

          if (inputValue.split(' ')[1] === '..' && inputValue.split(' ').length === 2) {
            dispatch(cdBack(inputValue))
            if (inputRef.current) {
              inputRef.current.value = ""
            }

          } else if (inputValue.split(' ').length > 2) {
            const syntaxError = `Не удается найти позиционный параметр, который принимает аргумент - ${inputValue.split(' ')[2]}.`
            dispatch(errorMessage(syntaxError))
            if (inputRef.current) {
              inputRef.current.value = ""
            }

          } else if (inputValue.split(' ').length === 2) {
            dispatch(cd(inputValue))
            if (inputRef.current) {
              inputRef.current.value = ""
            }

          } 

        } else {
          if (inputValue.split(' ')[0] !== 'cd' && inputValue.split(' ')[0] !== 'print') {
            const commandNotFound = `${inputValue.split(' ')[0]} - такой команды не существет`
            dispatch(errorMessage(commandNotFound))
            if (inputRef.current) {
              inputRef.current.value = ""
            }

          } else if (inputValue.split(' ')[0] === 'print') {
            dispatch(print(inputValue))
            if (inputRef.current) {
              inputRef.current.value = ""
            }
          } else if (inputValue === 'cd') {
            dispatch(cd(inputValue))
          }
          
        }
        break;

      case 'ArrowUp':
        dispatch(prevCommand())
        if (inputRef.current) {
          inputRef.current.value = statePrevCommand
        }
        break;

      case 'ArrowDown':
        dispatch(nextCommand())
        if (inputRef.current) {
          inputRef.current.value = stateNextCommand
        } 
        break;

      default:
        break;
    } 
  }


  return (
    <div className="App">
      <div className="history">
        {
          history.map((el, i) => {
            return <div key={i}>{el}</div>
          })
        }
      </div>
      <div className="App_block">
        <div className="directory">{directory.join('')}</div>
        <input 
          className="input" 
          type="text"
          ref={inputRef}
          onKeyDown={handleKeyPress}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value.trim())}
        />
      </div>
      
    </div>
  );
}

export default App;
