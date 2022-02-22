import { FC } from "react";
import styled from "styled-components";

interface InputProps {
  inputType: "text" | "number" | "date" | "checkbox";
  name: string;
  id: string;
  label?: string;
  textError?: string;
  handlerChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  validTextFirst?: boolean;
  validTextSecond?: boolean;
  minValue?: number | string;
}



export const Input: FC<InputProps> = ({
  inputType,
  name,
  id,
  label,
  textError,
  handlerChangeInput,
  value,
  validTextFirst,
  validTextSecond,
  minValue
}) => {

  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input
        type={inputType}
        name={name}
        id={id}
        onChange={handlerChangeInput}
        value={value}
        min={minValue}
      />
      <DivRequire error>{textError}</DivRequire>
      {validTextFirst ? <div>Введите город с большой буквы!</div> : null}
      {validTextSecond ? <div>Здесь тоже введите город с большой буквы!</div> : null}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  margin-bottom: 20px;
`;
const DivRequire = styled.div<{ error: boolean }>`
  display: ${({ error }) => (error ? "block" : "none")};
  color: red;
  position: absolute;
  bottom: -20px;
  right: 0;
`;