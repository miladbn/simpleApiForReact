import React, { useState } from "react";
import Context from "./context";
import Routes from "./Routes";

function App() {
  const [messageBox, setMessageBox] = useState({
    open: false,
    severity: "info",
    message: "",
  });
  const contextStore = { messageBox, setMessageBox };
  return (
    <Context.Provider value={contextStore}>
      <Routes />
    </Context.Provider>
  );
}

export default App;
