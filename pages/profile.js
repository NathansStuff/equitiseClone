import Navbar from 'components/Navbar';
import Sidebar from 'components/SideBar';
import Banner from 'components/Banner';
import PortfolioSnapshot from 'components/PortfolioSnapshot';
import LatestDeals from 'components/LatestDeals';
import LatestNews from 'components/LatestNews';
import { getAllNews } from 'lib/api';

export default function ProfileHome({ news }) {
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

                <div className='news-holder'>
                  <div className='news-holder-title'>
                    <h2>Latest News</h2>
                  </div>
                  {news.map(latestNews => (
                    <LatestNews
                      title={latestNews.title}
                      image={latestNews.coverImage}
                      slug={latestNews.slug}
                      date={latestNews.date}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps() {
  const news = await getAllNews();
  return {
    props: {
      news,
    },
  };
}
