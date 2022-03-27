import Link from 'next/link';
export default function BlueButton({ href, content, style = '' }) {
  return (
    <Link href={href}>
      <div className={`blue-button ${style}`}>
        <button>{content}</button>
      </div>
    </Link>
  );
}
