type State = {
  scale: number;
  positionX: number;
  positionY: number;
};

type Interactable = {
  top: string;
  left: string;
  interactable: (state: State) => React.ReactNode;
};

type Interactables = Interactable[];
