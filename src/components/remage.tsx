// import { useRef, useState } from "react";
// import { ReactZoomPanPinchRef } from "react-zoom-pan-pinch";

// export const Remage = ({
//   src,
//   interactables,
// }: {
//   src: string;
//   interactables: Interactable[];
// }) => {
//   const initialState = {
//     scale: 1,
//     positionX: 0,
//     positionY: 0,
//   };

//   const [state, setState] = useState(initialState);

//   return (
//     <div className="">
//       <img
//         src={src}
//         alt=""
//         style={{
//           position: "relative",
//           clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 6vw))",
//           scale: "200% 200%",
//         }}
//       />
//       {interactables.map((int) => {
//         return (
//           <div
//             key={`${int.left}-${int.top}`}
//             style={{
//               left: int.left,
//               top: int.top,
//               position: "absolute",
//               zIndex: 20,
//             }}
//           >
//             {int.interactable(state)}
//           </div>
//         );
//       })}
//       <div className="relative z-30">
//         <button onClick={() => {}}>+</button>
//         <button onClick={() => {}}>-</button>
//         <button onClick={() => {}}>Reset</button>
//       </div>
//     </div>
//   );
// };

import React, { useRef, useState } from "react";
import {
  ReactZoomPanPinchRef,
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";

export const Remage = ({
  src,
  interactables,
}: {
  src: string;
  interactables: Interactable[];
}) => {
  const initialState = {
    scale: 1,
    positionX: 0,
    positionY: 0,
  };

  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);
  const [state, setState] = useState(initialState);

  return (
    <div className="w-2/3">
      <TransformWrapper
        initialScale={initialState.scale}
        maxScale={20}
        ref={transformComponentRef}
        onTransformed={(_a, newState) => {
          setState(newState);
        }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <React.Fragment>
            <TransformComponent>
              <img src={src} alt="" style={{ position: "relative" }} />
              {interactables.map((int) => {
                return (
                  <div
                    key={`${int.left}-${int.top}`}
                    style={{
                      left: int.left,
                      top: int.top,
                      position: "absolute",
                      zIndex: 20,
                    }}
                  >
                    {int.interactable(state)}
                  </div>
                );
              })}
            </TransformComponent>
            <div className="relative z-30">
              <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => zoomOut()}>-</button>
              <button onClick={() => resetTransform()}>Reset</button>
            </div>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  );
};
