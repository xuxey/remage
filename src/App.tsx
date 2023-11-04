import React, { useRef } from "react";

import image from "./assets/image.png";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
const pins = [
  {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    color: 'red',
  },
  {
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    color: 'blue',
  },
];

import "./App.css"
const ImageScale = ({src}) => {
  return (
    <TransformWrapper
      initialScale={1}

      maxScale={20}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
          
          <div className="tools">
            <button onClick={() => zoomIn()}>Zoom in</button>
            <button onClick={() => zoomOut()}>Zoom out</button>
            <button onClick={() => resetTransform()}>Reset</button>
          </div>

          <TransformComponent>
            {/* <Pins pins={pins}> */}
              <img src={src}alt="test" />
              <></>
            {/* </Pins> */}
          </TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
};

// function Example() {
//   return (
//     <TransformWrapper>
//       <TransformComponent>
//         <img src={image} alt="test" />
//       </TransformComponent>
//     </TransformWrapper>
//   );
// }

function App() {
  return (
    <div className="App">
      <h1>Remage</h1>
      <ImageScale src={image}/>
    </div>
  );
}

export default App
