import PageLayout from 'components/PageLayout';
import InvestmentCard from 'components/Invest/InvestmentCard';

export default function Invest() {
  return (
    <PageLayout>
      <div className='invest-header-bg'>
        <div className='invest-header-text'>
          <h5>INVEST IN</h5>
          <h2>A Range of Exciting Offers</h2>
          <p>
            From equity crowdfunds to IPOs and wholesale offers, we have
            extraordinary opportunities for all types of investors. As long as
            you’re 18 or over, you’ve got options.
          </p>
        </div>
      </div>
      <div className='invest-content'>
        <div className='invest-subtitle'>
          <h4 >CURRENT OFFERS</h4>
          <h2>Find a business you want to back</h2>
        </div>
      </div>
      <InvestmentCard/>
    </PageLayout>
  );
}
