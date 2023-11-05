import { Icon } from "@iconify/react/dist/iconify.js";
import "../App.css";
import { useState } from "react";

export const BasicInteract = ({
  top,
  left,
  popupText = "",
  tags,
}: {
  top: string;
  left: string;
  tags: string;
  popupText?: string;
}): Interactable => {
  const [isHovering, setHovering] = useState(false);

  return {
    top,
    left,
    tags,
    interactable: () => {
      return (
        <>
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            {isHovering && (
              <div
                className={`${
                  isHovering ? "visible" : "invisible"
                } absolute -left-16 bottom-5 w-40 text-red-400 duration-300`}
              >
                {popupText}
              </div>
            )}
            <Icon icon="ion:pin" className="hover:text-red-400" />
          </div>
        </>
      );
    },
  };
};
