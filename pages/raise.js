import PageLayout from 'components/PageLayout';
import InvestmentCard from 'components/Invest/InvestmentCard';
import { getAllCompanies } from 'lib/api';
import { useGetCompanies } from 'actions';
import CountUpTicker from 'components/CountUpTicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Testimonials from 'components/Testimonials';
import Newsletter from 'components/Newsletter';
import NewsSlider from 'components/NewsSlider';
import SuccessStories from 'components/SuccessStories';
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
            <h5>THE SMART WAY TO FUND YOUR BUSINESS</h5>
            <h2>Raise Funds</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              at justo ipsum. Vestibulum consequat hendrerit urna sed facilisis.
            </p>
          </div>
        </div>
      </div>
      <div className='equity-faq-container'>
        <div className='equity-faq-card'>
          <div className='equity-faq-title'>
            <div>
              <h2>Raise the capital you need</h2>
            </div>
            <div className='equity-signup-btn'>
              <p>Raise with us</p>
            </div>
          </div>
          <div>
            <p style={{ width: '80%', 'padding-bottom': '20px' }}>
              From seed rounds to IPOs, we can help you raise the capital you
              need by accessing one of Australia’s largest investor communities
              and building a tribe of passionate investors. Our team of
              experienced finance, technology and marketing professionals will
              support you through your growth and fundraising plans.
            </p>
          </div>
          <div className='equity-faq-card-container'>
            <div className='equity-faq-each'>
              <h4 style={{ 'margin-bottom': '20px' }}>
                <img
                  src='https://equitise.com/static/a2ab93ec6973fbc059e8e0246234b2e4/d689f/4e299509-b2d2-4489-97f8-bcc3284cea86_neural.webp'
                  className='img-header'
                />
                Connect with Australia's top investors
              </h4>
              <p>
                We have a database of over 50,000 investors including angels, PE
                and VC firms, family offices and industry figures. In the past,
                we have arranged high-profile pitches, coordinated significant
                PE investment and assisted in finding board members and
                advisors.
              </p>
            </div>
            <div className='equity-faq-each'>
              <h4 style={{ 'margin-bottom': '20px' }}>
                <img
                  src='https://equitise.com/static/419a43a9bad5de9095294cbb4cd0be1f/d689f/49b5463e-ca69-4dfc-a1b8-4ac281e2efa2_community.webp'
                  className='img-header'
                />
                More than just capital...
              </h4>
              <p>
                The offer is also a huge marketing campaign for your company
                that builds a community of brand ambassadors, and can create
                buzz around a new launch (product, venue, service etc), brand
                awareness and build a community of passionate supporters who are
                invested in the success of your business.
              </p>
            </div>
            <div className='equity-faq-each'>
              <h4 style={{ 'margin-bottom': '20px' }}>
                <img
                  src='https://equitise.com/static/42d786337771ddc6ad8847c26af3ac41/d689f/4fddd1b0-d3a8-4d49-be5b-4314cb30f195_handshake%2B%25281%2529.webp'
                  className='img-header'
                />
                It Doesn’t End at The Raise
              </h4>
              <p>
                Equitise can also support you after the capital raise by
                offering advice on share registry services and can introduce you
                to some of our registry partners.
                <br />
                <br />
                We can also offer advice on future rounds, introductions to
                future investors and growth strategy
                <br />
                <br />
                We have also developed a proprietary secondary market solution
                that allows the subsequent sale and trading of shares. We have
                used this solution for well known names such as Stone & Wood.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SuccessStories limit={1} />
      <Testimonials filter={['wholesale', 'retail', 'ipo']} />
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
