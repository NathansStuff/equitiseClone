import { getNewsBySlug, getAllNews } from 'lib/api';

const NewsPage = ({ news }) => {
  return <h1>Hello Detail Page - {news.slug}</h1>;
};


export async function getStaticProps({params}) {
  const news = await getNewsBySlug(params.slug);
  return {
    props: {news}
  }
}

export async function getStaticPaths() {
  const news = await getAllNews();
  return {
    paths: news?.map(b => ({params: {slug: b.slug}})),
    fallback: false
  }
}


export default NewsPage;

