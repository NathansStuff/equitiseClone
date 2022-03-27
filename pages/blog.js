import PageLayout from 'components/PageLayout';
import PageTitle from 'components/PageTitle';
import { getAllNews } from 'lib/api';
import { useGetNews } from 'actions';
import Loading from 'components/Loading';
import InvestCarousel from 'components/Invest/InvestCarousel';
import CarouselCard from 'components/Invest/CarouselCard';
import BlueButton from 'components/BlueButton';
import CarouselCardLong from 'components/Invest/CarouselCardLong';
import NewsCardContainer from 'components/blog/NewsCardContainer';
import News from './news';

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
    if (i == 0) {
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
          className='first-blog-card'
        />
      );
    }
    if (i > 0 && i < 3) {
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
          className='small-blog-card'
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
        <CarouselCardLong
          coverImage={news[i].coverImage}
          title={news[i].title}
          tag1={news[i].tag1}
          subtitle={news[i].subtitle}
          tag2={news[i].tag2}
          link={{
            href: '/news/[slug]',
            as: `/news/${news[i].slug}`,
          }}
          className='side-by-side'
        />
      );
    }
    if (
      companyNews.length < 2 &&
      (news[i].tag1 == 'raise-funds' || news[i].tag1 == 'raise-funds')
    ) {
      companyNews.push(news[i]);
    }
    if (
        investorNews.length < 2 &&
        (news[i].tag1 == 'raise-funds' || news[i].tag1 == 'raise-funds')
      ) {
        investorNews.push(news[i]);
      }
  }

  return (
    <PageLayout>
      <PageTitle title='Resource Centre' />
      <div className='blogs-container'>
        <div className=''>
          <div className='blog-div'>
            <div className='blog-container'>{top3News[0]}</div>
            <div className='blog-top2'>
              {top3News[1]}
              {top3News[2]}
            </div>
          </div>
        </div>
        <div className='blog-popular-div'>
          <div className='blog-popular-container'>
            <div className='blog-link-header'>
              <h3>Suggested Topics</h3>
            </div>
            <div className='blog-links'>
              <div className='blog-links-3each'>
                <BlueButton
                  href='/blog/trends'
                  content='Trends And Insights'
                  style='blog-link'
                />
                <BlueButton
                  href='/blog/founder'
                  content='Founder Interviews'
                  style='blog-link'
                />
                <BlueButton
                  href='/blog/success'
                  content='Success Stories'
                  style='blog-link'
                />
              </div>
              <div className='blog-links-3each'>
                <BlueButton
                  href='/blog/investors'
                  content='For Investors'
                  style='blog-link'
                />
                <BlueButton
                  href='/blog/companies'
                  content='For Companies'
                  style='blog-link'
                />
                <BlueButton
                  href='/blog/offer'
                  content='Offer News'
                  style='blog-link'
                />
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
      <div className='blog-popular-div'>
        <div className='blog-popular-container'>
          <div className='blog-link-header'>
            <h3>The Latest</h3>
          </div>
          <div>
            {' '}
            <div className='blog-latest'>{latestNews}</div>
          </div>
        </div>
      </div>
      <div className='blog-popular-div'>
        <div className='blog-popular-container'>
          <div className='blog-link-header'>
            <h3>Most Popular</h3>
          </div>
          <div>
            {' '}
            <div className='blog-popular'>{popularNews}</div>
          </div>
        </div>
      </div>
      <div className='blog-popular-div'>
        <div className='blog-popular-container news-container-flex'>
          <NewsCardContainer
            title='For Companies'
            children={companyNews}
            href='/blog/company'
          />
          <NewsCardContainer
            title='For Investors'
            children={investorNews}
            href='/blog/investors'
          />
        </div>
      </div>
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
