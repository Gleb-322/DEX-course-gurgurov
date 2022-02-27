import { ReactComponent as AddSVG } from '../../../assets/icons/add_a_photo.svg'
import styled from 'styled-components'
import { FC , useRef, useState, useEffect } from 'react'

interface Iprop {
    onChangeFile: () => void
}


export const InputFile: FC<Iprop> = ({onChangeFile})  => {
    const [image, setImage] = useState<File | null>()
    const [preview, setPreview] = useState<string | null>()
    
    const fileInputRef = useRef<HTMLInputElement>()
    useEffect(() => {
        if(image) {
            const raeder = new FileReader()
            raeder.onloadend = () => {
                setPreview(raeder.result as string)
            }
            raeder.readAsDataURL(image)
        } else {
            setPreview(null)
        }
    }, [image])
    return (
        <AddImgBlock>
            
            {   preview ?  (
                    <img 
                        src={preview} 
                        alt='img'
                        style={{objectFit: "cover"}}
                        onClick={() => {
                            setImage(null)
                        }}
                    />
                ) 
                : (
                <Button onClick={(e) => {
                    e.preventDefault()
                    fileInputRef.current?.click()
                }}>
                    <AddSVG/>
                </Button>
                )
            }
            <Input 
                name={'file'} 
                type={"file"}  
                accept="image/*"
                // @ts-ignore
                ref={fileInputRef} 
                onChange={(e) => {
                    // @ts-ignore
                    const file = e.target.files[0];
                    if (file && file.type.substr(0, 5) === 'image') {
                        setImage(file)
                    } else {
                        
                        setImage(null)
                    } 
                }
            }/>
        </AddImgBlock>
  )
}
const Input = styled.input`
    display: none;
`
const Button = styled.button`
    cursor: pointer;
    background: #9C9C9C;
    opacity: 0.5;
    border-radius: 10px;
    height: 261px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
`

const AddImgBlock = styled.div`
    
`
