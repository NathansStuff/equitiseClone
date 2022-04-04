import BlueButton from 'components/BlueButton';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Fragment } from 'react';
export default function PortfolioBreakdown({ invested = false }) {
    return (
    <div className='opportunity-dist-container'>
      <div
        className={`portfolio-breakdown-container ${invested ? '' : 'opaque'}`}
      >
        <div className='portfolio-breakdown-header'>
          <h1>Opportunity Distribution</h1>
        </div>
        <div className='portfolio-breakdown-flex'>
          <div className='portfolio-breakdown-pic'>
            <div className='percent-numbers'>
              <h1>$18K</h1>
              <p>Invested</p>
            </div>
            
            <div className='percent-first'>
              <CircularProgressbar
                value={70}
                styles={buildStyles({
                  pathColor: `#00EEFF `,
                })}
              />
            </div>
            <div className='percent-second'>
              <CircularProgressbar
                value={60}
                styles={buildStyles({
                  pathColor: `#6363FF `,
                })}
              />
            </div>
            <div className='percent-third'>
              <CircularProgressbar
                value={40}
                styles={buildStyles({
                  pathColor: `#FFD240 `,
                })}
              />
            </div>
          </div>
        </div>
        <div className='portfolio-breakdown-num'>
          <div className='portfolio-breakdown-ind-start'>
            <div className='portfolio-breakdown-1' />
            <h1>7.50K</h1>
            <p>Retail</p>
          </div>
          <div className='portfolio-breakdown-ind'>
            <div className='portfolio-breakdown-2' />
            <h1>3.00K</h1>
            <p>IPO</p>
          </div>
          <div className='portfolio-breakdown-ind'>
            <div className='portfolio-breakdown-3' />
            <h1>6.20K</h1>
            <p>Wholesale</p>
          </div>
        </div>
      </div>
      <div className={`portfolio-breakdown-overlay ${invested ? 'hidden' : ''}`}>
        <div>
          <h1>Start Investing</h1>
        </div>
        <BlueButton href='/invest' content='View Deals' />
      </div>
    </div>
  );
}
