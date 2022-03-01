import './docs.css';

import { NavigationSide, NavigationTop } from '../../components/index';
import { Outlet } from 'react-router-dom';

export default function Docs() {
  return (
    <div className='page-docs'>
      <NavigationTop />
      <NavigationSide />
      <Outlet />
    </div>
  );
}
