import { FC,  useState, useEffect, useRef,} from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
import { ButtonCancel, ButtonSave } from '../../ui/buttons/ButtonCancelSave'
import { useDispatch } from 'react-redux'
import { Input, InputMini } from '../../ui/inputs/Input'
import { InputFile } from '../../ui/inputs/InputFile'
import { post } from '../../../api/BaseRequest'
import { useSelector } from 'react-redux'
import { RootState } from '../../../core/redux/store'
import { getTeamId } from '../../../core/redux/mainSlice'
import { addPlayer, addImagePlayer } from '../../../core/redux/mainSlice'

export interface IformData {
    name: string;
    number: number;
    team: number;
    birthday: string;
    height: number;
    weight: number;
    avatarUrl: string;
    position: string;
}


export const AddPlayers: FC = () => {
    const redirectBack = useNavigate()
    const dispatch = useDispatch()
    const newInputTeamId = useSelector((state:RootState) => state.todosData.findTeam)
    
    const [inputAddName, setAddNameInput] = useState('')
    const [inputAddPosition, setAddPositionInput] = useState('')
    const [inputAddTeam, setAddTeamInput] = useState('')
    const [inputAddBirthday, setAddBirthdayInput] = useState('')
    const [inputAddNumber, setAddNumberInput] = useState('')
    const [inputAddHeight, setAddHeightInput] = useState('')
    const [inputAddWeight, setAddWeightInput] = useState('')
    const [formDataPost, setFormDataPost] = useState({})
    const [inputTypeText] = useState('text')
    const [inputTypeNumber] = useState('number')
    const [inputTypeDate] = useState('date')
    const [postForm, setPostForm] = useState(false)
   
    // const avatarAdd = useSelector((state: RootState) => state.todosData.imageAddPlayer)

    useEffect(() => {
        if(postForm) {
            
            post(`/api/Player/Add`, JSON.stringify(formDataPost), '')
                .then(data => {
                    console.log("addDataPlayer", data)
                    dispatch(addPlayer(data))
                })
                .catch (e => {
                    console.log(e)
                })

                if(preview) {
                    
                    const formData = new FormData()
                    formData.append('preview', preview)
                    
                    post(`/api/Image/SaveImage`, (formData), '')
                        .then(data => console.log(data))
                        .catch (e => {
                            console.log(e)
                    })
                } 
            
            setPostForm(!postForm)
        } 

        
    },[postForm])


    const [image, setImage] = useState<File | null>()
    const [preview, setPreview] = useState<string | null>()
    
    const fileInputRef = useRef<HTMLInputElement>()

    useEffect(() => {
        if(image) {
            const raeder = new FileReader()
            raeder.onloadend = () => {
                setPreview(raeder.result as string)
            }
            
        } else {
            setPreview(null)
        }
    }, [image])


    const onChangeInputFIle = (e: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        const file = e.target.files[0];
        if (file && file.type.substr(0, 5) === 'image') {
            setImage(file)
        } else {
            
            setImage(null)
        }
    }
    const onClicInputFIle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
        e.preventDefault()
        fileInputRef.current?.click()
    }
    

    const onClickImgFile = () => {
        setImage(null)
    }

    const cancelBtn = () => {
        redirectBack(-1)
    }


    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        
        const allData = {
            
            name: inputAddName.toLowerCase().replace(inputAddName[0], inputAddName[0].toUpperCase()),
            number: +inputAddNumber,
            position: inputAddPosition,
            team: newInputTeamId,
            birthday: new Date(inputAddBirthday).toISOString(),
            height: +inputAddHeight as number,
            weight: +inputAddWeight as number,
            avatarUrl: 'string',
        }

        setFormDataPost(allData)
        
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
    return (
        <Container>
            <PlayerHeader>Players <PlayerHeaderSpan>/</PlayerHeaderSpan> Add new layer</PlayerHeader>
            <PlayerWrapper>
                <InputFile 
                    onChangeInputFIle={onChangeInputFIle}
                    onClickImgFile={onClickImgFile}
                    onClicInputFIle={onClicInputFIle}
                    preview={preview}
                    fileInputRef={fileInputRef}

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
                        // @ts-ignore
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

