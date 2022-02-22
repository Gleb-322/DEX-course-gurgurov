import { BaseSyntheticEvent, FC } from "react";
import styled from "styled-components";

interface IProps {
    value: boolean;
    handlerChange: (value: boolean)=> void;
    name: string;
}

export const Switch: FC<IProps> = ({value, handlerChange, name}) => {
    const handlerSwitch = (event: BaseSyntheticEvent) => {
        const value = event.target.value;
        handlerChange(value);
    }

  return (
    <Container>
        <input checked={value} type='checkbox' name={name} onChange={handlerSwitch} id='term'/>
        <MarkDiv checked={value}>
            <Mark checked={value}/>
        </MarkDiv>
    </Container>
  )
};

const Container = styled.label`
    cursor: pointer;
    & input[type='checkbox'] {
        width: 0;
    }
    & div {
        transition: 0.5s ease;
    }
`

const MarkDiv = styled.div<{checked: boolean}>`
    background: ${({checked})=> checked ? '#eb884f' : 'white'};
    position: relative;
    width: 50px;
    height: 21px;
    border: solid 1px black;
    border-radius: 20px;
`
const Mark = styled.div<{checked: boolean}>`
    background: ${({checked})=> checked ? '#c9309b' : 'black'};;
    position: absolute;
    left: ${({checked})=> checked ? '30px' : '1px'};
    bottom: 1px;
    width: 19px;
    height: 19px;
    border-radius: 100%;
`
