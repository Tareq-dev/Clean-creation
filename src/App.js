import "./App.css";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Main from "./components/Main/Main";
import Login from "./components/LoginForm/Login";
import Navbar from "./components/Navbar/Navbar";
import SignUpForm from './components/LoginForm/SignUpForm';

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/" element={<Main />} />
      <Route path="/menu" element={<Shop></Shop>} />
    </Routes>
    </div>
  );
}

export default App;
