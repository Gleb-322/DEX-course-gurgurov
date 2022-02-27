  import { FC,  useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as SignUpSVG} from '../../../assets/images/SignUp.svg'
import { InputCheckBox } from '../../ui/inputs/InputCheckbox'
import { Input } from '../../ui/inputs/Input'
import { post } from '../../../api/BaseRequest'


export const SignUp: FC = () => {
    const [inputName, setInputName] = useState('')
    const [inputNameError, setInputNameError] = useState(false)

    const [inputLogin, setInputLogin] = useState('')
    const [inputLoginError, setInputLoginError] = useState(false)

    const [inputPassword, setInputPassword] = useState('')
    const [inputPasswordAgain, setInputPasswordAgain] = useState('')
    const [inputPasswordError, setInputPasswordError] = useState(false) 
    const [inputPasswordAgainError, setInputPasswordAgainError] = useState(false) 

    const [postForm, setPostForm] = useState(false)
    // const [ckeckValid, setCheckValid] = useState(false)

    const [inputTypeText] = useState('text')
    const [inputTypePass] = useState('password')

    const [loginError, setLoginError] = useState(false)

    const [passwordError, setPasswordError] = useState(false) 
    const [passwordAgainError, setPasswordAgainError] = useState(false) 
    const [nameError, setNameError] = useState(false)

    const [stateForm, setStateForm] = useState({
        userName: '',
        login: '',
        password: ''
    })
    
    const redirect = useNavigate()

    useEffect(() => {
        if (postForm) {
            post(`/api/Auth/SignUp` ,JSON.stringify(stateForm), '')
                .then(data => {
                    localStorage.setItem("token", data.token)
                    redirect("/teams")
                }).catch(e => {
                    console.log(e.status)
                })
            setPostForm(!postForm)
        }
        
    },[postForm])

    useEffect(() => {
        inputName.length < 3 ? setInputNameError(true) : setInputNameError(false)
        inputLogin.length < 3 ? setInputLoginError(true) : setInputLoginError(false)
        inputPassword.length < 3 || inputPassword.length > 6 ? setInputPasswordError(true) : setInputPasswordError(false)
        inputPasswordAgain !== inputPassword ? setInputPasswordAgainError(true) : setInputPasswordAgainError(false)        
    },[inputName, inputLogin, inputPassword, inputPasswordAgain])

    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        inputNameError ? setNameError(true) : setNameError(false)
        inputLoginError ? setLoginError(true) : setLoginError(false)
        inputPasswordError ? setPasswordError(true) : setPasswordError(false)
        inputPasswordAgainError ? setPasswordAgainError(true) : setPasswordAgainError(false)
        if (!inputNameError && !inputLoginError && !inputPasswordError) {
            setStateForm((state) => ({
                ...state,
                userName: inputName,
                login: inputLogin,
                password: inputPassword
            }))
            setPostForm(!postForm)
        }
    }
    const handlerInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const name = e.target.name
        switch (name)  {
            case 'SignUpName':
                    setInputName(e.target.value)
                break
            case 'SignUpLogin':
                    setInputLogin(e.target.value)
                break
            case 'SignUpPassword':
                    setInputPassword(e.target.value)
                break
            case 'SignUpPasswordAgain':
                    setInputPasswordAgain(e.target.value)
                break
        }

    }


    return (
        <Section>
            <SignBlock>
                <Form onSubmit={handlerSubmit}>
                    <Field>
                        <Div><Legend>Sign Up</Legend></Div>
                        <Input
                            label={'Name'} 
                            name={'SignUpName'}
                            type={inputTypeText}
                            value={inputName}
                            onChangeInput={handlerInput}
                            errorMessageName={nameError}
                        />
                        <Input
                            label={'Login'} 
                            name={'SignUpLogin'}
                            type={inputTypeText}
                            value={inputLogin}
                            onChangeInput={handlerInput}
                            errorMessageLogin={loginError}
                        />
                        <Input
                            label={'Password'} 
                            name={'SignUpPassword'} 
                            type={inputTypePass}
                            value={inputPassword}
                            onChangeInput={handlerInput}
                            errorMessagePassword={passwordError}
                        />
                        <Input
                            label={'Enter your password again'}
                            name={'SignUpPasswordAgain'} 
                            type={inputTypePass}
                            value={inputPasswordAgain}
                            onChangeInput={handlerInput}
                            errorMessagePasswordAgain={passwordAgainError}
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


const Section = styled.section`
    position: relative;
    width: 100vw;
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
    grid-template-rows: repeat(5, 92px) 48px 50px 48px;
    align-items: center;
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