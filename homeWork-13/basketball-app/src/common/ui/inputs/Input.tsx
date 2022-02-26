import { FC, useState } from 'react'
import { Iprop } from '../../helpers/InterfaceInputs'
import styled from 'styled-components'
import { ReactComponent as OpenEye} from '../../../assets/icons/open_eye.svg'
import { ReactComponent as CloseEye} from '../../../assets/icons/close_eye.svg'

export const Input: FC<Iprop> = ({name, type, value, label, onChangeInput, errorMessage}) => {
    const [toggleImg, setToggleImg] = useState(false)

    // switch (name) {

    //     case 'SignUpName':
    //         errorMessage ?  setMessage("Wrong name. Please, try again."): setMessage('')
    //         break
    //     case 'SignUpLogin':
    //         errorMessage ?  setMessage("Wrong login. Please, try again."): setMessage('')
    //         break
    //     case 'SignUpPassword':
    //         errorMessage ?  setMessage("Wrong Password. Please, try again."): setMessage('')
    //         break
    //     case 'SignUpPasswordAgain':
    //         errorMessage ?  setMessage("Passwords don't match"): setMessage('')
    //         break
    //     default:
    //         break

    // }

    return (
        <Label>
            <LabelText>{label}</LabelText>
            <InputMain 
                name={name} 
                type={type} 
                value={value}
                onChange={(e) => onChangeInput(e)}
            />
            {
            type === 'password' ? (
                <DivImg onClick={() => setToggleImg(!toggleImg)}>
                    {toggleImg ? <OpenEye/> : <CloseEye/>}
                </DivImg>
            ) : null
            }
            {
                name === 'SignUpName' ? (
                    <ErMessage>Wrong name. Please, try again.</ErMessage>
                ) : null
            }
            {
                name === 'SignUpLogin' ? (
                    <ErMessage>Wrong login. Please, try again.</ErMessage>
                ) : null
            }
            {
                name === 'SignUpPassword' ? (
                    <ErMessage>Wrong Password. Please, try again.</ErMessage>
                ) : null
            }
            {
                name === 'SignUpPasswordAgain' ? (
                    <ErMessage>Passwords don't match</ErMessage>
                ) : null
            }
            
        </Label>
    )
}


const InputMain = styled.input`
    box-sizing: border-box;
    position: relative;
    width: 366px;
    height: 40px;
    background: #F6F6F6;
    border-radius: 4px;
    z-index: 5;
    font-family: 'Avenir';
    border: none;
    padding: 8px 12px;
    font-weight: 500;
    font-size: 14px;
    color: #303030;
    :hover {
    background: #D1D1D1;
    }
    :focus {
    box-shadow: 0px 0px 5px #D9D9D9;
    outline: 0;
    }
    :disabled {
    color: #D1D1D1;
    }
`
const Label = styled.label`
  position: relative;
`
const LabelText = styled.span`
    position: absolute;
    top: -20px;
    left: 0;
    z-index: 10;
    font-family: 'Avenir';
    font-weight: 500;
    font-size: 14px;
    color: #707070;
`

const ErMessage = styled.span`
    position: absolute;
    top: 44px;
    left: 0;
    z-index: 10;
    font-family: 'Avenir';
    font-weight: 500;
    font-size: 12px;
    color: #FF768E;
`
// const InputError = styled.input`
//     box-sizing: border-box;
//     position: relative;
//     width: 366px;
//     height: 40px;
//     background: #F6F6F6;
//     border-radius: 4px;
//     z-index: 5;
//     border: none;
//     padding: 8px 12px;
//     font-family: 'Avenir';
//     font-weight: 500;
//     font-size: 14px;
//     color: #303030;
//     outline: 0;
// `

const DivImg = styled.div`
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 10;
`