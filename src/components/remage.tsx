import React, { useRef, useState } from "react";
import {
  ReactZoomPanPinchRef,
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";
import { Icon } from "@iconify/react";

export const Remage = ({
  src,
  interactables,
  title = "",
}: {
  src: string;
  interactables: Interactables;
  title: string;
}) => {
  const initialState = {
    scale: 1,
    positionX: 0,
    positionY: 0,
  };

  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);
  const [state, setState] = useState(initialState);
  const [search, setSearch] = useState("");

  return (
    <div className="m-4">
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
            <h1 className="text-xl mb-2">{title}</h1>
            <TransformComponent>
              <img src={src} alt="" style={{ position: "relative" }} />
              {interactables
                .filter((intr) =>
                  intr.tags
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase())
                )
                .map((int) => {
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
            <div className="flex flex-row justify-between z-30 items-center mt-2">
              <div>
                <input
                  className="p-1 rounded-md px-2"
                  placeholder={`Search ${title}...`}
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="flex flex-row gap-2">
                <button
                  className="p-2 rounded-md hover:bg-opacity-10 duration-200 bg-opacity-0 bg-white"
                  onClick={() => zoomIn()}
                >
                  <Icon className="text-xl" icon="lucide:zoom-in" />
                </button>
                <button
                  className="p-2 rounded-md hover:bg-opacity-10 duration-200 bg-opacity-0 bg-white"
                  onClick={() => zoomOut()}
                >
                  <Icon className="text-xl" icon="lucide:zoom-out" />
                </button>
                <button
                  className="p-2 rounded-md hover:bg-opacity-10 duration-200 bg-opacity-0 bg-white"
                  onClick={() => resetTransform()}
                >
                  <Icon className="text-xl" icon="system-uicons:zoom-reset" />
                </button>
              </div>
            </div>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  );
};
