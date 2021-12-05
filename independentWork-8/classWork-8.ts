import React, { ReactNode } from "react";
import { GoogleLogoComponent } from "./components";

//TODO: Создайте классовый компонент ClassComponent
// который отрисует div с текстом ClassComponent
class ClassComponent extends React.Component {
  render() {
    return (
    <div>ClassComponent </div>
    )
  }
}

//TODO: Создайте функциональный компонент FuncComponent
// который отрисует div с текстом FuncComponent
const FuncComponent = () => {
  return (
    <div>FuncComponent </div>
  )
}

//TODO: Перепишите компоненты выше на prop text
// в text передайте старые значения
interface IFuncComponentText {
  text: string
}
const FuncComponentText  = (props: IFuncComponentText) => {
  return (
    <div>{props.text} </div>
  )
}

class ClassComponentText extends React.Component<IFuncComponentText> {
  render() {
    return (
    <div>{this.props.text} </div>
    )
  }
}

//TODO: Создайте компонент ConditionalComponent
// который должен показывать GoogleLogoComponent по значению prop'a flag
interface IConditionalComponent {
  flag: boolean
}
const ConditionalComponent = (props: IConditionalComponent) => {
  if (props.flag) {
    return <GoogleLogoComponent />
  } else {
    return null
  }
}

//TODO: Создайте компонент ComponentWithFunction
// который будет принимать prop func и отправлять в div onClick
interface IComponentWithFunction {
  func: () => void
}
const ComponentWithFunction = (props: IComponentWithFunction) => {
  return (
    <div onClick={() => props.func()}></div>
  )
}

//TODO: Создайте компонент ComponentWithChild
// который будет принимать потомков и отображать внутри div

const ComponentWithChild: React.FC = (props) => {
  return <div>{props.children}</div>
}


//TODO: Создайте компонент ComponentWithRenders
// который будет принимать renderFunc и RenderComponent
interface IComponentWithRenders {
  renderFunc: React.FC,
  RenderComponent: React.ComponentType 
}
const ComponentWithRenders = (props: IComponentWithRenders) => {
  return (
  <div>
    <div>{props.renderFunc({})}</div>
    <props.RenderComponent/>
  </div>
  )
}
const func = () => alert("pressed");
const renderFunc = () => <div>renderFunc</div>;
class TestComponent extends React.Component {
  render() {
    return "123";
  }
}

//TODO: Добавьте component RenderAll
interface IRenderAll {
  timer: number
}
const RenderAll: React.FC<IRenderAll> = ({timer}) => {
  return (
    <div> 
      <ClassComponent/>
      <FuncComponent />
      <FuncComponentText text="FuncComponentText"/>
      <ClassComponentText text="ClassComponentText"/>
      <ConditionalComponent flag={true}/>
      <ComponentWithFunction func={func} />
      <ComponentWithChild>
        <div>Child</div>
      </ComponentWithChild>
      <ComponentWithRenders renderFunc={renderFunc} RenderComponent={TestComponent}/>
      <div>{timer}</div>
    </div>
  )
}
export {RenderAll}

// Добавьте prop timer и выведите его
