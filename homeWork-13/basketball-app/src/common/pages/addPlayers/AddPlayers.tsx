import { FC,  useState} from 'react'
import styled from "styled-components"
import { ReactComponent as AddSVG } from '../../../assets/icons/add_a_photo.svg'
import { ButtonCancel, ButtonSave } from '../../ui/buttons/ButtonCancelSave'
import { Input } from '../../ui/inputs/Input'

export const AddPlayers: FC = () => {
    const [input, setInput] = useState('')
    // const [inputAddName, setAddNameInput] = useState('')
    // const [inputAddDivision, setAddDivisionInput] = useState('')
    // const [inputAddConference, setAddConferenceInput] = useState('')
    // const [inputAddYear, setAddYearInput] = useState('')
    const [errorInput, showErrorInput] = useState(false)

    const handlerInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput(e.target.value)
    }


    return (
        <Container>
            <PlayerHeader>Players <PlayerHeaderSpan>/</PlayerHeaderSpan> Add new layer</PlayerHeader>
            <PlayerWrapper>
                <AddImgBlock>
                    <AddSVG/>
                </AddImgBlock>
                <PlayerForm>
                    <Input 
                        label={'Name'}
                        name={'addNamePlayer'} 
                        type={'text'}
                        value={input}
                        onChangeInput={handlerInput}
                        errorMessage={errorInput}
                    />
                    <Input 
                        label={'Position'}
                        name={'addDivisionPlayer'} 
                        type={'text'}
                        value={input}
                        onChangeInput={handlerInput}
                        errorMessage={errorInput}
                    />
                    <Input 
                        label={'Conference'}
                        name={'addConferencePlayer'} 
                        type={'text'}
                        value={input}
                        onChangeInput={handlerInput}
                        errorMessage={errorInput}
                    />
                    <Input 
                        label={'Conference'}
                        name={'addYearPlayer'} 
                        type={'text'}
                        value={input}
                        onChangeInput={handlerInput}
                        errorMessage={errorInput}
                    />
                    <Input 
                        label={'Conference'}
                        name={'addYearPlayer'} 
                        type={'text'}
                        value={input}
                        onChangeInput={handlerInput}
                        errorMessage={errorInput}
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

