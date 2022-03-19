import { getNewsBySlug, getAllNews } from 'lib/api';

const NewsPage = ({ news }) => {
  return <h1>Hello Detail Page - {news.slug}</h1>;
};

export default NewsPage;

export async function getServerSideProps({ params }) {
  const news = await getNewsBySlug(params.slug);
  debugger;
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
