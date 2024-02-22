import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import FbIntegration from "./components/FbIntegration";
import Dashboard from "./components/Dashboard";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/fb" element={<FbIntegration />} />
      <Route path="/confirmation" element={<Confirmation/>} />
      <Route path="/chats" element={<Dashboard/>} />
    </Routes>
  );
}

export default App;
