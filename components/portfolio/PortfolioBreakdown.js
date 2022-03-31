import BlueButton from 'components/BlueButton';
export default function PortfolioBreakdown() {
  return (
    <div>
      <div className='portfolio-breakdown-container'>
        <div className='portfolio-breakdown-header'>
          <h1>Opportunity Distribution</h1>
        </div>
        <div className='portfolio-breakdown-pic'></div>
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
      <div className='portfolio-breakdown-overlay'>
        <div>
          <h1>Start Investing</h1>
        </div>
        <BlueButton href='/invest' content='View Deals' />
      </div>
    </div>
  );
}
