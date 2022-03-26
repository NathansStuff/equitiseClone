import Link from 'next/link';
export default function BlueButton({ href, content }) {
  return (
    <Link href={href}>
      <div className='blue-button'>
        <button>{content}</button>
      </div>
    </Link>
  );
}
