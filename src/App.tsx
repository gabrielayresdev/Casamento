import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Menu from "./components/shared/Menu/Menu";

import "./app.sass";
import Footer from "./components/shared/Footer/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
