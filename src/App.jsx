import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Presentation } from "./pages/Presentation";
import Container from "./containers/Container";

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