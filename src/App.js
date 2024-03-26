import React from "react";
import Characters from "./components/Pagination/Characters";
import Navbar from "./components/Navbar/Navbar";
import Lazy from "./components/Lazy_loading/Lazy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/PaginationLazyloading" element={<Characters />} />
        <Route path="/PaginationLazyloading/lazy" element={<Lazy />} />
      </Routes>
    </Router>
  );
}

export default App;
