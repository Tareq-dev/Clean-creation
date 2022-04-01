import "./App.css";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Main from "./components/Main/Main";
import Login from "./components/LoginForm/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Main />} />
      <Route path="/menu" element={<Shop></Shop>} />
    </Routes>
  );
}

export default App;
