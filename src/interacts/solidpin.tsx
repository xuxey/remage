import { Icon } from "@iconify/react/dist/iconify.js";
import "../App.css";
import { useState } from "react";

export const SolidPinInteract = ({
  top,
  left,
  popupText,
  tags = "",
}: {
  top: string;
  left: string;
  popupText: string;
  tags: string;
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
            style={{ transform: `scale(${1 / scale})` }}>


            {(
              <div className={`${
                isHovering ? "visible" : "invisible"} absolute -left-16 bottom-5 w-40 text-white text-m bg-cover rounded-md bg-black/60`}>
                {popupText}
              </div>
            )}
            <div className="pin" style={{ top: "50%" }}>
              <Icon
                icon="teenyicons:pin-solid"
              />
            </div>
          </div>
        </>
      );
    },
  };
};
