import { BrowserRouter, Routes, Route } from "react-router-dom";
import Steppers from "./pages/Steppers";
import SteppersEnd from "./pages/Steppers_end";
import './styles/styles.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Steppers />} />
        <Route path="/steppers_end" element={<SteppersEnd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;