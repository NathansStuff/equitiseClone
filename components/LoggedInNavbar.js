import Link from 'next/link';
import { useState } from 'react';
import BlueButton from './BlueButton';
export default function LoggedInNavbar() {
  const [clicked, setClicked] = useState(true);

  return (
    <div className='loggedin-nav-container'>
      <div className='logo'>
        <Link href='/'>
          <p>Equitise</p>
        </Link>
      </div>
      <div className='loggedin-nav-right'>
        <BlueButton href='/invest' content='View Deals' />
        <div className='initials'>
          <p>AB</p>
        </div>
        <div>
          <div class='dropdown' onClick={() => setClicked(!clicked)}>
            <div className={` ${clicked ? 'arrow-up-clicked' : 'arrow-up'}`} />
            <div
              className={` ${clicked ? 'arrow-down-clicked' : 'arrow-down'}`}
            />
            <div
              className={`loggedin-dropdown-content ${
                clicked ? 'loggedin-dropdown-content-show' : ''
              }`}
            >
              <Link href='/invest'>
                <p>All Deals</p>
              </Link>

              <Link href='/invest'>
                <p>All Deals</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
