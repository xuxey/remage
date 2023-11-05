import { Icon } from "@iconify/react/dist/iconify.js";
import "../App.css";
import { useState, useEffect } from "react"; 

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

    const [isPopupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
    setPopupVisible(isPopupVisible);


      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPopupVisible]);

  return {
    top,
    left,
    tags,
    interactable: ({ scale, positionX, positionY }) => {
      return (
        <>
          {(scale > 2 || isPopupVisible ) && (
            <div className="absolute -left-16 bottom-5 w-40 text-white text-xs bg-cover rounded-md bg-black/60">
              {popupText}
            </div>
          )}
          <div className="pin" style={{ top: "50%" }}>
            <Icon icon="teenyicons:pin-solid" onClick={() => setPopupVisible(!isPopupVisible)} />
          </div>
        </>
      );
    },
  };
};
