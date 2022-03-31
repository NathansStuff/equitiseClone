import LoggedInNavbar from 'components/LoggedInNavbar';
import Sidebar from 'components/SideBar';
import Banner from 'components/Banner';
import PortfolioSnapshot from 'components/PortfolioSnapshot';
import LatestDeals from 'components/LatestDeals';
import LatestNews from 'components/LatestNews';
import { getAllNews } from 'lib/api';
import Loading from 'components/Loading';
import { useGetNews } from 'actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PortfolioBreakdown from 'components/portfolio/PortfolioBreakdown';

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
          <Banner href={'/'}>
            <FontAwesomeIcon
              icon='triangle-exclamation'
              className='metrics-fontawesome'
            />
            <p>
              Before you invest with Equitise we require you to verify your
              identity
            </p>
          </Banner>
          <div>
            <div className='portfolio-opportunity'>
              <LatestDeals />
              <PortfolioBreakdown />
            </div>
            <div className='portfolio-flex'>
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
// <PortfolioSnapshot />
