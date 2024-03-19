import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PaginaInicial from "./pages/PaginaInicial/PaginaInicial";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
      </Routes>
    </Router>
  );
};

export default App;