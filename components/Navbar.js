import { useState } from 'react';
import { getAllNewsfeed } from 'lib/api';
import { useGetNewsfeed } from 'actions';
import Button from './Button';
import Link from 'next/link';
import Loading from './Loading';

export default function Navbar({ newsfeed: initialNewsfeed }) {
  const { data: newsfeed, newsfeedError } = useGetNewsfeed(initialNewsfeed);
  const [scrolled, setScrolled] = useState(false);

  if (!newsfeed) {
    return <Loading />;
  }

  const changeScrolled = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener('scroll', changeScrolled);

  return (
    <div className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='' />
      <div className='logo'>
        <Link href='/'><p>Equity</p></Link>
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
            <Link href='/about'>Our Story</Link>
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
}

export async function getStaticProps() {
  const newsfeed = await getAllNewsfeed({ offset: 0 });

  return {
    props: {
      newsfeed,
    },
  };
}
