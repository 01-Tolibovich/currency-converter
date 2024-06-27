import { ActionsBlock, InputSection } from "./components";

import "./App.scss";

function App() {
  return (
    <div className="App container">
      <h1 className="title">$ to € currency converter</h1>
      <div className="app-content">
        <div>
          <InputSection />
        </div>
        <ActionsBlock />
      </div>
    </div>
  );
}

export default App;
