import PageLayout from 'components/PageLayout';
import CountUpTicker from 'components/CountUpTicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CurrentOffers from 'components/CurrentOffers';
import Newsletter from 'components/Newsletter';
import NewsSlider from 'components/NewsSlider';

export default function Home() {
  return (
    <PageLayout
      title='Invest in businesses you believe in.
    '
      subtitle='THE INVESTMENT PLATFORM'
      content='Equitise is an Australian & New Zealand investment platform that brings extraordinary opportunities to everyday people. Investing is free and all companies that we partner with are highly vetted.
      '
    >
      <div className='equity-faq-container'>
        <div className='equity-faq-card'>
          <h5>INVESTMENT OPTIONS</h5>
          <div className='equity-faq-title'>
            <div>
              <h2>Ways to invest with Equitise</h2>
              <p
                className='border-box-left'
                style={{ 'margin-bottom': '30px' }}
              >
                It's never been easier to discover, invest and share in the
                success of Australia's startups and high-growth businesses.
              </p>
            </div>
            <div className='equity-signup-btn'>
              <p>View all offers</p>
            </div>
          </div>
          <div className='equity-faq-card-container'>
            <div className='equity-faq-each'>
              <h4>Equity Crowdfunding</h4>
              <p>
                <strong>$42.7 million</strong> raised over{' '}
                <strong>54 successful offers</strong>
              </p>
              <p>
                Anyone can invest in equity crowdfunds and buy a piece of a
                business they believe in.
                <ul className='faq-ul'>
                  <li>More than 10,000 investments to date</li>
                  <li>Highly vetted and highly accessible from $50</li>
                </ul>
              </p>
            </div>
            <div className='equity-faq-card-container'>
              <div className='equity-faq-each'>
                <h4>Wholesale</h4>
                <p>
                  <strong>$19.5 million</strong> raised over{' '}
                  <strong>49 successful offers</strong>
                </p>
                <p>
                  To jump on a wholesale opportunity, you need to earn over
                  $250,000 or have $2.5M in net assets.
                  <ul className='faq-ul'>
                    <li>Exclusive, highly vetted opportunities</li>
                    <li> Invest with venture funds and angels</li>
                  </ul>
                </p>
              </div>
              <div className='equity-faq-card-container'>
                <div className='equity-faq-each'>
                  <h4>IPO</h4>
                  <p>
                    <strong>$4.8 million</strong> raised over{' '}
                    <strong>14 successful offers</strong>
                  </p>
                  <p>
                    Anyone can take a stake in an initial public offering (IPO).
                    Shares can be sold at any time on the ASX.
                    <ul className='faq-ul'>
                      <li>Invest in more established businesses</li>
                      <li>Shorter term investment</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='investment-home-container'
        style={{ position: 'relative', bottom: '80px' }}
      >
        <div className='metrics-container'>
          <div className='metrics-card'>
            <div className='metrics-flex'>
              <CountUpTicker
                className='metrics-ticker'
                end={69.3}
                suffix='M'
                prefix='$'
              />
              <FontAwesomeIcon icon='coins' className='metrics-fontawesome' />
            </div>
            <span>FUNDS RAISED</span>
          </div>
          <div className='metrics-card'>
            <div className='metrics-flex'>
              <CountUpTicker className='metrics-ticker' end={119} />
              <FontAwesomeIcon
                icon='circle-check'
                className='metrics-fontawesome'
              />
            </div>
            <span>SUCCESSFUL OFFERS</span>
          </div>
          <div className='metrics-card'>
            <div className='metrics-flex'>
              <CountUpTicker className='metrics-ticker' end={13.4} suffix='K' />{' '}
              <FontAwesomeIcon
                icon='money-bill-1-wave'
                className='metrics-fontawesome'
              />
            </div>
            <span>INVESTMENTS MADE</span>
          </div>
          <div className='metrics-card'>
            <div className='metrics-flex'>
              <CountUpTicker
                className='metrics-ticker'
                end={50}
                prefix='>'
                suffix='K'
              />{' '}
              <FontAwesomeIcon
                icon='address-book'
                className='metrics-fontawesome'
              />
            </div>
            <span>INVESTOR COMMUNITY</span>
          </div>
        </div>
        <CurrentOffers />
      </div>
      <Newsletter />
      <NewsSlider />
    </PageLayout>
  );
}
