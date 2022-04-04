import Link from 'next/link';
import DateFormat from './DateFormat';

const LatestNews = ({ image, slug, date, title }) => {
  const formattedDate = DateFormat(date);
  return (
    <div className='link news-individual-container'>
      <Link href={`news/${slug}`}>
        <div className='news-individual'>
          <img src={image} style={{ width: '170px', height: '90px' }} />
          <div className='news-snapshot'>
            <h3>{title}</h3>
            <p>
              {formattedDate.day} {formattedDate.month} {formattedDate.year}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LatestNews;
