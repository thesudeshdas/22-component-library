// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Docs, Installation} from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/docs' element={<Docs />}>
          <Route path='installation' element={<Installation />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
