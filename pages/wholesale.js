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
export default function Wholesale({ companies: initialCompanies }) {
  const timeNow = new Date();
  const { data: companies, companiesError } = useGetCompanies(initialCompanies);

  if (!companies) {
    return <Loading />;
  }
  return (
    <PageLayout
      subtitle='EXCLUSIVE FOR HIGH NET WORTH INVESTORS'
      title='Wholesale offers'
      content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
    at justo ipsum. Vestibulum consequat hendrerit urna sed facilisis.'
    >
     
      <div className='equity-faq-container'>
        <div className='equity-faq-card'>
          <h5>FAQS</h5>
          <div className='equity-faq-title'>
            <div>
              <h2>Learn about Wholesale investing</h2>
            </div>
            <div className='equity-signup-btn'>
              <p>View all deals</p>
            </div>
          </div>
          <div className='equity-faq-card-container'>
            <div className='equity-faq-each'>
              <h4>How can I make an investment?</h4>
              <p>
                Getting started with Equitise is easy. Follow these steps:
                <ul className='faq-ul'>
                  <li>Create an account and verify your identity</li>
                  <li>Verify your status as a Wholesale Investor</li>
                  <li>Browse latest offers & invest if you’re keen</li>
                </ul>
              </p>
            </div>
            <div className='equity-faq-each'>
              <h4>Do I qualify as a Wholesale investor?</h4>
              <p>
                Each country has its own set of conditions. For instance, in
                Australia you must:
                <ul className='faq-ul'>
                  <li>Earn over $250,000 for the past two years</li>
                  <li>Or, have $2.5 million in net assets</li>
                  <li>
                    Get your accountant to fill out Sophisticated Investor
                    (s708) certificate
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
            <p className='equity-more-p'> Learn all about Wholesale offers</p>
          </div>
          <div className='equity-banner'>
            <p style={{ 'padding-top': '5px' }}>
              Did you know that Wholesale investors can also invest in IPOs and
              retail equity crowdfunds?
            </p>
            <div className='equity-signup-btn'>
              <p>View all offers</p>
            </div>
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
            new Date(company.close) > timeNow && company.type == 'wholesale' ? (
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
            <h2>Our success with Wholesale raises</h2>
          </div>
        </div>
        <div className='metrics-container'>
          <div className='metrics-card'>
            <div className='metrics-flex'>
              <CountUpTicker className='metrics-ticker' end={87} suffix='' />{' '}
              <FontAwesomeIcon
                icon='handshake'
                className='metrics-fontawesome'
              />
            </div>
            <span>EQUITY CROWDFUNDS COMPLETED</span>
          </div>
          <div className='metrics-card'>
            <div className='metrics-flex'>
              <CountUpTicker
                className='metrics-ticker'
                end={12}
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
              <CountUpTicker className='metrics-ticker' end={133} suffix='%' />
              <FontAwesomeIcon
                icon='money-bill-1-wave'
                className='metrics-fontawesome'
              />
            </div>
            <span>AVERAGE RETURN ON PORTFOLIO</span>
          </div>
          <div className='metrics-card'>
            <div className='metrics-flex'>
              <CountUpTicker
                className='metrics-ticker'
                end={500}
                suffix=''
                prefix='>'
              />{' '}
              <FontAwesomeIcon icon='heart' className='metrics-fontawesome' />
            </div>
            <span>INVESTMENTS MADE</span>
          </div>
        </div>
      </div>
      <Testimonials filter={['wholesale']} />
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
