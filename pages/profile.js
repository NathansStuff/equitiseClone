import Navbar from 'components/Navbar';
import Sidebar from 'components/SideBar';
import Banner from 'components/Banner';
import PortfolioSnapshot from 'components/PortfolioSnapshot';
import LatestDeals from 'components/LatestDeals';
import LatestNews from 'components/LatestNews';

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
              <div className='portfolio-flex'>
                <LatestDeals />
                <LatestNews />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
