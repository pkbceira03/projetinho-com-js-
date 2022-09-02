import React from 'react';
import ImgLogo from '../../../images/logo.png';

function Header(props) {
    const logo = <img src={ImgLogo} alt='logo'/>
  return (
    <div className='header'>
        {logo}
        <h3>PRETO TERRAS DEVASTADAS</h3>
    </div>
  );
}

export default Header