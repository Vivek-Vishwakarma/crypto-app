import "./App.css";
import Exchanges from "./components/Exchanges";
import Mynavbar from "./components/Mynavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Mynavbar />
        <Routes>
          <Route path="/" element={<Exchanges />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
