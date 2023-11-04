import "./App.css";
import { Remage } from "./components/remage";
import { Icon } from "@iconify/react";

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
              interactable: (zoom) => {
                console.log("x", zoom);
                return (
                  <div className="pin" style={{ top: "50%" }}>
                    <Icon icon="ion:pin" />
                  </div>
                );
              },
            },
            {
              top: "20%",
              left: "50%",
              interactable: (state) => {
                return (
                  <div style={{ top: "50%" }}>
                    {state.scale == 1 ? "y" : "zoomed in"}
                  </div>
                );
              },
            },
            {
              top: "80%",
              left: "50%",
              interactable: () => {
                return <div style={{ top: "50%" }}>z</div>;
              },
            },
          ]}
        />
      </div>
    </>
  );
}

export default App;
