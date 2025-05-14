// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import Container from "./components/Container";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Container></Container>
        <div className="md:ml-72 p-4 transition-all duration-300">
          <Routes>
            <Route path="/" element={<Container />} />
            {/* <Route path="/Presentation" element={<Presentation />} /> */}
            
            <Route path="*" element={<Container />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;