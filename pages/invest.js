import PageLayout from 'components/PageLayout';
import InvestmentCard from 'components/Invest/InvestmentCard';
import { getAllCompanies, getAllInvestments, getAllNews } from 'lib/api';
import { useGetCompanies, useGetInvestments, useGetNews } from 'actions';
import InvestmentCardPast from 'components/Invest/InvestmentCardPast';
import Newsletter from 'components/Newsletter';
import News from './news';
import InvestCarourel from 'components/Invest/InvestCarousel';
import CarouselCard from 'components/Invest/CarouselCard';

export default function Invest({
  companies: initialCompanies,
  investments: initialInvestments,
  news: initialNews,
}) {
  const { data: companies, companiesError } = useGetCompanies(initialCompanies);
  const { data: news, newsError } = useGetNews(initialNews);
  const { data: investments, investmentsError } =
    useGetInvestments(initialInvestments);
  const timeNow = new Date();

  if (!companies || !investments || !news) {
    return 'Loading!';
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
        <div className='investment-home-container'>
          <div>
            <div className='invest-subtitle'>
              <h4>SUCCESS STORIES</h4>
              <h2>Some of our highlights</h2>
            </div>
          </div>
          <div className='investment-companies-container'>
            {companies.map(company =>
              new Date(company.close) > timeNow ? (
                <div />
              ) : (
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
            )}
          </div>
        </div>
        <Newsletter />
        <div
          style={{
            maxWidth: 1200,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 64,
          }}
        >
          <InvestCarourel show={3}>
            {news.map(newsSingle => {
              return (
                <CarouselCard
                  coverImage={newsSingle.coverImage}
                  title={newsSingle.title}
                  tag1={newsSingle.tag1}
                  subtitle={newsSingle.subtitle}
                  tag2={newsSingle.tag2}
                />
              );
            })}
          </InvestCarourel>
        </div>
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const companies = await getAllCompanies({ offset: 0 });
  const investments = await getAllInvestments();
  const news = await getAllNews({ offset: 0 });
  return {
    props: {
      companies,
      investments,
      news,
    },
  };
}
