import './App.css';
import { Route, Routes } from 'react-router-dom';
import {
  Alert,
  Avatar,
  Button,
  Components,
  Docs,
  Image,
  Installation,
} from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/docs' element={<Docs />}>
          <Route path='installation' element={<Installation />} />
        </Route>

        <Route path='/components' element={<Components />}>
          <Route path='alert' element={<Alert />} />
          <Route path='button' element={<Button />} />
          <Route path='avatar' element={<Avatar />} />
          <Route path='image' element={<Image />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
