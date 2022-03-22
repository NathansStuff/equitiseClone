import PageLayout from 'components/PageLayout';
import InvestmentCard from 'components/Invest/InvestmentCard';
import { getAllCompanies, getAllInvestments } from 'lib/api';
import { useGetCompanies, useGetInvestments } from 'actions';

export default function Invest({ companies: initialCompanies, investments: initialInvestments }) {
  const { data: companies, companiesError } = useGetCompanies(initialCompanies);
  const { data: investments, investmentsError } = useGetInvestments(initialInvestments);

  if (!companies || !investments) {
    return 'Loading!';
  }
  console.log(companies)
  console.log('*****')
  console.log(investments)
  return (
    <PageLayout>
      <div className='invest-header-bg'>
        <div className='invest-header-text'>
          <h5>INVEST IN</h5>
          <h2>A Range of Exciting Offers</h2>
          <p>
            From equity crowdfunds to IPOs and wholesale offers, we have
            extraordinary opportunities for all types of investors. As long as
            you’re 18 or over, you’ve got options.
          </p>
        </div>
      </div>
      <div className='invest-content'>
        <div className='invest-subtitle'>
          <h4>CURRENT OFFERS</h4>
          <h2>Find a business you want to back</h2>
        </div>
      </div>
      {companies.map(company => (
     
        
        <InvestmentCard
          logo={company.logo}
          coverImage={company.coverImage}
          type={company.type}
          name={company.name}
          blurb={company.blurb}
          link={{
            href: '/company/[slug]',
            as: `/company/${company.slug}`,
          }}
          slug={company.slug}
        />
      ))}
    </PageLayout>
  );
}

export async function getStaticProps() {
  const companies = await getAllCompanies({ offset: 0 });
  const investments = await getAllInvestments();
  return {
    props: {
      companies,
      investments
    },
  };
}

