import { Icon } from "@iconify/react/dist/iconify.js";
import "../App.css";

export const PopUpInteract = ({
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
  return {
    top,
    left,
    tags,
    interactable: ({ scale }) => {
      return (
        <>
          {scale > 1.5 && (
            <div className="absolute -left-16 bottom-5 w-40 text-red-400">
              {popupText}
            </div>
          )}
          <div className="pin" style={{ top: "50%" }}>
            <Icon icon="ion:pin" />
          </div>
        </>
      );
    },
  };
};
