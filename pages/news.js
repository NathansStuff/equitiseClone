import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';
import FilteringMenu from 'components/FilteringMenu';
import { getAllNews } from 'lib/api';
import { useGetNews } from 'actions';

export default function News({news: initialData}) {
    const [filter, setFilter] = useState({
        view: { list: 0 },
      });
    
      const { data: news, error } = useGetNews(initialData);
      if (!news) {
        return 'Loading!';
      }

  return (
    <PageLayout>
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
      />
      <hr />
      <Row className='mb-5'>
        {news.map(newsSingle =>
          filter.view.list ? (
            <Col key={`${newsSingle.slug}-list`} md='9'>
              <CardListItem
                author={newsSingle.author}
                title={newsSingle.title}
                subtitle={newsSingle.subtitle}
                date={newsSingle.date}
                link={{
                  href: '/news/[slug]',
                  as: `/news/${newsSingle.slug}`,
                }}
              />
            </Col>
          ) : (
            <Col key={newsSingle.slug} md='4'>
              <CardItem
                author={newsSingle.author}
                title={newsSingle.title}
                subtitle={newsSingle.subtitle}
                date={newsSingle.date}
                image={newsSingle.coverImage}
                link={{
                  href: '/news/[slug]',
                  as: `/news/${newsSingle.slug}`,
                }}
              />
            </Col>
          )
        )}
      </Row>
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
