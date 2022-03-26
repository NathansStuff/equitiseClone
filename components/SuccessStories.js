import { getAllCompanies } from 'lib/api';
import { useGetCompanies } from 'actions';
import InvestmentCardPast from 'components/Invest/InvestmentCardPast';

export default function SuccessStories({
  companies: initialCompanies,
  filter = ['retail', 'ipo', 'wholesale'],
  limit = 5,
}) {
  const { data: companies, companiesError } = useGetCompanies(initialCompanies);
  const timeNow = new Date();

  if (!companies) {
    return 'Loading!';
  }
  let showCompanies = { retail: [], wholesale: [], ipo: [] };
  companies.map(company =>
    new Date(company.close) < timeNow && filter.includes(company.type)
      ? showCompanies[company.type].push(
          <InvestmentCardPast
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
            tag1={company.tag1}
            tag2={company.tag2}
          />
        )
      : ''
  );
  debugger;

  return (
    <div className='investment-home-container'>
      <div>
        <div className='invest-subtitle'>
          <h4>SUCCESS STORIES</h4>
          <h2>Some of our highlights</h2>
        </div>
      </div>
      <div className='investment-companies-container'>
        {showCompanies['retail']}
        {showCompanies['ipo']}
        {showCompanies['wholesale']}
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
