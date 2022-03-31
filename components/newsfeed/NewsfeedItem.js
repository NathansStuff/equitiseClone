import { urlFor } from 'lib/api';
import DateFormat from 'components/DateFormat';
import Link from 'next/link';

export default function NewsfeedItem({
  position,
  blurb,
  title,
  date,
  tag,
  image,
  link,
  linktext,
}) {
  const formattedDate = DateFormat(date);

  return (
    <div className={`newsitem-container newsitem-${position}`}>
      <div className='newsitem-content'>
        <div className={`newsitem-date newsitem-date-${position}`}>
          <div
            className={`newsitem-date-line newsitem-date-line-${position}`}
          ></div>{' '}
          <h2>{`${formattedDate.day} ${formattedDate.month}`}</h2>
        </div>
        <div className={`newsitem-flex-${position}`}>
          <div className='newsitem'>
            <img src={urlFor(image)} className='newsitem-img' />
            <div className='newsitem-content'>
              <h1>{tag}</h1>
              <h2>{title}</h2>
              <p>{blurb}</p>
              {link ? (
                <Link href={link}>
                  <h3 className='newsfeed-link'>{linktext}</h3>
                </Link>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
