import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" Component={Home} />
      </Route>
    </Routes>
  );
}

export default App;
