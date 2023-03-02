import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import User from "./components/user";

import NavBar from "./components/navbar";
import TableList from "./components/table";
import Hero from "./components/hero";
import AboutForms from "./components/aboutforms";
import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./override.css";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Router>
        <Routes>
          <Route path="/" element={<TableList />} />
          <Route path="/user/:id" element={<User />} />
          {/* <Route path="/user/tasks/:id" element={<Tasks />} /> */}
          <Route path="/new" element={<AboutForms />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
