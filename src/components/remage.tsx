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
    <div className="w-1/2">
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
            <div className="flex space-x-2 top-20 z-30">
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3" onClick={() => zoomIn()}>    <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg></button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 " onClick={() => zoomOut()}><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg></button>
              <button className="bg-red-500 hover:bg-red-600 text-white rounded-full" onClick={() => resetTransform()}>Reset</button>
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
    </div>
  );
};
