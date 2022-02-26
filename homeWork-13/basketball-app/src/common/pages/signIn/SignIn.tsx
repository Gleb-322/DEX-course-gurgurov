import { FC, useState, useEffect} from 'react'
import styled from 'styled-components'
import { ReactComponent as SignInSVG} from '../../../assets/images/SignIn.svg'


import { Input } from '../../ui/inputs/Input'
import { Link, useNavigate} from 'react-router-dom'
import { post } from '../../../api/BaseRequest'

export const SignIn: FC = () => {
    const [inputLogin, setInputLogin] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [error, showError] = useState(false)
    const [errorInput, showErrorInput] = useState(false)
    const [stateForm, setStateForm] = useState({
        login: '',
        password: ''
    })
    // const [inputLogin, setLoginInput] = useState('')
    // const [inputPassword, setPasswordInput] = useState('')

    const [inputType, setInputType] = useState('text')
    const [token, setToken] = useState('')
    
    const [postForm, setPostForm] = useState(false)
    const redirect = useNavigate()

    useEffect(() => {
        if (postForm) {
            
            post(`/api/Auth/SignIn`, JSON.stringify(stateForm), '')
                .then(data => {
                    
                    setToken(data.token)
                    localStorage.setItem("token", JSON.stringify(token));
                    redirect("/teams")
                })
                // .catch(() => showError(true))

            setPostForm(!postForm)
        }
        
    },[postForm])

    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        setPostForm(!postForm)
        setInputLogin('')
        setInputPassword('')
    }

    const handlerInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        
        if (e.target.name === 'signInLogin') {
            setInputLogin(e.target.value)
            setInputType('text')
            if (e.target.value.length === 0) {
                showErrorInput(true)
            }
            setStateForm((state) => ({
                ...state,
                login: inputLogin
            }))
        } 
        if (e.target.name === 'signInPassword' || e.target.value.length === 0) {
            setInputPassword(e.target.value)
            setInputType('password')
            if (e.target.value.length < 3) {
                showErrorInput(true)
            }
            setStateForm((state) => ({
                ...state,
                password: inputPassword
            }))
        } 
        
    }

    return (
        <Section>
            <SignBlock>
                <Form onSubmit={handlerSubmit}>
                    <Field>
                        <Div><Legend>Sign In</Legend></Div>
                        <Input 
                            label={'Login'}
                            name={'signInLogin'} 
                            type={inputType} 
                            value={inputLogin} 
                            onChangeInput={handlerInput}
                            errorMessage={errorInput}
                        />
                        <Input 
                            label={'Password'}
                            name={'signInPassword'} 
                            type={inputType} 
                            value={inputPassword} 
                            onChangeInput={handlerInput}
                            errorMessage={errorInput}
                        />
                        <Button type='submit'>Sign In</Button>
                        <Footer>Not a member yet? <Link to='/signUp'>Sign Up</Link></Footer>
                    </Field>
                </Form>
            </SignBlock>
            <SignImg>
                <SignInSVG/>
                { error ? <ErrorMessage/> : null}
            </SignImg>
        </Section>
    )
}


const ErrorMessage = () => {
    return (
      <Notification> User with the specified username / password was not found.</Notification>
    )
}

const Notification = styled.div`
    position: absolute;
    top: 0;
    right: 36px;
    display: block;
    box-sizing: border-box;
    margin-top: 30px;
    padding: 8px 16px;
    width: 470px;
    height: 40px;
    background: #FF5761;
    border-radius: 4px;
    font-family: 'Avenir';
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
`

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
    padding: 0px 120px;
`
const Form = styled.form``
const Field = styled.fieldset`
    display: grid;
    grid-template-rows: 90px 90px 90px 40px 48px;
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