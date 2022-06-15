import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from '../src/Component/Home/Home';
import Login from '../src/Component/Login/Login';
import Test from '../src/Component/Test/Test';
import Charts from '../src/Component/Charts/Charts';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/auth/test" element={<Test />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
