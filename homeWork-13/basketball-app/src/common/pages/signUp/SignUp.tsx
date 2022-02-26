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

    const [postForm, setPostForm] = useState(false)
    // const [ckeckValid, setCheckValid] = useState(false)
    const [validForm, setValidForm] = useState(false)

    const [token, setToken] = useState('')

    const [inputType, setInputType] = useState('text')

    const [stateForm, setStateForm] = useState({
        name: '',
        login: '',
        password: ''
    })
    
    const redirect = useNavigate()

    useEffect(() => {
        if (postForm) {
            post(`/api/Auth/SignUp` ,JSON.stringify(stateForm), '')
                .then(data => {
                    setToken(data.token)
                    console.log(token)
                    localStorage.setItem("token", JSON.stringify(token))
                    redirect("/teams")
                })
            setPostForm(!postForm)
        }
        
    },[postForm])

    useEffect(() => {
            if (inputNameError || inputLoginError || inputPasswordError) {
                setValidForm(false)
    
            } else {
                setValidForm(true)
                
            }
        
    },[inputNameError, inputLoginError, inputPasswordError])

    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        setPostForm(!postForm)
        if (inputName.length === 0) {
            setInputNameError(true)
        }
        if (inputLogin.length === 0) {
            setInputLoginError(true)
        }
        if (inputPassword.length < 3 || inputPassword.length === 0) {
            setInputPasswordError(true)
        }
        if (inputPasswordAgain !== inputPassword) {
            setInputPasswordError(true)
        } 
        if (!inputNameError && !inputLoginError && !inputPasswordError) {
            setStateForm((state) => ({
                ...state,
                name: inputName,
                login: inputLogin,
                password: inputPassword
            }))
        }
    }
    const handlerInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const name = e.target.name
        switch (name)  {
            case 'SignUpName':
                    setInputName(e.target.value)
                    setInputType('text')
                break
            case 'SignUpLogin':
                    setInputLogin(e.target.value)
                    setInputType('text')
                break
            case 'SignUpPassword':
                
                    setInputPassword(e.target.value)
                    setInputType('password')
                break
            case 'SignUpPasswordAgain':
                    setInputPasswordAgain(e.target.value)
                    setInputType('password')
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
                            type={inputType}
                            value={inputName}
                            onChangeInput={handlerInput}
                            errorMessage={inputNameError}
                        />
                        <Input
                            label={'Login'} 
                            name={'SignUpLogin'}
                            type={inputType}
                            value={inputLogin}
                            onChangeInput={handlerInput}
                            errorMessage={inputLoginError}
                        />
                        <Input
                            label={'Password'} 
                            name={'SignUpPassword'} 
                            type={inputType}
                            value={inputPassword}
                            onChangeInput={handlerInput}
                            errorMessage={inputPasswordError}
                        />
                        <Input
                            label={'Enter your password again'}
                            name={'SignUpPasswordAgain'} 
                            type={inputType}
                            value={inputPasswordAgain}
                            onChangeInput={handlerInput}
                            errorMessage={inputPasswordError}
                        />
                        <InputCheckBox/>
                        <Button disabled={!validForm} type={'submit'}>Sign Up</Button>
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