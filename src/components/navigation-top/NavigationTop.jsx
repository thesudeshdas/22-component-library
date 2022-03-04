import './navigationTop.css';

import { DashLogoSvg, IcRoundNightsStay, MdiGithub } from '../../assets/icons';

export default function NavigationTop() {
  return (
    <nav className='nav-top flex-horizontal flex-align-center'>
      <a href='/' className='brand-dash flex-horizontal flex-align-center'>
        <DashLogoSvg className='nav-logo margin-horizontal-sm' />
        <h1 className='margin-horizontal-sm'>Dash UI</h1>
      </a>

      <ul className='flex-horizontal flex-align-center'>
        <li className='font-size-ml font-weight-600 margin-horizontal-sm'>
          Docs
        </li>
        <li className='font-size-ml font-weight-600 margin-horizontal-sm'>
          Components
        </li>
        <li className='flex-center'>
          <a href='/' className='flex-center margin-horizontal-sm'>
            <MdiGithub className='nav-logo' />
          </a>
        </li>
        <li className='flex-center'>
          <a href='/' className='flex-center margin-horizontal-sm'>
            <IcRoundNightsStay className='nav-logo' />
          </a>
        </li>
      </ul>
    </nav>
  );
}
