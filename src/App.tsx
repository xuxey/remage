import "./App.css";
import { SevenWonders } from "./remages/seven-wonders";
import { Remage } from "./components/remage";
import { SolidPinInteract } from "./interacts/solidpin";

function App() {
  return (
    <>
      <SevenWonders />
      <div>
        {/* <input type="text" onChange={(e) => setSearch(e.target.value)} /> */}

        <Remage
          src="campus_map.png"
          interactables={
            [
              SolidPinInteract({
                top: "15%",
                left: "45%",
                popupText: "National Center for Supercomputing Applications",
                tags: "National Center for Supercomputing Applications",
              }),
              SolidPinInteract({
                top: "27%",
                left: "30%",
                popupText: "Hydrosystems Lab",
                tags: "Hydrosystems Lab",
              }),
              SolidPinInteract({
                top: "30%",
                left: "55%",
                popupText: "Siebel Center",
                tags: "Siebel Center",
              }),
              SolidPinInteract({
                top: "35%",
                left: "40%",
                popupText: "Newmark (Crane Bay)",
                tags: "Newmark (Crane Bay)",
              }),
              SolidPinInteract({
                top: "43%",
                left: "45%",
                popupText: "Digital Computer Laboratory",
                tags: "Digital Computer Laboratory",
              }),
              SolidPinInteract({
                top: "72%",
                left: "47%",
                popupText: "Everitt Laboratory",
                tags: "Everitt Laboratory",
              }),
            ]
            // .filter((intr) => intr.tags.includes(search))
          }
        />
      </div>
    </>
  );
}

export default App;
