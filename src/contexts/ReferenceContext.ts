import { createContext } from "react";

interface ReferenceContextValue {
  reference: number;
  setReference: React.Dispatch<React.SetStateAction<number>>;
}

const ReferenceContextState = {
  reference: 0,
  setReference: () => {},
};

const RefContext = createContext<ReferenceContextValue>(ReferenceContextState);

export default RefContext;
