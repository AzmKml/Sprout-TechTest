import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/pokemon/:id" element={<DetailPage />}></Route>
    </Routes>
  );
}

export default App;
