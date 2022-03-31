import Link from 'next/link';

const Banner = ({ children, href }) => {
  return (
    <Link href={href}>
      <div className='banner'>{children} </div>
    </Link>
  );
};

export default Banner;
