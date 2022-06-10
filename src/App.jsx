import "../css/main.css";
import { Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import CancelOrder from "./pages/CancelOrder";
import CancelBill from "./pages/CancelBill";
import Money from "./pages/Money";
import Discount from "./pages/Discount";

function App() {
  return (
    <div className="App">
      <Background />
      <Routes>
        <Route path="/" element={<CancelOrder />} />
        <Route path="/cancelBill" element={<CancelBill />}></Route>
        <Route path="/money" element={<Money />}></Route>
        <Route path="/discount" element={<Discount />}></Route>
      </Routes>
    </div>
  );
}

export default App;
