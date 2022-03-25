import { urlFor } from 'lib/api';
import Link from 'next/link';

const TestimonialCard = ({
  customer,
  company,
  type,
  testimony,
  avatar,
 
}) => {
  return (
    <div className='carousel-card-ult'>
      <div
        className='carousel-card-container '
        style={{ padding: '40px', display: 'flex', 'flex-direction': 'column' }}
      >
        <div className='testimony-title'>
          <div className='testimony-img-container'>
            <img className='testimony-img' src={urlFor(avatar)} />
          </div>
          <div>
            <div>
              <h2 className='testimony-name'>{customer}</h2>
            </div>
            <div>
              <h3 className='testimony-company' style={{ padding: '0' }}>
                {company}
              </h3>
            </div>
            <div className='testimony-type'>
              {type == 'retail' ? 'RETAIL INVESTOR' : 'SUCCESSFUL RAISE'}
            </div>
          </div>
        </div>
        <div className='testimony-testimony'>
          <p>"{testimony}"</p>
        </div>
        <Link href='/invest'>
          <div className='testimony-button'>
            <button>Start Investing</button>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default TestimonialCard;
