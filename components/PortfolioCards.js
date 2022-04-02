import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function PortfolioCards() {
  return (
    <div className='portfolio-cards-container'>
      <Link href='/dashboard/identity'>
        <div className='portfolio-card-container color-1'>
          <div className='portfolio-card-text'>
            <h5 className='pink-border'>Start Investing</h5>
            <h3>Verify your identity</h3>
          </div>
          <div className='portfolio-card-icon'>
            <FontAwesomeIcon icon='id-card' className='metrics-fontawesome' />
          </div>
        </div>
      </Link>
      <Link href='/dashboard/identity'>
        <div className='portfolio-card-container color-2'>
          <div className='portfolio-card-text'>
            <h5 className='lightblue-border'>Investment Vehicles</h5>
            <h3>Set up a trust, company, SMSF or joint holding</h3>
          </div>
          <div className='portfolio-card-icon'>
            <FontAwesomeIcon icon='vault' className='metrics-fontawesome' />
          </div>
        </div>
      </Link>
      <Link href='/dashboard/identity'>
        <div className='portfolio-card-container color-3'>
          <div className='portfolio-card-text'>
            <h5 className='blue-border'>Sophisticated Investors</h5>
            <h3>Upload your 708 document</h3>
          </div>
          <div className='portfolio-card-icon'>
            <FontAwesomeIcon
              icon='money-check'
              className='metrics-fontawesome'
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
