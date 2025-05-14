import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Container from "./containers/Container";
import Presentation from "./pages/Presentation";

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Navigate to="/presentation" replace />} />
          <Route path="presentation" element={<Presentation />} />
        </Route>

        <Route path="*" element={<Navigate to="/presentation" replace />} />
      </Routes>
    </Router>
    </>
  );
}