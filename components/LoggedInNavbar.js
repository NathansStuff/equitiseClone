import Link from 'next/link';
import { useState } from 'react';
import BlueButton from './BlueButton';
export default function LoggedInNavbar() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className='loggedin-nav-container'>
      <div className='logo'>
        <Link href='/'>
          <p>Equitise</p>
        </Link>
      </div>
      <div className='loggedin-nav-right'>
        <BlueButton href='/invest' content='View Deals' />
        <div className='initials' onClick={() => setClicked(!clicked)}>
          <p>AB</p>
        </div>
        <div>
          
          <div className='dropdown' onClick={() => setClicked(!clicked)}>
            <div className={` ${clicked ? 'arrow-up-clicked' : 'arrow-up'}`} />
            <div
              className={` ${clicked ? 'arrow-down-clicked' : 'arrow-down'}`}
            />
            <div
              className={`loggedin-dropdown-content ${
                clicked ? 'loggedin-dropdown-content-show' : ''
              }`}
            >
              <Link href='/dashboard/profile'>
                <p>My Profile</p>
              </Link>

              <Link href='/logout'>
                <p>Logout</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
