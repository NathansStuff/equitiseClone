import LatestNews from 'components/LatestNews';
import { getAllNews } from 'lib/api';
import Loading from 'components/Loading';
import { useGetNews } from 'actions';
import BlueButton from './BlueButton';

export default function PortfolioNews({ news: initialNews }) {
  const { data: news, teamsError } = useGetNews(initialNews);
  if (!news) {
    return <Loading />;
  }
  let top3News = [];
  for (var j = 0; j < 3; j++) {
    top3News.push(
      <LatestNews
        title={news[j].title}
        image={news[j].coverImage}
        slug={news[j].slug}
        date={news[j].date}
      />
    );
  }
  return (
    <div className='portfolio-flex'>
      <div className='news-holder'>
        <div className='news-holder-title'>
          <h2>Latest News</h2>
          <BlueButton href='/news' content='View all news' />
        </div>
        {top3News}
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
