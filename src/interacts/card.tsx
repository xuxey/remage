import { Icon } from "@iconify/react/dist/iconify.js";
import "../App.css";
import { useState } from "react";

export const CardInteract = ({
  top,
  left,
  heading = "",
  description = "",
  imageSrc = "",
  tags,
}: {
  top: string;
  left: string;
  tags: string;
  heading: string;
  description: string;
  imageSrc: string;
}): Interactable => {
  const [isHovering, setHovering] = useState(false);

  return {
    top,
    left,
    tags,
    interactable: ({ scale }) => {
      return (
        <>
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            // className={`scale-[${1 / scale}]`}
            style={{ transform: `scale(${1 / scale})` }}
          >
            {
              <div
                className={`${
                  isHovering ? "visible" : "invisible"
                } absolute -left-16 bottom-5 text-black duration-300 p-3 bg-white rounded-md bg-opacity-80 flex flex-col w-72`}
              >
                <h1 className="text-sm font-bold">{heading}</h1>
                <span className="flex flex-row mt-2">
                  <img
                    src={imageSrc}
                    alt={heading}
                    className="w-[40%] aspect-square object-cover p-1"
                  />
                  <p className="text-xs text-left p-1">{description}</p>
                </span>
              </div>
            }
            <Icon icon="ion:pin" className="text-lg hover:text-red-400" />
          </div>
        </>
      );
    },
  };
};
