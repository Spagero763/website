"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type IntroState = {
  done: boolean;
  finish: () => void;
};

const IntroContext = createContext<IntroState>({ done: true, finish: () => {} });

export function IntroProvider({ children }: { children: ReactNode }) {
  const [done, setDone] = useState(false);
  return (
    <IntroContext.Provider value={{ done, finish: () => setDone(true) }}>
      {children}
    </IntroContext.Provider>
  );
}

export const useIntro = () => useContext(IntroContext);
