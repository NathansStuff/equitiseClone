import LatestNews from 'components/LatestNews';
import { getAllNews } from 'lib/api';
import Loading from 'components/Loading';
import { useGetNews } from 'actions';

export default function PortfolioNews({ news: initialNews }) {
    const { data: news, teamsError } = useGetNews(initialNews);
    if (!news) {
      return <Loading />;
    }
    return (
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
    );
  }
  export async function getStaticProps() {
    const news = await getAllNews();
    return {
      props: {
        news,
      },
    };
  }  