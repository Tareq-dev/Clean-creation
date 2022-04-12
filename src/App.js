import "./App.css";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Main from "./components/Main/Main";
import Login from "./components/LoginForm/Login";
import Navbar from "./components/Navbar/Navbar";
import SignUpForm from "./components/LoginForm/SignUpForm";
import Shipment from "./components/Shipment/Shipment";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import TrackShipment from "./components/TrackShipment/TrackShipment";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route
          path="/shipment"
          element={
            <RequireAuth>
              <Shipment />
            </RequireAuth>
          }
        />
        <Route
          path="/track"
          element={
            <RequireAuth>
              <TrackShipment />
            </RequireAuth>
          }
        />
        <Route path="/menu" element={<Shop></Shop>} />
      </Routes>
    </div>
  );
}

export default App;
