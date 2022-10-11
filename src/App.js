import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Converter from './screens/Converter';

function App() {
  return (
    <Router>
      <>
        <div className="container px-4">
          <div className="row">
            <Routes>
              <Route path='/' element={<Home />} exact />
              <Route path='/converter/' element={<Converter />} />
            </Routes>    
          </div>
        </div> 
      </>
    </Router>
  );
}

export default App;
