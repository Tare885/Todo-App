import "./App.css";
import "./style/dark.css";
import TodoWrapper from "./components/TodoWrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoWrapper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
