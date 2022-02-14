import styled from 'styled-components'
import { ReactComponent as SignUpSVG} from '../../../assets/images/SignUp.svg'
import { ReactComponent as CloseEyeSVG} from '../../../assets/icons/close_eye.svg'
import {InputCheckBox} from '../inputs/InputCheckbox'


export const SignUp = () => {
  return (
    <Section>
        <SignBlock>
            <Form>
                <Field>
                    <Div><Legend>Sign Up</Legend></Div>
                    <InputName/>
                    <InputLogin/>
                    <InputPassword />
                    <InputPasswordAgain />
                    <InputCheckBox/>
                    <Button>Sign In</Button>
                    <Footer>Not a member yet? <Link href='#'>Sign In</Link></Footer>
                </Field>
            </Form>
        </SignBlock>
        <SignImg>
            <SignUpSVG/>
        </SignImg>
    </Section>
  )
}

const InputName = () => {
    return (
        <Label>
            <LabelText>Name</LabelText>
            <Input />
        </Label>
    )
}

const InputLogin = () => {
    return (
        <Label>
            <LabelText>Login</LabelText>
            <Input />
        </Label>
    )
}



const InputPassword = () => {
    return (
        <Label>
            <LabelText>Password</LabelText>
            <Input type='password'/>
            <DivImg><CloseEyeSVG/></DivImg>
        </Label>
    )
}

const InputPasswordAgain = () => {
    return (
        <Label>
            <LabelText>Enter your password again</LabelText>
            <Input type='password'/>
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
const Link = styled.a`
    font-family: 'Avenir';
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    text-decoration-line: underline;
    color: #E4163A;
`
const Div = styled.div``