import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import FbIntegration from "./components/FbIntegration";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/fb" element={<FbIntegration />} />
    </Routes>
  );
}

export default App;
