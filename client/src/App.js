import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import { Container } from 'reactstrap';
import GamePage from "./components/GamePage/GamePage";

function App() {
  return (
    <Container fluid>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  </Container>
  );
}

export default App;
