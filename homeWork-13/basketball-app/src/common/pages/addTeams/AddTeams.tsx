import { FC,  useState, useEffect, useRef} from 'react'
import styled from "styled-components"
import { addTeams } from '../../../core/redux/mainSlice'
import { ButtonCancel, ButtonSave } from '../../ui/buttons/ButtonCancelSave'
import { Input } from '../../ui/inputs/Input'
import { InputFile } from '../../ui/inputs/InputFile'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { post } from '../../../api/BaseRequest'

export interface IformTeam {
    name: string,
    foundationYear: number,
    division: string,
    conference: string,
    imageUrl: string,
}

export const AddTeams: FC = () => {
    const redirectBack = useNavigate()
    const dispatch = useDispatch()
    const [inputAddName, setAddNameInput] = useState('')
    const [inputAddDivision, setAddDivisionInput] = useState('')
    const [inputAddConference, setAddConferenceInput] = useState('')
    const [inputAddYear, setAddYearInput] = useState('')
    const [postForm, setPostForm] = useState(false)
    const [formDataPost, setFormDataPost] = useState({})
    

    // const [errorInput, showErrorInput] = useState(false)

    useEffect(() => {
        if(postForm) {
            post(`/api/Team/Add`, JSON.stringify(formDataPost), '')
                .then(data => {
                    console.log("addData", data)
                    dispatch(addTeams(data.data))
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

    const handlerInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const name = e.target.name
        switch (name)  {
            case 'addNameTeam':
                    setAddNameInput(e.target.value)
                break
            case 'addDivisionTeam':
                    setAddDivisionInput(e.target.value)
                break
            case 'addConferenceTeam':
                    setAddConferenceInput(e.target.value)
                break
            case 'addYearTeam':
                    setAddYearInput(e.target.value)
                break
            }
        }

        const cancelBtn = () => {
            redirectBack(-1)
        }
    
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


        const handlerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
            e.preventDefault()
            
            const allData = {
                
                name: inputAddName.toLowerCase().replace(inputAddName[0], inputAddName[0].toUpperCase()),
                foundationYear: +inputAddYear,
                division: inputAddDivision,
                conference: inputAddConference,
                imageUrl: 'string',
            }
            setFormDataPost(allData)
            
            setPostForm(!postForm)
        }

    return (
        <Container>
            <TeamHeader>Teams <TeamHeaderSpan>/</TeamHeaderSpan> Add new team</TeamHeader>
            <TeamWrapper>
                <InputFile 
                    onChangeInputFIle={onChangeInputFIle}
                    onClickImgFile={onClickImgFile}
                    onClicInputFIle={onClicInputFIle}
                    preview={preview}
                    fileInputRef={fileInputRef}

                />
                <TeamForm onSubmit={handlerSubmit}>
                    <Input 
                        label={'Name'}
                        name={'addNameTeam'} 
                        type={'text'}
                        value={inputAddName}
                        onChangeInput={handlerInput}
                    />
                    <Input 
                        label={'Division'}
                        name={'addDivisionTeam'} 
                        type={'text'}
                        value={inputAddDivision}
                        onChangeInput={handlerInput}
                    />
                    <Input 
                        label={'Conference'}
                        name={'addConferenceTeam'} 
                        type={'text'}
                        value={inputAddConference}
                        onChangeInput={handlerInput}
                    />
                    <Input 
                        label={'Year of foundation'}
                        name={'addYearTeam'} 
                        type={'number'}
                        value={inputAddYear}
                        onChangeInput={handlerInput}
                    /> 
                    <ButtonsBlock>
                        <ButtonCancel back={cancelBtn}/>
                        <ButtonSave/>
                    </ButtonsBlock>
                </TeamForm>
            </TeamWrapper>
        </Container>
    )
}


const Container = styled.section`
    box-sizing: border-box;
    padding: 32px 80px;
    width: 100%;
`
const TeamHeader = styled.header`
  padding: 24px 0 0 32px;
  background: #FFFFFF;
  box-sizing: border-box;
  border-radius: 10px 10px 0px 0px;
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 14px;
  color: #E4163A;
`
const TeamHeaderSpan = styled.span`
  color: #9C9C9C;
`
const TeamWrapper = styled.div`
  height: 520px;
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
const TeamForm = styled.form`
    display: grid;
    grid-template-rows: repeat(4, 92px) 40px;
    align-items: center;
`
const ButtonsBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 171px);
    column-gap: 24px;
`
