import logo from './logo.svg';
import './App.scss';
import Landing from './pages/Landing';
import Login from './pages/Login';
import KonfigurasiKriteria from './pages/KonfigurasiKriteria';
import PerhitunganAHP from './pages/PerhitunganAHP';
import KonfigurasiAlternatif from './pages/KonfigurasiAlternatif';
import PerhitunganPromethee from './pages/PerhitunganPromethee';
import HasilRekomendasi from './pages/HasilRekomendasi';
import AuthContext from './context/AuthContext';
import useAuth from './hooks/useAuth';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  const user = useAuth();

  return (
    <AuthContext.Provider value={user}>
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
        <Route path='/konfigurasi-kriteria' element={
          <KonfigurasiKriteria />
        }>
        </Route>
        <Route path='/perhitungan-kriteria-ahp' element={
          <PerhitunganAHP />
        }>
        </Route>
        <Route path='/konfigurasi-alternatif' element={
          <KonfigurasiAlternatif />
        }>
        </Route>
        <Route path='/perhitungan-promethee' element={
          <PerhitunganPromethee />
        }>
        </Route>
        <Route path='/hasil-rekomendasi' element={
          <HasilRekomendasi />
        }>
        </Route>
      </Routes>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
