import React from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export const Remage = ({
  src,
  interactables,
}: {
  src: string;
  interactables: { top: string; left: string; child: React.ReactNode }[];
}) => {
  return (
    <TransformWrapper initialScale={1} maxScale={20}>
      {({ zoomIn, zoomOut, resetTransform }) => (
        <React.Fragment>
          <div className="tools">
            <button onClick={() => zoomIn()}>+</button>
            <button onClick={() => zoomOut()}>-</button>
            <button onClick={() => resetTransform()}>Reset</button>
          </div>

          <TransformComponent>
            <div
              style={{
                position: "relative",
                display: "fixed",
                top: 0,
                left: 0,
              }}
            >
              <img src={src} alt="" style={{ position: "relative" }} />
              {interactables.map((int) => {
                return (
                  <div
                    style={{ left: int.left, top: int.top, position: "fixed" }}
                  >
                    {int.child}
                  </div>
                );
              })}
            </div>
          </TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
};
