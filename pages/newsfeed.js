import { useGetNewsfeed } from 'actions';
import PageLayout from 'components/PageLayout';
import PageTitle from 'components/PageTitle';
import { getAllNewsfeed } from 'lib/api';
import Loading from 'components/Loading';
import NewsfeedItem from 'components/newsfeed/NewsfeedItem';
export default function NewsFeed({ newsfeed: initialNewsfeed }) {
  const { data: newsfeed, newsfeedError } = useGetNewsfeed(initialNewsfeed);
  if (!newsfeed) {
    return <Loading />;
  }

  return (
    <PageLayout>
      <PageTitle
        title='Newsfeed'
        content='Read about the latest news'
        subtitle='Stay updated'
      />
      <div className='equity-faq-container'>
        <div className='newsfeed-faq-card'>
          <div className='newsfeed-container'>
            <div className='timeline'>
              {newsfeed.map((news, index) => {
                return (
                  <NewsfeedItem
                    position={index % 2 == 0 ? 'left' : 'right'}
                    blurb={news.blurb}
                    title={news.title}
                    image={news.coverImage}
                    tag={news.tag}
                    date={news.date}
                    link={news.link}
                    linktext={news.linktext}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
export async function getStaticProps() {
  const newsfeed = await getAllNewsfeed({ offset: 0 });

  return {
    props: {
      newsfeed,
    },
  };
}
