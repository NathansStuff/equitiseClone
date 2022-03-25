import { getAllNews } from 'lib/api';
import { useGetNews } from 'actions';
import InvestCarourel from 'components/Invest/InvestCarousel';
import CarouselCard from 'components/Invest/CarouselCard';

export default function NewsSlider({ news: initialNews }) {
  const { data: news, newsError } = useGetNews(initialNews);

  if (!news) {
    return 'Loading!';
  }

  // Only 9 news component cards
  let newsComponents = [];
  let i = 0;
  for (i; i < 9; i++) {
    newsComponents.push(
      <CarouselCard
        coverImage={news[i].coverImage}
        title={news[i].title}
        tag1={news[i].tag1}
        subtitle={news[i].subtitle}
        tag2={news[i].tag2}
        link={{
          href: '/news/[slug]',
          as: `/news/${news[i].slug}`,
        }}
      />
    );
  }
  return (
    <div
      style={{
        maxWidth: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 64,
      }}
    >
      <InvestCarourel show={3}>{newsComponents}</InvestCarourel>
    </div>
  );
}
export async function getStaticProps() {
  const news = await getAllNews({ offset: 0 });
  return {
    props: {
      news,
    },
  };
}
