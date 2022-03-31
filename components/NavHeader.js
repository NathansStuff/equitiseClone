import Navbar from './Navbar';
import InvestmentCard from './Invest/InvestmentCard';
import { useGetCompanies } from 'actions';
import Loading from './Loading';
import { getAllCompanies } from 'lib/api';

export default function NavHeader({
  subtitle,
  content,
  title,
  style,
  showcard = false,
  companies: initialCompanies,
}) {
  const timeNow = new Date();
  const { data: companies, companiesError } = useGetCompanies(initialCompanies);
  if (!companies) {
    return <Loading />;
  }
  return (
    <div style={style} className='nav-header-bg'>
      {' '}
      <div className={`spacer ${showcard ? 'spacer-large' : ''}`} />
      <Navbar />
      <div className='equity-header-cont'>
        <div className='invest-header-bg'>
          <div className='invest-header-text' style={{ 'max-width': '600px' }}>
            <h5>{subtitle}</h5>
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
          {showcard ? (
              <InvestmentCard
                name={companies[0].name}
                coverImage={companies[0].coverImage}
                logo={companies[0].logo}
                type={companies[0].type}
                link={{
                  href: '/company/[slug]',
                  as: `/company/${companies[0].slug}`,
                }}
                slug={companies[0].slug}
                start={companies[0].start}
                close={companies[0].close}
                minimum={companies[0].minimum}
                small={true}
              />
            
          ) : (
            ''
          )}
        </div>
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
