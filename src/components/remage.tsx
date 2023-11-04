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
  interactables: Interactables;
}) => {
  const initialState = {
    scale: 1,
    positionX: 0,
    positionY: 0,
  };

  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);
  const [state, setState] = useState(initialState);

  return (
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
          <div className="tools">
            <button onClick={() => zoomIn()}>+</button>
            <button onClick={() => zoomOut()}>-</button>
            <button onClick={() => resetTransform()}>Reset</button>
          </div>

          <TransformComponent>
            <img src={src} alt="" style={{ position: "relative" }} />
            {interactables.map((int) => {
              return (
                <div
                  style={{ left: int.left, top: int.top, position: "fixed" }}
                >
                  {int.interactable(state)}
                </div>
              );
            })}
          </TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
};
