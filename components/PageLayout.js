import { Container } from 'react-bootstrap';
import { Fragment } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PageLayout({ children, className }) {
  return (
    <Fragment>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Fragment>
        <Navbar />
        <div className={` ${className}`}>{children}</div>
        <Footer />
      </Fragment>
    </Fragment>
  );
}
