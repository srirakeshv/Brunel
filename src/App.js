import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
