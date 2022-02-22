import { FC } from "react";
import styled from "styled-components";
import { Input } from "../../../ui/Input";

//Реализовать форму второго шага
//Сделать контейнер для кнопочек

interface IProps {
  nextSecondStep: () => void;
  prevSecondStep: () => void;
  valueDateFirst: string;
  valueDateSecond: string;
  inputChangeDateFirst: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputChangeDateSecond: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SecondStep: FC<IProps> = ({
  nextSecondStep,
  prevSecondStep,
  valueDateFirst,
  valueDateSecond,
  inputChangeDateFirst,
  inputChangeDateSecond
}) => {
  const HandlerForm = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
  };

  return (
    <form action="#" onSubmit={HandlerForm}>
      <Input
        textError={"required"}
        inputType={"date"}
        label={"Дата отправления"}
        id={"departure"}
        name={"departure"}
        handlerChangeInput={inputChangeDateFirst}
        value={valueDateFirst}

      />
      <Input
        inputType={"date"}
        label={"Дата возвращения"}
        id={"return"}
        name={"return"}
        handlerChangeInput={inputChangeDateSecond}
        value={valueDateSecond}
      />
      <Div>
        <Button onClick={() => prevSecondStep()}>Назад</Button>
        <Button onClick={() => nextSecondStep()}>Дальше</Button>
      </Div>
    </form>
  );
};

const Button = styled.button`
  width: 160px;
  height: 25px;
  cursor: pointer;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;