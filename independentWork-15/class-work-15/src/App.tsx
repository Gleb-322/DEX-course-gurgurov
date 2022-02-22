import { FC } from "react";
import "./styles.css";
import { Aviasales } from "./pages/aviasales/Aviasales";


export const App: FC = () => {
  return (
    <div className="App">
      <h1>Авиасейлс курильщика</h1>
      <div className="forms">
        <Aviasales />
      </div>
    </div>
  );
};


