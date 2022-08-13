import Navbar from "./components/Landing-Page/Navbar";
import Main from "./components/Landing-Page/Main";
import Footer from "./components/Landing-Page/Footer";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="Dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
