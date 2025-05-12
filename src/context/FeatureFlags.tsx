import React, { createContext, useContext } from "react";
import data from "../data/feature_flags.json";

type ChildrenType = typeof data;
const FlagsContext = createContext<ChildrenType | null>(null);
export default function FeatureFlags({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FlagsContext.Provider value={data}>{children}</FlagsContext.Provider>;
}

export { FlagsContext };
