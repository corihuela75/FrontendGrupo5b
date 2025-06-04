import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Container from "./containers/Container";
import Presentation from "./pages/Presentation";
import Roadmap from "./pages/Roadmap";
import Home from "./pages/Home";
import Api from "./pages/Api";
import Bitacora from "./pages/BitacoraTrabajo";
import Profile from "./components/Profile";

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="presentation/:id" element={<Profile />} />
          <Route path="presentation" element={<Presentation />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="api" element={<Api />} />
          <Route path="bitacora" element={<Bitacora />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
    </>
  );
}