import { FC,  useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as SignUpSVG} from '../../../assets/images/SignUp.svg'
import { ReactComponent as CloseEyeSVG} from '../../../assets/icons/close_eye.svg'
import { InputCheckBox } from '../../components/inputs/InputCheckbox'
import { Iprop } from '../signIn/SignIn'
import { useSignUp } from '../../../api/auth/AuthSignUpPost'


export const SignUp: FC = () => {
    const [inputName, setNameInput] = useState('')
    const [inputLogin, setLoginInput] = useState('')
    const [inputPassword, setPasswordInput] = useState('')
    const [inputPasswordAgain, setPasswordAgainInput] = useState('')
    const [postForm, setPostForm] = useState(false)
    const redirect = useNavigate()
    const {postSignUp} = useSignUp()

    useEffect(() => {
        if (postForm) {
            const stateForm = {
                userName: inputName,
                login: inputLogin,
                password: inputPassword
            }
            postSignUp(JSON.stringify(stateForm))
                .then(data => {
                    localStorage.setItem("token", data.token);
                    redirect("/teams")
                })
            setPostForm(!postForm)
            
        }
        
    },[postForm])

    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        setPostForm(!postForm)
            console.log(postForm)
    }
    const handlerInputName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setNameInput(e.target.value)
    }
    const handlerInputLogin = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setLoginInput(e.target.value)
    }
    const handlerInputPassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPasswordInput(e.target.value)
    }
    const handlerInputPasswordAgain = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPasswordAgainInput(e.target.value)
    }

    return (
        <Section>
            <SignBlock>
                <Form onSubmit={handlerSubmit}>
                    <Field>
                        <Div><Legend>Sign Up</Legend></Div>
                        <InputName 
                            name={'name'} 
                            type={'text'}
                            value={inputName}
                            inputHandler={handlerInputName}
                        />
                        <InputLogin
                            name={'login'} 
                            type={'text'}
                            value={inputLogin}
                            inputHandler={handlerInputLogin}
                        />
                        <InputPassword 
                            name={'password'} 
                            type={'password'}
                            value={inputPassword}
                            inputHandler={handlerInputPassword}
                        />
                        <InputPasswordAgain 
                            name={'passwordAgain'} 
                            type={'password'}
                            value={inputPasswordAgain}
                            inputHandler={handlerInputPasswordAgain}
                        />
                        <InputCheckBox/>
                        <Button type={'submit'}>Sign Up</Button>
                        <Footer>Not a member yet? <Link to='/signIn'>Sign In</Link></Footer>
                    </Field>
                </Form>
            </SignBlock>
            <SignImg>
                <SignUpSVG/>
            </SignImg>
        </Section>
    )
}


const InputName: FC<Iprop> = ({name, type, value, inputHandler}) => {
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

const InputLogin: FC<Iprop> = ({name, type, value, inputHandler}) => {
    return (
        <Label>
            <LabelText>Login</LabelText>
            <Input 
                name={name} 
                type={type} 
                value={value} 
                onChange={inputHandler}
            />
        </Label>
    )
}



const InputPassword: FC<Iprop> = ({name, type, value, inputHandler}) => {
    return (
        <Label>
            <LabelText>Password</LabelText>
            <Input 
                name={name} 
                type={type} 
                value={value} 
                onChange={inputHandler}
            />
            <DivImg><CloseEyeSVG/></DivImg>
        </Label>
    )
}

const InputPasswordAgain: FC<Iprop> = ({name, type, value, inputHandler}) => {
    return (
        <Label>
            <LabelText>Enter your password again</LabelText>
            <Input 
                name={name} 
                type={type} 
                value={value} 
                onChange={inputHandler}
            />
            <DivImg><CloseEyeSVG/></DivImg>
        </Label>
    )
}

const Section = styled.section`
    position: relative;
    width: 100vh;
    height: 100vh;
    display: grid;
    grid-template-columns: 606px 834px;
    background: #FFFFFF;
    align-items: center;
    justify-items: center;
` 
const SignBlock = styled.div`
    box-sizing: border-box;
    padding: 0px 220px;
`
const Form = styled.form``
const Field = styled.fieldset`
    display: grid;
    grid-template-rows: 100px 90px 90px 90px 55px 50px 48px;
    border: none;
`
const Legend = styled.legend`
    font-family: 'Avenir';
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 49px;
    color: #344472;
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
const DivImg = styled.div`
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 10;
`

const Button = styled.button`
    cursor: pointer;
    width: 365px;
    height: 40px;
    background: #E4163A;
    border-radius: 4px;
    font-family: 'Avenir';
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
    border: none;
    :hover {
    background: #FF5761;
    }
    :active {
    background: #C60E2E;
    }
    :disabled {
    background: #F6F6F6;
    color: #D1D1D1;
    }
`

const SignImg = styled.div``
const Footer = styled.div`
    display: block;
    margin: 0 auto;
    margin-top: 24px;
    font-family: 'Avenir';
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #707070;
`
// const Link = styled.a`
//     cursor: pointer;
//     font-family: 'Avenir';
//     font-weight: 500;
//     font-size: 14px;
//     line-height: 19px;
//     text-decoration-line: underline;
//     color: #E4163A;
//     :hover {
//         color: #FF5761;
//     }
// `
const Div = styled.div``