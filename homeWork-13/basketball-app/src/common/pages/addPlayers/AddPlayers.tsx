import { FC,  useState} from 'react'
import styled from "styled-components"
import { Iprop } from "../signIn/SignIn"
import { ReactComponent as AddSVG } from '../../../assets/icons/add_a_photo.svg'
import { ButtonCancel, ButtonSave } from '../../components/buttons/ButtonCancelSave'

export const AddPlayers: FC = () => {
    const [inputAddName, setAddNameInput] = useState('')
    const [inputAddDivision, setAddDivisionInput] = useState('')
    const [inputAddConference, setAddConferenceInput] = useState('')
    const [inputAddYear, setAddYearInput] = useState('')

    const handlerInputAddName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setAddNameInput(e.target.value)
    }
    const handlerInputAddDivision = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setAddDivisionInput(e.target.value)
    }
    const handlerInputAddConference = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setAddConferenceInput(e.target.value)
    }
    const handlerInputAddYear = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setAddYearInput(e.target.value)
    } 

    return (
        <Container>
            <PlayerHeader>Players <PlayerHeaderSpan>/</PlayerHeaderSpan> Add new layer</PlayerHeader>
            <PlayerWrapper>
                <AddImgBlock>
                    <AddSVG/>
                </AddImgBlock>
                <PlayerForm>
                    <InputAddName 
                        name={'addName'} 
                        type={'text'}
                        value={inputAddName}
                        inputHandler={handlerInputAddName}
                    />
                    <InputAddDivision 
                        name={'addDivision'} 
                        type={'text'}
                        value={inputAddDivision}
                        inputHandler={handlerInputAddDivision}
                    />
                    <InputAddConference 
                        name={'addConference'} 
                        type={'text'}
                        value={inputAddConference}
                        inputHandler={handlerInputAddConference}
                    />
                    <InputAddYear 
                        name={'addYear'} 
                        type={'text'}
                        value={inputAddYear}
                        inputHandler={handlerInputAddYear}
                    />
                    <InputAddYear 
                        name={'addYear'} 
                        type={'text'}
                        value={inputAddYear}
                        inputHandler={handlerInputAddYear}
                    />
                    <ButtonsBlock>
                        <ButtonCancel/>
                        <ButtonSave/>
                    </ButtonsBlock>
                </PlayerForm>
            </PlayerWrapper>
        </Container>
    )
}

const InputAddName: FC<Iprop> = ({name, type, inputHandler, value}) => {
    return (
        <Label>
            <LabelText>Name</LabelText>
            <Input 
                name={name} 
                type={type} 
                value={value}
                onChange={inputHandler}
            />
        </Label>
    )
}
const InputAddDivision: FC<Iprop> = ({name, type, inputHandler, value}) => {
    return (
        <Label>
            <LabelText>Division</LabelText>
            <Input 
                name={name} 
                type={type} 
                value={value}
                onChange={inputHandler}
            />
        </Label>
    )
}
const InputAddConference: FC<Iprop> = ({name, type, inputHandler, value}) => {
    return (
        <Label>
            <LabelText>Conference</LabelText>
            <Input 
                name={name} 
                type={type} 
                value={value}
                onChange={inputHandler}
            />
        </Label>
    )
}
const InputAddYear: FC<Iprop> = ({name, type, inputHandler, value}) => {
    return (
        <Label>
            <LabelText>Year of foundation</LabelText>
            <Input 
                name={name} 
                type={type} 
                value={value}
                onChange={inputHandler}
            />
        </Label>
    )
}

const Container = styled.section`
    box-sizing: border-box;
    padding: 32px 80px;
    width: 100%;
`
const PlayerHeader = styled.header`
  padding: 24px 0 0 32px;
  background: #FFFFFF;
  box-sizing: border-box;
  border-radius: 10px 10px 0px 0px;
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 14px;
  color: #E4163A;
`
const PlayerHeaderSpan = styled.span`
  color: #9C9C9C;
`
const PlayerWrapper = styled.div`
  height: 610px;
  box-sizing: border-box;
  padding: 72px 229px 41px 73px;
  background: #FFFFFF;
  border-radius: 0px 0px 10px 10px;
  display: grid;
  grid-template-columns: 336px 366px;
  column-gap: 136px;
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

const Input = styled.input`
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

const AddImgBlock = styled.div`
    cursor: pointer;
    background: #9C9C9C;
    opacity: 0.5;
    border-radius: 10px;
    height: 261px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const PlayerForm = styled.form`
    display: grid;
    grid-template-rows: repeat(5, 92px) 40px;
    align-items: center;
`
const ButtonsBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 171px);
    column-gap: 24px;
`

