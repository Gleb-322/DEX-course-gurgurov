import { FC } from "react";
import { Input } from "../../../ui/Input";
import styled from "styled-components";

interface IProps {
  nextFirstStep: () => void;
  valueTextFirst: string;
  valueTextSecond: string;
  inputChangeTextFirst: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputChangeTextSecond: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validMessageFirst: boolean;
  validMessageSecond: boolean;
}
const NextButton = styled.button`
  width: 100%;
  height: 25px;
  cursor: pointer;
`;
const Form = styled.form``;

export const FirstStep: FC<IProps> = ({ nextFirstStep , valueTextSecond, valueTextFirst, inputChangeTextFirst, inputChangeTextSecond, validMessageFirst, validMessageSecond}) => {
  const HandlerForm = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
  };

  return (
    <Form action="#" onSubmit={HandlerForm}>
      <Input
        textError={"required"}
        inputType={"text"}
        label={"Откуда"}
        id={"from"}
        name={"from"}
        handlerChangeInput={inputChangeTextFirst}
        value={valueTextFirst}
        validTextFirst={validMessageFirst}
        minValue={new Date().toISOString().split('T')[0]}
      />
      <Input 
        inputType={"text"} 
        label={"Куда"} 
        id={"where"} 
        name={"where"} 
        handlerChangeInput={inputChangeTextSecond}
        value={valueTextSecond}
        validTextSecond={validMessageSecond}
      />
      <NextButton onClick={() => nextFirstStep()}>Дальше</NextButton>
    </Form>
  );
};
