import { Container } from 'react-bootstrap';
import { Fragment } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import NavHeader from './NavHeader';

export default function PageLayout({
  children,
  title,
  content,
  subtitle,
  style,
  showcard,
}) {
  return (
    <Fragment>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Fragment>
        <NavHeader
          title={title}
          content={content}
          subtitle={subtitle}
          style={style}
          showcard={showcard}
        />
        <div className={`page-background`}>{children}</div>
        <Footer />
      </Fragment>
    </Fragment>
  );
}
