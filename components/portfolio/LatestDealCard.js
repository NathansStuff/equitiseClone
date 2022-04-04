import { urlFor } from 'lib/api';
import CountdownTimer from 'components/CountdownTimer';
import { useGetInvestments } from 'actions';
import Loading from 'components/Loading';
export default function LatestDealCard({
  company,
  investments: initialInvestments,
}) {
  const { data: investments, error } = useGetInvestments(initialInvestments);
  if (!investments) {
    return <Loading />;
  }
  var i;
  var CompanyInvestments;
  if (investments) {
    for (i = 0; i < investments.length; i++) {
      if (company.name === investments[i]['name'])
        CompanyInvestments = investments[i]['relatedInvestment'];
    }
  }
  const totalInvestments = CompanyInvestments ? CompanyInvestments.length : 0;

  var totalInvested = 0;
  let k = 0;
  if (totalInvestments > 0) {
    for (k = 0; k < CompanyInvestments.length; k++) {
      totalInvested += CompanyInvestments[k]['amount'];
    }
  }
  var minimumPercent = Math.floor((totalInvested / company.minimum) * 100);
  var timeNow = new Date();
  var startDate = new Date(company.start);
  var closeDate = new Date(company.close);
  return (
    <div className='latest-deal'>
      <img src={urlFor(company.coverImage)} />
      <div className='latest-deal-card-content'>
        <div className='latest-header'>
          <div className='latest-title'>
            <h3>{company.type}</h3>
          </div>
          {startDate < timeNow && closeDate > timeNow ? (
            <div className='latest-deal-countdown'>
              <p>
                Ends in <CountdownTimer close={closeDate} />
              </p>
            </div>
          ) : (
            ''
          )}
        </div>

        <div className='latest-name'>
          <h2>{company.name}</h2>
        </div>
        <div className='latest-raised'>
          <div className='latest-stats'>
            <p>
              Raised: ${totalInvested.toLocaleString()} ({minimumPercent}%)
            </p>
          </div>
          
          <div className='latest-stats'>
            <p>Investors: {totalInvestments}</p>
          </div>
        </div>
        <div className='latest-progress'>
          <div className='investment-progress-bar'></div>
          <div
            className='investment-progress-filled'
            style={{
              width: `${Math.floor((totalInvested / company.minimum) * 100)}%`,
              'max-width': '100%',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

// <div className='latest-deal'>
//         <img src='https://wallpaperaccess.com/full/52448.jpg' />
//         <div>
//           <div className='latest-header'>
//             <div className='latest-title'>
//               <h3>RETAIL - EXPRESSION OF INTEREEST</h3>
//             </div>
//             <div className='latest-highlight'>
//               <p>Ends in 3 days</p>
//             </div>
//           </div>
//           <div className='latest-name'>
//             <h2>noobill</h2>
//           </div>
//           <div className='latest-name'>
//             <h3>
//               noobill is your AI-Powered smart account for all essential bills,
//               banking, investments and more, all in one place
//             </h3>
//           </div>
//         </div>
//       </div>
