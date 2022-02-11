import "./styles.scss";
import { CheckComponent } from "./CheckComponent";
import { ValidComponent } from "./ValidComponent";
import { TransitionComponent } from "./TransitionComponent";
import { BackFon } from "./BackFon";

export default function App() {
  return (
    <div className="App">
      <CheckComponent />
      <ValidComponent />
      <BackFon />
      <TransitionComponent />
    </div>
  );
}
