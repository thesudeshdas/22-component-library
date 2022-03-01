import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Alert, Components, Docs, Installation } from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/docs' element={<Docs />}>
          <Route path='installation' element={<Installation />} />
        </Route>

        <Route path='/components' element={<Components />}>
          <Route path='alert' element={<Alert />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
