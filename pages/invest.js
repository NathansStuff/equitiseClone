import PageLayout from 'components/PageLayout';
import InvestmentCard from 'components/Invest/InvestmentCard';
import { getAllCompanies } from 'lib/api';
import { useGetCompanies } from 'actions';
import Newsletter from 'components/Newsletter';
import NewsSlider from 'components/NewsSlider';
import SuccessStories from 'components/SuccessStories';
import Loading from 'components/Loading';
export default function Invest({
  companies: initialCompanies,
}) {
  const { data: companies, companiesError } = useGetCompanies(initialCompanies);
  const timeNow = new Date();
  if (!companies) {
    return <Loading />;
  }
  return (
    <PageLayout>
      <div className='invest-container'>
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
        <SuccessStories />
        <Newsletter />

        <NewsSlider />
      </div>
    </PageLayout>
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
