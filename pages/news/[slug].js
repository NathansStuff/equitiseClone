import NewsContent from 'components/NewsContent';
import NewsHeader from 'components/NewsHeader';
import { getNewsBySlug, getAllNews } from 'lib/api';
import { Row, Col } from 'react-bootstrap';
import { urlFor } from 'lib/api';

const NewsPage = ({ news }) => {
  return (
    <Row>
     
      <Col md={{ span: 10, offset: 1 }}>
     
        <NewsHeader
          title={news.title}
          subtitle={news.subtitle}
          coverImage={urlFor(news.coverImage).height(600).url()}
          author={news.author}
          date={news.date}
        />
        <hr />
        <p>{JSON.stringify(news)}</p>
        <NewsContent content={news.content} />
      </Col>
    </Row>
  );
};

export async function getStaticProps({ params }) {
  const news = await getNewsBySlug(params.slug);
  return {
    props: { news },
  };
}

export async function getStaticPaths() {
  const news = await getAllNews();
  return {
    paths: news?.map(b => ({ params: { slug: b.slug } })),
    fallback: false,
  };
}

export default NewsPage;
