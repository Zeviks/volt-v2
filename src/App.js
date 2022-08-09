import Navbar from "./components/Landing-Page/Navbar";
import Main from "./components/Landing-Page/Main";
import Footer from "./components/Landing-Page/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
