import LoggedInNavbar from 'components/LoggedInNavbar';
import Sidebar from 'components/SideBar';
import LatestDeals from 'components/LatestDeals';
import PortfolioBreakdown from 'components/portfolio/PortfolioBreakdown';
import PortfolioNews from 'components/PortfolioNews';
import VerifyBanner from 'components/VerifyBanner';
import PortfolioCards from 'components/PortfolioCards';

export default function Dashboard() {
  return (
    <div>
      <LoggedInNavbar />
      <div className='profilePageContent'>
        <Sidebar />
        <div className='profile-page-main'>
          <VerifyBanner />
          <div>
            <div className='portfolio-opportunity'>
              <LatestDeals />
              <PortfolioBreakdown />
            </div>
            <div className='portfolio-content'>
              <PortfolioCards />
              <PortfolioNews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
