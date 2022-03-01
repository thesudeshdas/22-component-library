import './components.css';

import { NavigationSide, NavigationTop } from '../../components/index';
import { Outlet } from 'react-router-dom';

export default function Components() {
  return (
    <div className='page-components'>
      <NavigationTop />
      <NavigationSide />
      <Outlet />
    </div>
  );
}
