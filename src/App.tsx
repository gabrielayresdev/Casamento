import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Menu from "./components/shared/Menu";

import "./app.sass";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
