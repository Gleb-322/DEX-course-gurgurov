import { FC, useState, useEffect} from 'react'
import styled from 'styled-components'
import { ReactComponent as SignInSVG} from '../../../assets/images/SignIn.svg'


import { Input } from '../../ui/inputs/Input'
import { Link, useNavigate} from 'react-router-dom'
import { post } from '../../../api/BaseRequest'

export const SignIn: FC = () => {
    const [inputLogin, setInputLogin] = useState('')
    const [inputLoginError, setInputLoginError] = useState(false)

    const [inputPassword, setInputPassword] = useState('')
    const [inputPasswordError, setInputPasswordError] = useState(false) 

    const [inputTypeText] = useState('text')
    const [inputTypePass] = useState('password')

    const [error, showError] = useState(false)
    const [stateForm, setStateForm] = useState({
        login: '',
        password: ''
    })

    const [loginError, setLoginError] = useState(false)

    const [passwordError, setPasswordError] = useState(false) 
    
    const [postForm, setPostForm] = useState(false)
    const redirect = useNavigate()

    useEffect(() => {
        if (postForm) {
            
            post(`/api/Auth/SignIn`, JSON.stringify(stateForm), '')
                .then(data => {
                    console.log(data.token)
                    localStorage.setItem("token", data.token);
                    redirect("/teams")
                })
                .catch(() => showError(true))

            setPostForm(!postForm)
        }
        
    },[postForm])


    useEffect(() => {
        inputLogin.length < 3 ? setInputLoginError(true) : setInputLoginError(false)
        inputPassword.length < 3 || inputPassword.length > 6 ? setInputPasswordError(true) : setInputPasswordError(false)
               
    },[ inputLogin, inputPassword ])

    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        
        inputLoginError ? setLoginError(true) : setLoginError(false)
        inputPasswordError ? setPasswordError(true) : setPasswordError(false)
        
        if (!inputLoginError && !inputPasswordError) {
            setStateForm((state) => ({
                ...state,
                login: inputLogin,
                password: inputPassword
            }))
            setPostForm(!postForm)
        }
    }

    const handlerInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const name = e.target.name
        switch (name)  {
            case 'signInLogin':
                    setInputLogin(e.target.value)
                break
            case 'signInPassword':
                    setInputPassword(e.target.value)
                break
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
                            type={inputTypeText} 
                            value={inputLogin} 
                            onChangeInput={handlerInput}
                            errorMessageLogin={loginError}
                        />
                        <Input 
                            label={'Password'}
                            name={'signInPassword'} 
                            type={inputTypePass} 
                            value={inputPassword} 
                            onChangeInput={handlerInput}
                            errorMessagePassword={passwordError}
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
    top:  -100px;
    right: 0;
    transition: 0.5s all;
    display: block;
    box-sizing: border-box;
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
    /* position: relative; */
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

const SignImg = styled.div`
    position: relative;
`
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