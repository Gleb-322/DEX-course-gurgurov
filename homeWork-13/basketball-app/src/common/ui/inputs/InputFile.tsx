import { ReactComponent as AddSVG } from '../../../assets/icons/add_a_photo.svg'
import styled from 'styled-components'
import { FC ,  useState, useEffect, MutableRefObject } from 'react'


interface Iprop {
    preview: string | null | undefined;
    onClickImgFile: () => void;
    onClicInputFIle: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onChangeInputFIle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fileInputRef: MutableRefObject<HTMLInputElement | undefined>
}

export const InputFile: FC<Iprop> = ({preview, onClickImgFile, onClicInputFIle, onChangeInputFIle, fileInputRef})  => {
    
    // const [image, setImage] = useState<File | null>()
    // const [preview, setPreview] = useState<string | null>()
    
    // const fileInputRef = useRef<HTMLInputElement>()
    // useEffect(() => {
    //     if(image) {
    //         const formData = new FormData()
    //         formData.append('/images/', image)
    //         const raeder = new FileReader()
    //         raeder.onloadend = () => {
    //             setPreview(raeder.result as string)
    //         }
    //         raeder.readAsDataURL(image)
            
            
    //     } else {
    //         setPreview(null)
    //     }
    // }, [image])
    return (
        <AddImgBlock>
            
            {   preview ?  (
                    <img 
                        src={preview} 
                        alt='img'
                        style={{
                            objectFit: "cover",
                            width: '336px',
                            height: '261px'
                            }}
                        onClick={() => onClickImgFile()}
                    />
                ) 
                : (
                <Button onClick={(e) => onClicInputFIle(e)}>
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
                onChange={(e) => onChangeInputFIle(e)}
            />
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

const AddImgBlock = styled.div``
