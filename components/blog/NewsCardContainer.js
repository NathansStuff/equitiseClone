import { urlFor } from 'lib/api';
import Link from 'next/link';

export default function NewsCardContainer({ title, children, href }) {
    debugger
  return (
    <div className='news-card-container'>
      <h1 className='news-title'>{title}</h1>
      {children.map((child, index) => {
        return (
          <div
            className={`news-type-container ${
              index == 0 ? 'news-type-divider' : ''
            }`}
          >
            <div>
              <img src={urlFor(child.coverImage)} />
            </div>
            <div>
              <h5>{child.title}</h5>
              <p className='normal'>{child.subtitle}</p>
            </div>
          </div>
        );
      })}
      <Link href={href}>
        <p className='hover'>View more about {title}</p>
      </Link>
    </div>
  );
}
