import LoggedInNavbar from 'components/LoggedInNavbar';
import Sidebar from 'components/SideBar';
import Banner from 'components/Banner';
import PortfolioSnapshot from 'components/PortfolioSnapshot';
import LatestDeals from 'components/LatestDeals';
import PortfolioBreakdown from 'components/portfolio/PortfolioBreakdown';
import PortfolioNews from 'components/PortfolioNews';
import VerifyBanner from 'components/VerifyBanner';

export default function Dashboard() {
  const location = window.location;
  return (
    <div>
      <LoggedInNavbar />
      <div className='profilePageContent'>
        <Sidebar location={location.pathname} />
        <div className='profile-page-main'>
          <VerifyBanner />
          <div>
            <div className='portfolio-opportunity'>
              <LatestDeals />
              <PortfolioBreakdown />
            </div>
            <div>
              <PortfolioNews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
