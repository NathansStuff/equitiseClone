import Button from './Button';

const LatestDeals = () => {
  return (
    <div className='portfolio-snapshot'>
      <div className='portfolio-flex'>
        <div className='portfolio-p'>
          <h3>Latest Deals</h3>
        </div>

        <Button text='View all deals' />
      </div>

      <div className='portfolio-divider' />
      <div className='latest-deal'>
        <img src='https://i.pinimg.com/originals/45/3e/ca/453ecab8ded493d5fc69887f5d670b0d.jpg' />
        <div>
          <div className='latest-header'>
            <div className='latest-title'>
              <h3>RETAIL</h3>
            </div>
            <div className='latest-highlight'>
              <p>Closes in 3 days</p>
            </div>
          </div>
          <div className='latest-name'>
            <h2>Euclideon Entertainment</h2>
          </div>
          <div className='latest-raised'>
            <div className='latest-stats'>
              <p>Raised: $437,200(48%)</p>
            </div>
            <div className='latest-stats'>
              <p>Equity: 3%</p>
            </div>
            <div className='latest-stats'>
              <p>Investors: 55</p>
            </div>
          </div>
          <div className='latest-progress'>
            <p>--------</p>
            <p>Minimum target met</p>
          </div>
        </div>
      </div>
      <div className='latest-divider'></div>

      <div className='latest-deal'>
        <img src='https://wallpaperaccess.com/full/52448.jpg' />
        <div>
          <div className='latest-header'>
            <div className='latest-title'>
              <h3>RETAIL - EXPRESSION OF INTEREEST</h3>
            </div>
            <div className='latest-highlight'>
              <p>Ends in 3 days</p>
            </div>
          </div>
          <div className='latest-name'>
            <h2>noobill</h2>
          </div>
          <div className='latest-name'>
          <h3>noobill is your AI-Powered smart account for all essential bills, banking, investments and more, all in one place</h3>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LatestDeals;
