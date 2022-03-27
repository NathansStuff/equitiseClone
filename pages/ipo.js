import PageLayout from 'components/PageLayout';
import InvestmentCard from 'components/Invest/InvestmentCard';
import { getAllCompanies } from 'lib/api';
import { useGetCompanies } from 'actions';
import CountUpTicker from 'components/CountUpTicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Testimonials from 'components/Testimonials';
import Newsletter from 'components/Newsletter';
import NewsSlider from 'components/NewsSlider';
import Loading from 'components/Loading';
export default function Home({ companies: initialCompanies }) {
  const timeNow = new Date();
  const { data: companies, companiesError } = useGetCompanies(initialCompanies);
  if (!companies) {
    return <Loading />;
  }
  return (
    <PageLayout>
      <div className='equity-header-cont'>
        <div className='invest-header-bg'>
          <div className='invest-header-text' style={{ 'max-width': '600px' }}>
            <h5>INVEST IN</h5>
            <h2>IPOs</h2>
            <p>
              Integer at justo ipsum. Vestibulum consequat hendrerit urna sed
              facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div className='equity-faq-container'>
        <div className='equity-faq-card'>
          <h5>FAQS</h5>
          <div className='equity-faq-title'>
            <div>
              <h2>Learn how IPOs work</h2>
            </div>
            <div className='equity-signup-btn'>
              <p>View all deals</p>
            </div>
          </div>
          <div className='equity-faq-card-container'>
            <div className='equity-faq-each'>
              <h4>How can I invest in an IPO?</h4>
              <p>
                With Equitise, it’s simple to be a part of equity crowdfunding.
                Follow these steps:
                <ul className='faq-ul'>
                  <li>Create an account and verify your identity</li>
                  <li>Browse our latest offers</li>
                  <li>Read the offer page & select ‘invest’ if you’re keen</li>
                </ul>
              </p>
            </div>
            <div className='equity-faq-each'>
              <h4>Who can invest in IPOs?</h4>
              <p>
                Anyone can invest in one of our retail offers. Just note that:
                <ul className='faq-ul'>
                  <li>You must be over 18 years</li>
                  <li>Retail investors must be Australian residents</li>
                  <li>
                    The minimum investment starts as low as $50. The maximum is
                    $10,000 per company
                  </li>
                </ul>
              </p>
            </div>
            <div className='equity-faq-each'>
              <h4>How can I make a return on my investment? </h4>
              <p>
                Once you own a stake in a business via equity crowdfunding, you
                could get returns when the business:
                <ul className='faq-ul'>
                  <li>Is acquired by another company</li>
                  <li>Pays dividends to shareholders</li>
                  <li>Floats or lists on the stock exchange</li>
                </ul>
              </p>
            </div>
          </div>
          <div className='equity-more-cont'>
            <p className='equity-more'>
              <span className='cta'>Want to know more?</span>
            </p>
            <p className='equity-more-p'> Learn all about equity IPOs</p>
          </div>
        </div>
      </div>
      <div
        className='investment-home-container'
        style={{ position: 'relative', bottom: '80px' }}
      >
        <div>
          <div className='invest-subtitle'>
            <h4>CURRENT OFFERS</h4>
            <h2>Find a business you want to back</h2>
          </div>
        </div>
        <div className='investment-companies-container'>
          {companies.map(company =>
            new Date(company.close) > timeNow && company.type == 'ipo' ? (
              <InvestmentCard
                logo={company.logo}
                coverImage={company.coverImage}
                type={company.type}
                name={company.name}
                blurb={company.blurb}
                link={{
                  href: '/company/[slug]',
                  as: `/company/${company.slug}`,
                }}
                slug={company.slug}
                close={company.close}
                start={company.start}
                minimum={company.minimum}
              />
            ) : (
              <div />
            )
          )}
          <div />
        </div>
      </div>
      <div
        className='investment-home-container'
        style={{ position: 'relative', bottom: '80px' }}
      >
        <div>
          <div className='invest-subtitle'>
            <h4>METRICS</h4>
            <h2>Our success with IPOs</h2>
          </div>
        </div>
        <div className='metrics-container'>
          <div className='metrics-card'>
            <div className='metrics-flex'>
              <CountUpTicker className='metrics-ticker' end={15} suffix='' />{' '}
              <FontAwesomeIcon
                icon='handshake'
                className='metrics-fontawesome'
              />
            </div>
            <span>IPOS COMPLETED</span>
          </div>
          <div className='metrics-card'>
            <div className='metrics-flex'>
              <CountUpTicker
                className='metrics-ticker'
                end={3.7}
                suffix='M'
                prefix='$'
              />
              <FontAwesomeIcon
                icon='chart-line'
                className='metrics-fontawesome'
              />
            </div>
            <span>FUNDS RAISED</span>
          </div>
          <div className='metrics-card'>
            <div className='metrics-flex'>
              <CountUpTicker className='metrics-ticker' end={1} suffix='K' />
              <FontAwesomeIcon
                icon='money-bill-1-wave'
                className='metrics-fontawesome'
              />
            </div>
            <span>INVESTMENTS MADE</span>
          </div>
          <div className='metrics-card'>
            <div className='metrics-flex'>
              <CountUpTicker className='metrics-ticker' end={100} suffix='K' />{' '}
              <FontAwesomeIcon icon='heart' className='metrics-fontawesome' />
            </div>
            <span>LARGEST INVESTMENT</span>
          </div>
        </div>
      </div>
      <Testimonials filter={['ipo']} />
      <Newsletter />
      <NewsSlider />
    </PageLayout>
  );
}
export async function getStaticProps() {
  const companies = await getAllCompanies({ offset: 0 });

  return {
    props: {
      companies,
    },
  };
}
