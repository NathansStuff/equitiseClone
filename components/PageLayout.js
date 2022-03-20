import { Container } from 'react-bootstrap';
import {Fragment} from 'react'
import Head from 'next/head';
import Navbar from './Navbar';

export default function PageLayout({children, className}) {
  return (
    <Fragment>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>
      <Fragment>
        <Navbar />
        <div className={`page-wrapper ${className}`}>
          {children}
        </div>
        <footer className="page-footer">
          <div>
            <a href="#">courses</a>{' | '}
            <a href="#">github</a>{' | '}
            <a href="#">facebook</a>
          </div>
        </footer>
      </Fragment>
    </Fragment>
  )
}
