import PageLayout from 'components/PageLayout';
import InvestmentCard from 'components/Invest/InvestmentCard';
import { getAllCompanies } from 'lib/api';
import { useGetCompanies } from 'actions';
import CountUpTicker from 'components/CountUpTicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Testimonials from 'components/Testimonials';
import Newsletter from 'components/Newsletter';
import NewsSlider from 'components/NewsSlider';
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
          <div className='invest-header-text' style={{ 'max-width': '750px' }}>
            <h2>Startup investing made easy</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              at justo ipsum. Vestibulum consequat hendrerit urna sed facilisis.
            </p>
          </div>
        </div>
      </div>
      <div className='equity-faq-container'>
        <div className='equity-faq-card' style={{ 'padding-bottom': '60px' }}>
          <div className='equity-faq-title'>
            <div>
              <h2>Get in on the ground floor</h2>
              <p
                className='border-box-left'
                style={{ 'margin-bottom': '30px' }}
              >
                It's never been easier to discover, invest and share in the
                success of Australia's startups and high-growth businesses.
              </p>
            </div>
            <div className='equity-signup-btn'>
              <p>Learn More</p>
            </div>
          </div>
          <div className='equity-faq-card-container'>
            <div className='equity-faq-each'>
              <h4 style={{ 'margin-bottom': '20px' }}>
                <img
                  src='https://equitise.com/static/7b6c45e8eaab28492e2f878ddc96d1cf/730e7/25c93d1b-9213-4d73-9d84-8b6a00c171b1_V4_LandingPage_DiscoverExcitingStartups_1290x860-08.webp'
                  className='img-header'
                />
                Discover exciting startups
              </h4>
              <p>
                Anyone over the age of 18 can easily sign up for free. You'll be
                able to access all our offers, ask founders any questions, and
                invest after your investor profile is complete.
              </p>
            </div>
            <div className='equity-faq-each'>
              <h4 style={{ 'margin-bottom': '20px' }}>
                <img
                  src='https://equitise.com/static/b69215b9e80b60bcc0d300ae7c14cfe7/730e7/e4e8eada-674b-471e-822a-6252ee98464a_V3_LandingPage_StartInvesting-09.webp'
                  className='img-header'
                />
                Grow with them
              </h4>
              <p>
                Become an investor in the companies you believe in. By joining
                their journey, you can choose to get involved and help the
                startup grow and succeed.
              </p>
            </div>
            <div className='equity-faq-each'>
              <h4 style={{ 'margin-bottom': '20px' }}>
                <img
                  src='https://equitise.com/static/392e55786b8f7f4dc1777b845da39e36/730e7/66cb7c6f-e717-4b3e-b9ef-055a33512b37_V2_2_LandingPage_ShareSuccess-10.webp'
                  className='img-header'
                />
                Share in the success
              </h4>
              <p>
                When the offer successfully closes, you'll become a legal,
                ordinary shareholder. Receive regular shareholder updates and
                interact with the founders. The best part? You'll get a return
                on your investment if the company does well.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='equity-faq-container' style={{'margin-top': '50px', 'margin-bottom': '50px'}}>
        <div className='equity-faq-card flex-more' style={{ 'padding-bottom': '60px', 'padding-left': '0' }}>
          <div>
            <img src='https://equitise.com/static/fcef93afaf6e8c7400e7fbcfcc4bd523/4ffff/eb67be6f-8678-4818-afd6-fd41df865061_4955273.webp' style={{'width': '579px' , 'height': '600px',   'object-fit': 'cover'
        }}/>
          </div>

          <div style={{'width': '579px' , 'height': '600px', 'padding': '60px'}}>
            <h2>WHAT IS EQUITY CROWDFUNDING?</h2>
            <p  style={{ 'margin-bottom': '30px' }}>
            Equity crowdfunding is a new way for start-ups to raise funds for growth. It's a new way for everyday people to invest in these start-ups, too. Via equity crowdfunding platforms like Equitise, anyone can buy shares in unlisted companies they feel passionate about, sharing in the company's success.
            </p>
            <p  style={{ 'margin-bottom': '30px' }}>
            Finding an investing in a startup early on can get you a significant return on investment. Whilst no one can accurately predict which startups will go on to succeed, Equitise gives you access to only highly-vetted startups that are thoroughly screened.

            </p>
            <div className='equity-signup-btn'>
            <p>Learn About the Risks</p>
          </div>
          </div>
          
        </div>
      </div>
      <div className='equity-faq-container'>
        <div className='equity-faq-card' style={{ 'padding-bottom': '60px' }}>
          <div className='equity-faq-title'>
            <div>
              <h2>Ways to invest with us</h2>
              <p
                className='border-box-left'
                style={{ 'margin-bottom': '30px' }}
              >
                It's never been easier to discover, invest and share in the
                success of Australia's startups and high-growth businesses.
              </p>
            </div>
            <div className='equity-signup-btn'>
              <p>Learn More</p>
            </div>
          </div>
          <div className='equity-faq-card-container'>
            <div className='equity-faq-each'>
              <h4>Equity Crowdfunding</h4>
              <p className='blue-text'>
                <strong>$43.4 million</strong> raised over{' '}
                <strong>55 successful offers</strong>
              </p>
              <p>
                The most common way to invest and become a shareholder in a
                business. Anyone can invest in equity crowdfunds and own a piece
                of the highly-vetted startups we raise for.
              </p>
              <div className='equity-signup-btn'>
                <p>Learn More</p>
              </div>
            </div>
            <div className='equity-faq-each'>
              <h4>Wholesale</h4>
              <p className='blue-text'>
                <strong>$19.5 million</strong> raised over{' '}
                <strong>49 successful offers</strong>
              </p>
              <p>
                Get access to funding rounds from seed through to pre-IPO. To
                jump on a wholesale opportunity, you need to earn over $250,000
                or have $2.5M in net assets.
              </p>
              <div className='equity-signup-btn'>
                <p>Learn More</p>
              </div>
            </div>
            <div className='equity-faq-each'>
              <h4>IPO</h4>
              <p className='blue-text'>
                <strong>$4.8 million</strong> raised over{' '}
                <strong>14 successful offers</strong>
              </p>
              <p>
                Invest in more established businesses through these shorter term
                investments. Anyone can take a stake in an initial public
                offering (IPO). Shares can be sold at any time on the ASX.
              </p>
              <div className='equity-signup-btn'>
                <p>Learn More</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
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
