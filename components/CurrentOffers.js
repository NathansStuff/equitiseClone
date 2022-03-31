import InvestmentCard from './Invest/InvestmentCard';
import { useGetCompanies } from 'actions';
import Loading from './Loading';
import { getAllCompanies } from 'lib/api';

export default function CurrentOffers({ companies: initialCompanies }) {
  const timeNow = new Date();
  const { data: companies, companiesError } = useGetCompanies(initialCompanies);
  if (!companies) {
    return <Loading />;
  }
  return (
    <div className='investment-home-container'>
      <div>
        <div className='invest-subtitle'>
          <h4>CURRENT OFFERS</h4>
          <h2>Find a business you want to back</h2>
        </div>
      </div>
      <div className='investment-companies-container'>
        {companies.map(company =>
          new Date(company.close) < timeNow ? (
            <div />
          ) : (
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
              close={company.close}
              start={company.start}
              minimum={company.minimum}
            />
          )
        )}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const companies = await getAllCompanies({ offset: 0 });

  return {
    props: {
      companies,
    },
  };
}
