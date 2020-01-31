import { HeaderWrap } from './style';

const SiteNav = () => (
  <HeaderWrap>
    <div className='top-row container'>
      <div className='flex-grow-1 brand'>
        <a href='/'>
          <img src='/brand.png' alt='' />
        </a>
      </div>
      <div className='nav-links'>
        <a href='/about' className='d-none d-md-inline-block'>Github</a>
        <a href='/signup' className='signup'>Contact</a>
      </div>
    </div>
  </HeaderWrap>
);

export default SiteNav;
