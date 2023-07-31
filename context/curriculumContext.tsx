"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";

type Information = {
  curriculumData: string;
  offerData: string;
};

interface IcurriculumContext {
  information: Information;
  setInformation: React.Dispatch<
    React.SetStateAction<{ curriculumData: string; offerData: string }>
  >;
}

const CurriculumContext = createContext<IcurriculumContext>({
  information: { curriculumData: "", offerData: "" },
  setInformation: () => {},
});

export default function CurriculumProvider({ children }: PropsWithChildren) {
  const [information, setInformation] = useState<Information>({
    curriculumData: "",
    offerData: "",
  });
  return (
    <CurriculumContext.Provider value={{ information, setInformation }}>
      {children}
    </CurriculumContext.Provider>
  );
}

export function useCurriculum() {
  const context = useContext(CurriculumContext);
  if (context === undefined) {
    throw new Error(
      "CurriculumContext must be used within a CurriculumContext"
    );
  }
  return context;
}
