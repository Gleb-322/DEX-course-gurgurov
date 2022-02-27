import { FC, useState } from 'react'
import { Iprop } from '../../helpers/InterfaceInputs'
import styled, {css} from 'styled-components'
import { ReactComponent as OpenEye} from '../../../assets/icons/open_eye.svg'
import { ReactComponent as CloseEye} from '../../../assets/icons/close_eye.svg'

export const Input: FC<Iprop> = ({
    name, 
    type, 
    value, 
    label, 
    onChangeInput, 
    errorMessageName, 
    errorMessageLogin, 
    errorMessagePassword, 
    errorMessagePasswordAgain}) => {

    const [visible, setVisible] = useState(false)
    // const [pass, setPass] = useState(false)
    // if(type === 'password')  setPass(!pass) 
    // type = visible ? 'text' : 'password'
    // console.log(errorMessage)

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
                    <DivImg onClick={visible => setVisible(!visible)}>
                        <CloseEye/>
                    </DivImg>
                ) : null
                // {toggleImg ? <OpenEye/> : <CloseEye/>}
            }
            {
                name === 'SignUpName' ? (
                    errorMessageName ? <ErMessage>Wrong name. Please, try again.</ErMessage> : null
                ) : null
            }
            {
                name === 'SignUpLogin' ? (
                    errorMessageLogin ? <ErMessage>Login is too short. Please, try again.</ErMessage> : null
                ) : null
            }
            {
                name === 'SignUpPassword' ? (
                    errorMessagePassword ? <ErMessage>Wrong Password. Please, try again.</ErMessage> : null
                ) : null
            }
            {
                name === 'SignUpPasswordAgain' ? (
                    errorMessagePasswordAgain ? <ErMessage>Passwords don't match</ErMessage> : null
                ) : null
            }
            
        </Label>
    )
}


export const InputMini: FC<Iprop> = ({name, type, value, label, onChangeInput}) => {
    const [toggleImg, setToggleImg] = useState(false)

    return (
        <Label>
            <LabelText>{label}</LabelText>
            <InputMin 
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
        </Label>
    )
}


const Styles = css`
    box-sizing: border-box;
    position: relative;
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
const InputMin = styled.input`
    width: 171px;
    ${Styles}
`

const InputMain = styled.input`
    width: 366px;
    ${Styles}
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
    cursor: pointer;
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 10;
`