import { FC } from "react";
import styled from "styled-components"

interface Iprops {
  name: string;
}

export const InputFile: FC<Iprops> = ({name}) => {
  return (
  <ContainerFile>
    <Label htmlFor="file">Загрузить фото</Label>
    <input id='file' name={name} type="file"/>
  </ContainerFile>
  )
};

const ContainerFile = styled.div`
  margin-top: 10px;
  height: 40px;
  & input[type="file"] {
    display: none;
  }
`
const Label = styled.label`
  box-sizing: border-box;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  font-size: 18px;
  background: black;
  display: inline-block;
  padding: 5px;
  cursor: pointer;
`
