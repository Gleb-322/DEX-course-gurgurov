import { FC,  useState, useEffect} from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
import { ButtonCancel, ButtonSave } from '../../ui/buttons/ButtonCancelSave'
import { Input, InputMini } from '../../ui/inputs/Input'
import { InputFile } from '../../ui/inputs/InputFile'
import { post } from '../../../api/BaseRequest'

export const AddPlayers: FC = () => {
    const redirectBack = useNavigate()
    const [inputAddName, setAddNameInput] = useState('')
    const [inputAddPosition, setAddPositionInput] = useState('')
    const [inputAddTeam, setAddTeamInput] = useState('')
    const [inputAddBirthday, setAddBirthdayInput] = useState('')
    const [inputAddNumber, setAddNumberInput] = useState('')
    const [inputAddHeight, setAddHeightInput] = useState('')
    const [inputAddWeight, setAddWeightInput] = useState('')

    const [inputAddAvatar, setAddAvatarInput] = useState('fewfwe')

    const [inputTypeText] = useState('text')
    const [inputTypeNumber] = useState('number')
    const [inputTypeDate] = useState('date')

    const [postForm, setPostForm] = useState(false)


    const [stateForm, setStateForm] = useState({
        name: "",
        number: '',
        position: "",
        team: '',
        birthday: "",
        height: '',
        weight: '',
        avatarUrl: "",
    })

    useEffect(() => {
        if(postForm) {
            post(`/api/Player/Add`, JSON.stringify(stateForm), '')
                .then(data => console.log(data))
                .catch (e => {
                    console.log(e)
                })
        } else {

        }
        
    },[postForm])

    const cancelBtn = () => {
        redirectBack(-1)
    }

    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        setStateForm((state) => ({
            ...state,
            name: inputAddName,
            number: inputAddNumber,
            position: inputAddPosition,
            team: inputAddTeam,
            birthday: inputAddBirthday,
            height: inputAddHeight,
            weight: inputAddWeight,
            avatarUrl: inputAddAvatar,
        }))
        setPostForm(!postForm)
    }
    
    const handlerInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const name = e.target.name
        switch (name)  {
            case 'addNamePlayer':
                    setAddNameInput(e.target.value)
                break
            case 'addPositionPlayer':
                    setAddPositionInput(e.target.value)
                break
            case 'addTeamPlayer':
                    setAddTeamInput(e.target.value)
                break
            case 'addHeightPlayer':
                    setAddHeightInput(e.target.value)
                break
            case 'addWeightPlayer':
                    setAddWeightInput(e.target.value)
                break
            case 'addNumberPlayer':
                    setAddNumberInput(e.target.value)
                break
            case 'addBirthdayPlayer':
                    setAddBirthdayInput(e.target.value)
                break
            }
        }

    const handlerFile = () => {

    }
    
    return (
        <Container>
            <PlayerHeader>Players <PlayerHeaderSpan>/</PlayerHeaderSpan> Add new layer</PlayerHeader>
            <PlayerWrapper>
                <InputFile 
                    onChangeFile={handlerFile}
                />
                <PlayerForm onSubmit={handlerSubmit}>
                    <Input 
                        label={'Name'}
                        name={'addNamePlayer'} 
                        type={inputTypeText}
                        value={inputAddName}
                        onChangeInput={handlerInput}
                    />
                    <Input 
                        label={'Position'}
                        name={'addPositionPlayer'} 
                        type={inputTypeText}
                        value={inputAddPosition}
                        onChangeInput={handlerInput}
                    />
                    <Input 
                        label={'Team'}
                        name={'addTeamPlayer'} 
                        type={inputTypeText}
                        value={inputAddTeam}
                        onChangeInput={handlerInput}
                    />
                    <InputsBlock>
                        <InputMini 
                            label={'Height (cm)'}
                            name={'addHeightPlayer'} 
                            type={inputTypeNumber}
                            value={inputAddHeight}
                            onChangeInput={handlerInput}
                        />
                        <InputMini 
                            label={'Weight (kg)'}
                            name={'addWeightPlayer'} 
                            type={inputTypeNumber}
                            value={inputAddWeight}
                            onChangeInput={handlerInput}
                        />
                        <InputMini 
                            label={'Birthday'}
                            name={'addBirthdayPlayer'} 
                            type={inputTypeDate}
                            value={inputAddBirthday}
                            onChangeInput={handlerInput}
                        />
                        <InputMini 
                            label={'Number'}
                            name={'addNumberPlayer'}
                            type={inputTypeNumber}
                            value={inputAddNumber}
                            onChangeInput={handlerInput}
                        />
                    </InputsBlock>
                    <ButtonsBlock>
                        <ButtonCancel back={cancelBtn}/>
                        <ButtonSave />
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
const PlayerForm = styled.form`
    display: grid;
    grid-template-rows: repeat(3, 92px);
    align-items: center;
`
const ButtonsBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 171px);
    column-gap: 24px;
`

const InputsBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 171px);
    grid-template-rows: repeat(2, 92px);
    column-gap: 24px;
    align-items: center;
`

