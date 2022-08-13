import React from "react";
import { ContextProvider } from "../../SocketContext";
import Dashboard from "./Dashboard";
const Call = () => {
  return (
    <ContextProvider>
      <Dashboard />
    </ContextProvider>
  );
};

export default Call;
