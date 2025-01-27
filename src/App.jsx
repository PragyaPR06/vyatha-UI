import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );

}

export default App;
