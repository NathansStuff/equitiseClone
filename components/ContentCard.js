import BlueButton from './BlueButton';
export default function ContentCard({
  title,
  subtitle,
  content,
  link,
  href,
  image,
  index,
}) {
  return (
    <div className='content-card-wrapper'>
      {index % 2 == 0 ? (
        <div className='content-card'>
          <div>
            <img src={image} />
          </div>
          <div>
            <div className='content-card-dets'>
              <h1>{title}</h1>
              <h1>
                <strong>{subtitle}</strong>
              </h1>
              <p>{content}</p>
              {link ? (
                <BlueButton href={`${href}`} content='learn more' />
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className='content-card'>
          <div>
            <div className='content-card-dets'>
              <h1>{title}</h1>
              <h1>
                <strong>{subtitle}</strong>
              </h1>
              <p>{content}</p>
              {link ? (
                <BlueButton href={`${href}`} content='learn more' />
              ) : (
                ''
              )}
            </div>{' '}
          </div>
          <div>
            <img src={image} />
          </div>
        </div>
      )}{' '}
    </div>
  );
}
