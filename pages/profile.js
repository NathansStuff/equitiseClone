import Navbar from 'components/Navbar';
import Sidebar from 'components/SideBar';
import Banner from 'components/Banner';
import PortfolioSnapshot from 'components/PortfolioSnapshot';
import LatestDeals from 'components/LatestDeals';

export default function ProfileHome() {
  return (
    <div>
      <Navbar />
      <div className='profilePageContent'>
        <Sidebar />
        <div className='profile-page-main'>
          <Banner />
          <div>
            <div className='portfolio-opportunity'>
              <PortfolioSnapshot />
              <div>Opportunity Distribution</div>
              <div>
                <h2>Div 2 Personal</h2>
                <div>Identity</div>
                <div>Portfolio Distribution</div>
              </div>
              <LatestDeals />
              <div>
                <h2>Div 3 Latest</h2>
                <div>Latest Deals</div>
                <div>Latest News</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
