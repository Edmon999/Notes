import React from "react";
import Test from "./Test";

const App: React.FC = () => {
  return (
    <div className="app">
      React is working! <Test color="red" />
    </div>
  );
};

export default App;
