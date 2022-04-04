import BlueButton from './BlueButton';
import { getAllCompanies } from 'lib/api';
import { useGetCompanies } from 'actions';
import Loading from './Loading';
import LatestDealCard from './portfolio/LatestDealCard';

const LatestDeals = ({ companies: initialCompanies }) => {
  const { data: companies, companiesError } = useGetCompanies(initialCompanies);
  if (!companies) {
    return <Loading />;
  }
  return (
    <div className='portfolio-snapshot'>
      <div className='portfolio-flex'>
        <div className='portfolio-p'>
          <h3>Latest Deals</h3>
        </div>
        <BlueButton href='/invest' content='View all deals' />
      </div>
      {companies.map((company, index) => {
        if (index < 2) {
          return <LatestDealCard company={company} />;
        }
      })}
    </div>
  );
};

export default LatestDeals;
export async function getStaticProps() {
  const companies = await getAllCompanies({ offset: 0 });

  return {
    props: {
      companies,
    },
  };
}
