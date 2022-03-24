import { getCompanyBySlug, getAllCompanies, getAllInvestments } from 'lib/api';
import CompanyTitle from 'components/company/CompanyTitle';
import PageLayout from 'components/PageLayout';
import { useGetInvestments } from 'actions';
import CompanyBody from 'components/company/CompanyBody';

const CompanyDetail = ({ company, investments: initialInvestments }) => {
  const { data: investments, investmentsError } =
    useGetInvestments(initialInvestments);
  if (!investments) {
    return 'Loading!';
  }
  return (
    <PageLayout>
      <CompanyTitle
        logo={company.logo}
        close={company.close}
        name={company.name}
        goal={company.goal}
        price={company.price}
        type={company.type}
        video={company.video}
      />
      <CompanyBody company={company} />
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
  const investments = await getAllInvestments();

  return {
    props: { company, investments },
  };
}

export default CompanyDetail;
