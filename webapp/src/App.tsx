import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DesignSystem from './pages/DesignSystem';
import Test from './pages/Test';
import SimpleTest from './pages/SimpleTest';
import ButtonTest from './pages/ButtonTest';
import CardTest from './pages/CardTest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="/test" element={<Test />} />
        <Route path="/simple-test" element={<SimpleTest />} />
        <Route path="/button-test" element={<ButtonTest />} />
        <Route path="/card-test" element={<CardTest />} />
      </Routes>
    </Router>
  );
}

export default App;
