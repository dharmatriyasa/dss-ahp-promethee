import logo from './logo.svg';
import './App.scss';
import Landing from './pages/Landing';
import Login from './pages/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <Landing />
        }>
        </Route>
        <Route path='/login' element={
          <Login />
        }>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
