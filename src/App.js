import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import User from "./components/user";

import TableList from "./components/table";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import AboutForms from "./components/aboutforms";

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
    </>
  );
}

export default App;
