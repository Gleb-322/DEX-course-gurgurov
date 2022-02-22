import { FC } from "react";
import styled from "styled-components";

//Сделать три кнопки, с индикацией выбранного шага в данный момент,
//Добавить колбэки для перехода по шагам по клику

interface IProps {
  currentStep: number;
  changeStep: (step: number) => void;
}

export const StepIndicator: FC<IProps> = ({currentStep, changeStep}) => {
  return (
    <DivButtons>
      <StepButton 
        selected={currentStep === 1}
        onClick={() => changeStep(1)}
      >
        Куда
      </StepButton>
      <StepButton 
     
        selected={currentStep === 2}
        onClick={() => changeStep(2)}
      >
        Когда
      </StepButton>
      <StepButton 
   
        selected={currentStep === 3}
        onClick={() => changeStep(3)}
      >
        Как
      </StepButton>
    </DivButtons>
  )
};

const StepButton = styled.button<{selected: boolean}>`
  width: 100px;
  height: 50px;
  color: ${({selected}) => selected ? 'white' : 'black'};
  background: ${({selected}) => selected ? 'black' : 'white'};
  border: 1px solid black;
  border-radius: 100%;
  cursor: pointer;
`
const DivButtons = styled.div`
  width: 350px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`
