import Home from "./Pages/Home";
import Form from "./Pages/Form";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
