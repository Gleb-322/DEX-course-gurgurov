import styled from "styled-components"

const Notification = styled.div`
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

const signInError = () => {
  return (
    <div>signInError
        <Notification>
            User with the specified username / password was not found.
        </Notification>
    </div>
  )
}

export default signInError