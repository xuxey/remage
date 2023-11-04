import { Children } from "react";

export const Remage = ({
  img,
  interactables,
}: {
  img: string;
  interactables: { top: string; left: string; child: React.ReactNode }[];
}) => {
  return (
    <div style={{ position: "relative", display: "fixed", top: 0, left: 0 }}>
      <img src={img} alt="" style={{ position: "relative" }} />
      {interactables.map((int) => {
        return (
          <div style={{ left: int.left, top: int.top, position: "fixed" }}>
            {int.child}
          </div>
        );
      })}
    </div>
  );
};
