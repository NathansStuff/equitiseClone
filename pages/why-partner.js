import PageLayout from 'components/PageLayout';
import InvestmentCard from 'components/Invest/InvestmentCard';
import { getAllCompanies } from 'lib/api';
import { useGetCompanies } from 'actions';
import Testimonials from 'components/Testimonials';
import Newsletter from 'components/Newsletter';
import NewsSlider from 'components/NewsSlider';
import WhyPartnerFAQ from 'components/why-partner/WhyPartnerFAQ';

export default function Home({ companies: initialCompanies }) {
  const { data: companies, companiesError } = useGetCompanies(initialCompanies);
 
  return (
    <PageLayout>
      <div className='equity-header-cont'>
        <div className='invest-header-bg'>
          <div className='invest-header-text' style={{ 'max-width': '600px' }}>
            <h2>Why Partner With Us</h2>
          </div>
        </div>
      </div>
      <div className='equity-faq-container'>
        <div className='equity-faq-card'>
          <div className='equity-faq-title'>
            <div>
              <h2>Fundraising made easy</h2>
              <p>
                Through over 100 successful raises, the Equitise team has
                refined the equity crowdfunding process to get you the best
                possible outcome.
              </p>
            </div>
            <div className='equity-signup-btn'>
              <p>Raise with us</p>
            </div>
          </div>
          <div className='equity-faq-card-container'>
            <div className='equity-faq-each'>
              <h4>
                {' '}
                <img
                  src='https://equitise.com/static/870270b9e869b92ebbd6d6c53da09b12/d689f/d4e5e302-1e60-4074-a11b-dbe5975dc85f_idea.webp'
                  className='img-header'
                />
                We understand your needs
              </h4>
              <p>
                We understand your business and are experts in positioning you
                for your raise; we can help put together eye-catching pitch
                decks, robust financial forecasts, a well-researched valuation
                and, above all, an attractive investment narrative.
              </p>
            </div>
            <div className='equity-faq-each'>
              <h4>
                {' '}
                <img
                  src='https://equitise.com/static/a2ab93ec6973fbc059e8e0246234b2e4/d689f/4e299509-b2d2-4489-97f8-bcc3284cea86_neural.webp'
                  className='img-header'
                />
                Connect with Australia's top investors
              </h4>
              <p>
                We can offer a unique “bookbuild” approach by setting up
                wholesale introductions with HNWs, leading consumer growth VC
                and PE funds, family offices and industry figures who can anchor
                the round, and become board advisors/ members etc. Smart money,
                not just “mum and dad” investors.
              </p>
            </div>
            <div className='equity-faq-each'>
              <h4>
                {' '}
                <img
                  src='https://equitise.com/static/da9ea9e64ee86c2316330a69f66a61a5/d689f/55b4e667-3062-4252-8cfa-a0332aff279b_holding-hands.webp'
                  className='img-header'
                />
                We're with you the whole way
              </h4>
              <p>
                We join you in putting resources and budget into the execution,
                marketing and PR. It is not a “self-serve” model. Our reputation
                relies on a hugely successful outcome for you!
              </p>
            </div>
          </div>
         
         
        </div>
      </div>
      <WhyPartnerFAQ/>
      <Testimonials />
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
