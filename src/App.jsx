import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Navbarv2 from "./components/Navbarv2";
import AiGenerate from "./pages/AiGenerate";
import ScriptEdit from "./pages/ScriptEdit";
import EditorPage from "./pages/EditorPage";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" Component={Home} />
      </Route>
      <Route element={<Navbarv2 />}>
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/generate" Component={AiGenerate} />
        <Route path="/script" Component={ScriptEdit} />
        <Route path="/editor" Component={EditorPage} />
      </Route>
    </Routes>
  );
}

export default App;
