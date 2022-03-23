import NewsContent from 'components/NewsContent';
import NewsHeader from 'components/NewsHeader';
import Navbar from 'components/Navbar';
import { getCompanyBySlug, getAllCompanies } from 'lib/api';
import { Row, Col } from 'react-bootstrap';
import { urlFor } from 'lib/api';

const BlogDetail = ({company}) => {
  debugger
  return (
    <div>
      <h1>Hello Detail Page - {company.slug}</h1>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const company = await getCompanyBySlug(params.slug);
  return {
    props: { company },
  };
}

export async function getStaticPaths() {
  const company = await getAllCompanies();
  return {
    paths: company?.map(b => ({ params: { slug: b.slug } })),
    fallback: false,
  };
}


export default BlogDetail;
