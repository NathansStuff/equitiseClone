import { getCompanyBySlug, getAllCompanies } from 'lib/api';
import CompanyTitle from 'components/company/CompanyTitle';
import PageLayout from 'components/PageLayout';
const BlogDetail = ({ company }) => {
  return (
    <PageLayout>
      <CompanyTitle logo={company.logo} close={company.close} />
    </PageLayout>
  );
};

export async function getStaticPaths() {
  const companies = await getAllCompanies();
  return {
    paths: companies?.map(b => ({ params: { slug: b.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const company = await getCompanyBySlug(params.slug);
  return {
    props: { company },
  };
}

export default BlogDetail;
