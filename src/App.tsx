import "./App.css";
import { Remage } from "./components/remage";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Remage
          src="base-img.png"
          interactables={[
            {
              top: "10%",
              left: "20%",
              child: <div style={{ top: "50%" }}>x</div>,
            },
            {
              top: "20%",
              left: "50%",
              child: <div style={{ top: "50%" }}>y</div>,
            },
            {
              top: "80%",
              left: "50%",
              child: <div style={{ top: "50%" }}>z</div>,
            },
          ]}
        />
      </div>
    </>
  );
}

export default App;
