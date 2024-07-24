import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialNotes from "./Components/InitialNotes";

function App() {
  return (
    <div className="notes relative flex">
      <div className="main-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<InitialNotes/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
