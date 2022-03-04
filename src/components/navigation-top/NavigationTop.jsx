import './navigationTop.css';

import { DashLogoSvg, IcRoundNightsStay, MdiGithub } from '../../assets/icons';

export default function NavigationTop() {
  return (
    <nav className='nav-top flex-horizontal flex-align-center'>
      <a href='/' className='brand-dash flex-horizontal flex-align-center'>
        <DashLogoSvg className='nav-logo spc-hz-sm' />
        <h1 className='spc-hz-sm'>Dash UI</h1>
      </a>

      <ul className='flex-horizontal flex-align-center'>
        <li className='font-ml font-semi-bold spc-hz-sm'>Docs</li>
        <li className='font-ml font-semi-bold spc-hz-sm'>Components</li>
        <li className='flex-center'>
          <a href='/' className='flex-center spc-hz-sm'>
            <MdiGithub className='nav-logo' />
          </a>
        </li>
        <li className='flex-center'>
          <a href='/' className='flex-center spc-hz-sm'>
            <IcRoundNightsStay className='nav-logo' />
          </a>
        </li>
      </ul>
    </nav>
  );
}
