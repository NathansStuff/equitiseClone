import PageLayout from 'components/PageLayout';
import InvestmentCard from 'components/Invest/InvestmentCard';
import { getAllCompanies, getAllInvestments, getAllNews } from 'lib/api';
import { useGetCompanies, useGetInvestments, useGetNews } from 'actions';

export default function Home({ companies: initialCompanies }) {
  const timeNow = new Date();

  const { data: companies, companiesError } = useGetCompanies(initialCompanies);
  if (!companies) {
    return 'Loading!';
  }
  return (
    <PageLayout>
      <div className='equity-header-cont'>
        <div className='invest-header-bg'>
          <div className='invest-header-text' style={{ 'max-width': '600px' }}>
            <h5>RETAIL OFFERS</h5>
            <h2>Equity Crowdfundings</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              at justo ipsum. Vestibulum consequat hendrerit urna sed facilisis.
            </p>
          </div>
        </div>
      </div>
      <div className='equity-faq-container'>
        <div className='equity-faq-card'>
          <h5>FAQS</h5>
          <div className='equity-faq-title'>
            <div>
              <h2>Learn about equity crowdfunding</h2>
            </div>
            <div className='equity-signup-btn'>
              <p>View all deals</p>
            </div>
          </div>
          <div className='equity-faq-card-container'>
            <div className='equity-faq-each'>
              <h4>How can I invest?</h4>
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
              <h4>Who is allowed to invest?</h4>
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
            <p className='equity-more-p'>
              {' '}
              Learn all about equity crowdfunding here
            </p>
          </div>
          <div className='equity-banner'>
            <p style={{ 'padding-top': '5px' }}>
              Did you know that you can also invest in IPOs?
            </p>
            <div className='equity-signup-btn'>
              <p>LEARN MORE</p>
            </div>
          </div>
        </div>
      </div>
      <div className='investment-home-container' style={{position: 'relative', bottom: '80px'}}>
        <div>
          <div className='invest-subtitle'>
            <h4>CURRENT OFFERS</h4>
            <h2>Find a business you want to back</h2>
          </div>
        </div>
        <div className='investment-companies-container' >
          {companies.map(company =>
            new Date(company.close) > timeNow && company.type == 'retail' ? (
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
