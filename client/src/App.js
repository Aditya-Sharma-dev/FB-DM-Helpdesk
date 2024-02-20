import './App.css';
import { BrowserRouter as  Route, Routes} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import FbIntegration from './components/FbIntegration';

function App() {
  return (
    // <div className="App">
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/fb" element={<FbIntegration/>}/>
      {/* <Login/> */}
      </Routes>
  );
}

export default App;
