import LoggedInNavbar from 'components/LoggedInNavbar';
import Sidebar from 'components/SideBar';
import Banner from 'components/Banner';
import PortfolioSnapshot from 'components/PortfolioSnapshot';
import LatestDeals from 'components/LatestDeals';
import PortfolioBreakdown from 'components/portfolio/PortfolioBreakdown';
import PortfolioNews from 'components/PortfolioNews';
import VerifyBanner from 'components/VerifyBanner';
import PortfolioCards from 'components/PortfolioCards';
import { useGetNews } from 'actions';
import Loading from 'components/Loading';

export default function Dashboard({ news: initialNews }) {
  const { data: news, teamsError } = useGetNews(initialNews);
  if (!news) {
    return <Loading />;
  }
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
              <PortfolioCards />
              <PortfolioNews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
