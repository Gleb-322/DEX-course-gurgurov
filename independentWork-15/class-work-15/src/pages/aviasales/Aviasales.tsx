import { FC, useEffect, useState } from "react"
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";
import { ThirdStep } from "./components/ThirdStep";
import { StepIndicator } from "./components/StepsIndicator";

//Создать компонент stepsIndicator
//Добавить формы с переходом по шагам

export const Aviasales: FC = () => {
  const [firstStep, visibleFirstStep] = useState(true);
  const [secondStep, visibleSecondStep] = useState(false);
  const [thirdStep, visibleThirdStep] = useState(false);
  const [step, setChangeStep] = useState(1)

  const [select, changeSelect] = useState("");
  const [checkedSwitch, setCheckedSwitch] = useState(false);
  const [toggleActiveCheck, setToggleActiveCheck] = useState(false);

  const [inputValueTextFirst, setInputValueTextFirst] = useState("");
  const [invalidTextFirst, setInvalidTextFirst] = useState(false)
  const [invalidTextSecond, setInvalidTextSecond] = useState(false)
  const [inputValueTextSecond, setInputChangeTextSecond] = useState("");
  const [inputValueDateFirst, setInputChangeDateFirst] = useState("");
  const [inputValueDateSecond, setInputChangeDateSecond] = useState("");
  const [inputValueNumber, setInputChangeNumber] = useState('')

  const onInputChangeTextFirst = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValueTextFirst(e.target.value);
    if (inputValueTextFirst.trim() !== "") {
      if (inputValueTextFirst.trim() !== inputValueTextFirst.trim().replace(inputValueTextFirst.trim()[0], inputValueTextFirst.trim()[0].toUpperCase())) {
        setInvalidTextFirst(true);
      }
    } else {
      setInvalidTextFirst(false);
    }
  }

  const onInputChangeTextSecond = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputChangeTextSecond(e.target.value);
    if (inputValueTextSecond.trim() !== "") {
      if (inputValueTextSecond.trim() !== inputValueTextSecond.trim().replace(inputValueTextSecond.trim()[0], inputValueTextSecond.trim()[0].toUpperCase())) {
        setInvalidTextSecond(true);
      }
    } else {
      setInvalidTextSecond(false);
    }
  }

  useEffect(() => {
    const splitedDate1 = inputValueDateFirst.split('-')
    const splitedDate2 = inputValueDateSecond.split('-')
    // eslint-disable-next-line no-mixed-operators
    if (splitedDate2[2] >= splitedDate1[2] && splitedDate2[1] >= splitedDate1[1] && splitedDate2[0] >= splitedDate1[0] || splitedDate2[2] >= splitedDate1[2]){
      console.log('Дата указана верно')
    } else {
      console.log('Дата возвращения не должны быть раньше даты Отправления')
    }
  },[inputValueDateFirst, inputValueDateSecond])

  const onInputChangeDateSecond = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputChangeDateSecond(e.target.value)
  }

  const onInputChangeDateFirst = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputChangeDateFirst(e.target.value)
  }


  const onInputChangeNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputChangeNumber(e.target.value)
  }


  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    changeSelect(e.target.value);
  };

  const onSetCheckedSwitch = (): void => {
    setCheckedSwitch(!checkedSwitch)
  };

  const onToggleActiveCheck = () => {
    setToggleActiveCheck(!toggleActiveCheck)
  }

  const booleansForFunctions = (
    param1: number,
    param2: boolean,
    param3: boolean,
    param4: boolean
  ): void => {
    setChangeStep(param1);
    visibleFirstStep(param2);
    visibleSecondStep(param3);
    visibleThirdStep(param4);
  };

  const onChangeStep = (num: number) => {
    num === 1
      ? booleansForFunctions(1, true, false, false)
      : num === 2
        ? booleansForFunctions(2, false, true, false)
        : booleansForFunctions(3, false, false, true);
  };

  const onFirstNextStep = () => {
    booleansForFunctions(2, false, true, false);
  };

  const onSecondNextStep = () => {
    booleansForFunctions(3, false, false, true);

  };
  const onSecondPrevStep = () => {
    booleansForFunctions(1, true, false, false);
  };
  const onThirdPrevStep = () => {
    booleansForFunctions(2, false, true, false);
  };

  const consoleLogState = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    let handsome = toggleActiveCheck ? "Доказал, что Я красавчик" : "Не доказал :("
    let classPilot = checkedSwitch ? "Трезвый пилот" : "Пьяный пилот"
    const allState = {
      "Город отправления": inputValueTextFirst,
      "Город прибытия": inputValueTextSecond,
      "Дата отправления": inputValueDateFirst,
      "Дата возвращения": inputValueDateSecond,
      "Количество билетов": inputValueNumber,
      "Класс": select,
      "Трезвый пилот": classPilot,
      "Чек на красавчика": handsome
    }
    console.log(allState)
  };

  return (
    <div>
      <StepIndicator currentStep={step} changeStep={onChangeStep} />
      {firstStep ? (
        <FirstStep
          nextFirstStep={onFirstNextStep}
          valueTextFirst={inputValueTextFirst}
          valueTextSecond={inputValueTextSecond}
          inputChangeTextFirst={onInputChangeTextFirst}
          inputChangeTextSecond={onInputChangeTextSecond}
          validMessageFirst={invalidTextFirst}
          validMessageSecond={invalidTextSecond}
        />
      ) : null}
      {secondStep ? (
        <SecondStep
          nextSecondStep={onSecondNextStep}
          prevSecondStep={onSecondPrevStep}
          valueDateFirst={inputValueDateFirst}
          valueDateSecond={inputValueDateSecond}
          inputChangeDateFirst={onInputChangeDateFirst}
          inputChangeDateSecond={onInputChangeDateSecond}
        />
      ) : null}
      {thirdStep ? (
        <ThirdStep
          prevThirdStep={onThirdPrevStep}
          valueNumber={inputValueNumber}
          inputChangeNumber={onInputChangeNumber}
          optionsSelect={select}
          selectChange={onSelectChange}
          checkActive={onToggleActiveCheck}
          toggleCheck={toggleActiveCheck}
          toggleCheckSwitch={onSetCheckedSwitch}
          switchCheck={checkedSwitch}
          handlerForm={consoleLogState}
        />
      ) : null}
    </div>
  );
};
