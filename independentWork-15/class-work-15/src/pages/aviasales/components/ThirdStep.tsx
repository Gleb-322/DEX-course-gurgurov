import { FC } from "react";
import { Switch } from "../../../ui/Switch";
import styled, { css } from "styled-components";
import { Input } from "../../../ui/Input";
import { InputFile } from "../../../ui/InputFile";

//Реализовать форму третьего шага

interface Iprops {
  prevThirdStep: () => void;
  selectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  optionsSelect: string;
  valueNumber: string;
  inputChangeNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkActive: () => void;
  toggleCheck: boolean;
  toggleCheckSwitch: () => void;
  switchCheck: boolean;
  handlerForm: (e: React.SyntheticEvent<EventTarget>) => void;
}



export const ThirdStep: FC<Iprops> = ({
  prevThirdStep,
  optionsSelect,
  valueNumber,
  inputChangeNumber,
  selectChange,
  checkActive,
  toggleCheck,
  toggleCheckSwitch,
  switchCheck,
  handlerForm
}) => {
    
  return (
    <form onSubmit={handlerForm}>
      <OneFieldSet>
        <Legend>Параметры</Legend>
        <Input
          textError={"required"}
          minValue={0}
          inputType={"number"}
          label={"Количество билетов"}
          id={"number"}
          name={"number"}
          handlerChangeInput={inputChangeNumber}
          value={valueNumber}
        />

        <DivSelect>
          <Text>Класс</Text>
          <Select value={optionsSelect} onChange={selectChange}>
            <Option value="Супер эконом (стоячий)">Супер эконом (стоячий)</Option>
            <Option value="Эконом (табурет)">Эконом (табурет)</Option>
            <Option value="Бизнес (кресло dxRacer)">Бизнес (кресло dxRacer)</Option>
          </Select>
        </DivSelect>

        <DivSwitch>
          <Text>Трезвый пилот</Text>
          <Switch
            value={switchCheck}
            name={"adequatePilot"}
            handlerChange={toggleCheckSwitch}
          />
        </DivSwitch>
      </OneFieldSet>

      {optionsSelect === "Бизнес (кресло dxRacer)" ? (
        <TwoFieldSet>
          <Text>В бизнес классе летают только красивые люди</Text>

          <DivCheck>
            <input type="checkbox" required onChange={checkActive} />
            <TextDown>Я красавчик!</TextDown>
          </DivCheck>
          {toggleCheck ? (
            <DivProof>
              <Text>Докажите!</Text>
              <InputFile name={"customerPhoto"} />
            </DivProof>
          ) : null}
        </TwoFieldSet>
      ) : null}

      <DivButtons>
        <ButtonBack onClick={() => prevThirdStep()}>Назад</ButtonBack>
        <ButtonOrder type={'submit'}>Заказать</ButtonOrder>
      </DivButtons>
    </form>
  );
};


const DivStyles = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const OneFieldSet = styled.fieldset``;
const Legend = styled.legend``;
const TwoFieldSet = styled.fieldset`
  margin-top: 20px;
`;
const Text = styled.p``;
const Select = styled.select`
  height: 30px;
  margin-top: 8px;
`;
const Option = styled.option``;
const DivSelect = styled.div`
  ${DivStyles}
`;
const DivCheck = styled.div`
  display: flex;
  align-items: center;
`;
const DivProof = styled.div`
  ${DivStyles}
`;
const DivSwitch = styled.div`
  ${DivStyles}
`;
const TextDown = styled.p`
  margin-left: 5px;
`;
const DivButtons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 1px;
`;
const ButtonBack = styled.button`
  width: 150px;
  height: 40px;
  cursor: pointer;
`;
const ButtonOrder = styled.button`
  width: 150px;
  height: 40px;
  color: white;
  background: #eb884f;
  font-weight: 900;
  font-size: 20px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;