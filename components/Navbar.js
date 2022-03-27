import Button from './Button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='navbar '>
      <div className='logo'>
        <p>equitise</p>
      </div>
      <div className='navbar-links'>
        <div class='dropdown'>
          <button class='dropbtn'>Invest</button>
          <div class='dropdown-content'>
            <Link href='/invest'>All Deals</Link>
            <Link href='/equity'>Equity Crowdfunds</Link>
            <Link href='/ipo'>IPO</Link>
            <Link href='/wholesale'>Wholesale</Link>
            <Link href='/why-invest'>Why Invest</Link>
          </div>
        </div>
        <div class='dropdown'>
          <button class='dropbtn'>Raise</button>
          <div class='dropdown-content'>
            <Link href='/raise'>How to Raise Capital</Link>
            <Link href='/why-partner'>Why Partner With Us</Link>
          </div>
        </div>
        <div class='dropdown'>
          <button class='dropbtn'>About</button>
          <div class='dropdown-content'>
            <Link href='/about-us'>Our Story</Link>
            <Link href='/team'>Meet the Team</Link>
          </div>
        </div>
        <div class='dropdown'>
          <button class='dropbtn'>Learn</button>
          <div class='dropdown-content'>
            <Link href='/blog'>Blog</Link>
            <Link href='/newsfeed'>Newsfeed</Link>
          </div>
        </div>
      </div>
      <div className='navbar-right'>
        <Button text='View Deals' />
        <div className='initials'>
          <p>AB</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
