import Button from './Button';

const PortfolioSnapshot = () => {
  return (
    <div className='portfolio-snapshot'>
      <div className='portfolio-flex'>
        <div className='portfolio-p'>
          <h3>Portfolio snapshot</h3>
        </div>

        <Button text='View Portfolio' />
      </div>
      <div className='portfolio-divider' />
      <div className='portfolio-flex'>
        <div className='portfolio-p'>
          <h4>Name</h4>
        </div>
        <div className='portfolio-flex-2'>
          <div className='portfolio-p'>
            <h4>Shares</h4>
          </div>
          <div className='portfolio-p'>
            <h4>Agreement</h4>
          </div>
        </div>
      </div>
      <div className='portfolio-divider' />

      <div className='portfolio-flex'>
        <div className='portfolio-p'>
          <p>Douugh</p>
        </div>
        <div className='portfolio-flex-2'>
          <div className='portfolio-p'>
            <p>100</p>
          </div>
          <div className='portfolio-p'>
            <p>Download</p>
          </div>
        </div>
      </div>
      

      <div className='portfolio-flex'>
        <div className='portfolio-p'>
          <p>XInja</p>
        </div>
        <div className='portfolio-flex-2'>
          <div className='portfolio-p'>
            <p>120</p>
          </div>
          <div className='portfolio-p'>
            <p>Download</p>
          </div>
        </div>
      </div>

      <div className='portfolio-flex'>
        <div className='portfolio-p'>
          <p>Botanic Wellness</p>
        </div>
        <div className='portfolio-flex-2'>
          <div className='portfolio-p'>
            <p>110</p>
          </div>
          <div className='portfolio-p'>
            <p>Download</p>
          </div>
        </div>
      </div>

      <div className='portfolio-flex'>
        <div className='portfolio-p'>
          <p>Inspiring</p>
        </div>
        <div className='portfolio-flex-2'>
          <div className='portfolio-p'>
            <p>40</p>
          </div>
          <div className='portfolio-p'>
            <p>Download</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PortfolioSnapshot;
