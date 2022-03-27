import PageLayout from 'components/PageLayout';
import PageTitle from 'components/PageTitle';
import { getAllNews } from 'lib/api';
import { useGetNews } from 'actions';
import Loading from 'components/Loading';
import InvestCarousel from 'components/Invest/InvestCarousel';
import CarouselCard from 'components/Invest/CarouselCard';

export default function Blog({ news: initialNews }) {
  const { data: news, newsError } = useGetNews(initialNews);
  if (!news) {
    return <Loading />;
  }

  let top3News = [];
  let latestNews = [];
  let popularNews = [];
  let companyNews = [];
  let investorNews = [];
  let i = 0;
  for (i; i < news.length; i++) {
    if (i < 3) {
        top3News.push(
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

    if (i < 6 && i >= 3) {
      latestNews.push(
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
    if (i >= 6 && i < 11) {
      popularNews.push(
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
    if (
      companyNews.length < 2 &&
      (news[i].tag1 == 'raise-funds' || news[i].tag1 == 'raise-funds')
    ) {
      companyNews.push(
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
    if (
      investorNews.length < 2 &&
      (news[i].tag1 == 'case-study' || news[i].tag1 == 'case-study')
    ) {
      investorNews.push(
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
  }

  return (
    <PageLayout>
      <PageTitle title='Resource Centre' />
      <div>
        <InvestCarousel show={3}>{top3News}</InvestCarousel>
      </div>
      <div>Suggested Topics</div>
      <div>The Latest</div>
    </PageLayout>
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
