import Button from 'components/Button';

export default function InvestmentCard() {
  return (
    <div className='investment-container'>
      <img
        src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        className='investment-img'
      />

      <div className='investment-title'>
        <img
          src='https://www.logodesign.net/images/nature-logo.png'
          className='investment-logo'
        />
        <a href='#'>
          <span>Retail</span>
        </a>
        <a href='#'>
          <h4>Business Name</h4>
        </a>

        <p>
          Bundlfresh is an Australian online marketplace allowing consumers to
          bundle produce from their favourite local...
        </p>
      </div>
      <div className='investment-summary'>
        <div className='flex-row'>
          <div>
            <h4>Minimum target met</h4>
          </div>
          <div>
            <p>
              <strong>198% raised</strong>
            </p>
          </div>
        </div>
        <div className='investment-progress-bar'></div>
        <div
          className='investment-progress-filled'
          style={{ width: '8150%', 'max-width': '100%' }}
        ></div>
      </div>
      <div className='investment-3-headers'>
        <div>
          <h4>Raised</h4>
          <h3>$794,750</h3>
        </div>
        <div>
          <h4>Equity</h4>
          <h3>5%</h3>
        </div>
        <div>
          <h4>Investments</h4>
          <h3>131</h3>
        </div>
      </div>
      <button type='button' className='investment-button'>
        <span className='button__text'>View Deal</span>
      </button>
      <div className='investment-time'>
        <p>CLOSES IN  </p>
        <p style={{ color: '#06004d', 'font-weight': '700' }}>
          17d, 12h, 40m and 20s
        </p>
      </div>
    </div>
  );
}
