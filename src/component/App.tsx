import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateNote from "../features/Notes/components/CreateNote/CreateNote";

import Tab from "../features/Notes/components/MainTab/MainTab";
import ShowNotes from "../features/Notes/components/ShowNotes/ShowNotes";
import { ROUTE_PATHS } from "../rootes/rootes";

const App: React.FC = () => {
  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Routes>
        <Route path="/" element={<Tab />}>
          {" "}
          <Route path={ROUTE_PATHS.CREATE_NOTE} element={<CreateNote />} />
          <Route path={ROUTE_PATHS.SHOW_NOTE} element={<ShowNotes />} />
        </Route>{" "}
      </Routes>
    </div>
  );
};

export default App;
