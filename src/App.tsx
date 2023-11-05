import { useState } from "react";
import "./App.css";
import { Remage } from "./components/remage";
import { BasicInteract } from "./interacts/basic";
import { PopUpInteract } from "./interacts/popup";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />

        <Remage
          src="base-img.png"
          interactables={[
            PopUpInteract({
              top: "10%",
              left: "20%",
              popupText: "Random point on the map",
              tags: "banana",
            }),
            BasicInteract({
              left: "20%",
              top: "40%",
              popupText: "hover on me daddy",
              tags: "apple",
            }),
          ].filter((intr) => intr.tags.includes(search))}
        />
      </div>
    </>
  );
}

export default App;
