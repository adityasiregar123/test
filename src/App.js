import './App.css';
import Login from '../src/Component/Login/Login';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
