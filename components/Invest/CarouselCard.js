import Link from 'next/link';

function covertTag(tag) {
  if (!tag) {
    return;
  }
  if (tag.includes('-')) {
    var splitStr = tag.split('-').join(' ');
  } else {
    var splitStr = tag;
  }

  return splitStr;
}

export default function CarouselCard({
  coverImage,
  tag1,
  tag2,
  title,
  subtitle,
  link,
  className = '',
}) {
  return (
    <Link {...link}>
      <div className={`carousel-card-ult ${className}`}>
        <div className={`carousel-card-container ${className == 'first-blog-card' ? 'first-blog-card-div' : ''} `}>
          <div className='carousel-card-img-container'>
            <img src={coverImage} alt='placeholder' style={{ width: '100%' }} />
          </div>
          <div>
            <div>
              <div className='carousel-card-tags'>
                <Link href={'/news/[slug]'} as={`/news/${tag1}`}>
                  <h4>{covertTag(tag1)} </h4>
                </Link>
                {tag2 && tag1 ? <h4 className='h4-tag'>{' | '}</h4> : ''}
                <Link href={'/news/[slug]'} as={`/news/${tag2}`}>
                  <h4> {covertTag(tag2)}</h4>
                </Link>
              </div>
              <div>
                <h3>{title}</h3>
              </div>
              <div>
                <p>{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
