import { urlFor } from 'lib/api';
import Link from 'next/link';
import CountdownTimer from 'components/CountdownTimer';

const CompanyTitle = ({ logo, close }) => {
  debugger;
  return (
    <div className='company-title-container'>
      <div className='company-title-div'>
        <iframe src='https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'></iframe>
      </div>
      <div className='company-title-div'>
        <div className='company-title-header'>
          <img src={urlFor(logo).url()} />
          <div className='company-title-title'>
            <h2>Bundlfresh</h2>
            <div className='company-title-tags'>
              <div className='company-tags'>
                <h4>Public</h4>
              </div>
              <div className='company-tags'>
                <h4>Retail</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='company-title-subtitle'>
          <h3>Raised $817,000</h3>
        </div>
        <div className='company-countdown'>
          <p>Closes 15d, <CountdownTimer close={close} /></p>  
        </div>
        <div className='company-title-list'>
          <ul>
            <li>
              <p>Type: retail</p>
            </li>
            <li>
              <p>Type: retail</p>
            </li>
            <li>
              <p>Type: retail</p>
            </li>
          </ul>
        </div>
        <div className='company-title-bot'>
          <div className='company-signup-btn'>
            <p>Sign up to invest</p>
          </div>
          <div className='company-title-login'>
            <p>or Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTitle;
