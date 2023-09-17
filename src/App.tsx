import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Menu from "./components/shared/Menu/Menu";
import Contact from "./pages/Contact";

import "./app.sass";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
