import { urlFor } from 'lib/api';
import Link from 'next/link';
import { useGetInvestments } from 'actions';
import CountdownTimer from 'components/CountdownTimer';

const CompanyTitle = ({
  logo,
  close,
  name,
  price,
  goal,
  type,
  video,
  investments: initialInvestments,
}) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const { data: investments, error } = useGetInvestments(initialInvestments);
  var i;
  var CompanyInvestments;
  if (!investments) {
    totalInvested = 0;
  } else {
    for (i = 0; i < investments.length; i++) {
      if (name === investments[i]['name'])
        CompanyInvestments = investments[i]['relatedInvestment'];

      var totalInvested = 0;
      var l;
      if (CompanyInvestments) {
        for (l = 0; l < CompanyInvestments.length; l++) {
          totalInvested += CompanyInvestments[l]['amount'];
        }
      }
    }
  }
  return (
    <div className='company-title-container'>
      <iframe src={`${video}`} className='company-title-div'></iframe>

      <div className='company-title-div'>
        <div className='company-title-header'>
          <img src={urlFor(logo).url()} />
          <div className='company-title-title'>
            <h2>{name}</h2>
            <div className='company-title-tags'>
              <div className='company-tags'>
                <h4> {type == 'retail' ? 'public' : 'private'}</h4>
              </div>
              <div className='company-tags'>
                <h4>{type}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='company-title-subtitle'>
          <h3>Raised ${totalInvested.toLocaleString()}</h3>
        </div>
        <div className='company-countdown'>
          <p>
            Closes <CountdownTimer close={close} />
          </p>
        </div>
        <div className='company-title-list'>
          <ul>
            <li>
              <p>Type: {capitalizeFirstLetter(type)}</p>
            </li>
            <li>
              <p>Total Round Size (min): AUD${goal.toLocaleString()}</p>
            </li>
            <li>
              <p>Price per share: AUD${price}</p>
            </li>
          </ul>
        </div>
        <div className='company-title-bot'>
          <Link href='/register'>
            <div className='company-signup-btn'>
              <p>Sign up to invest</p>
            </div>
          </Link>
          <div className='company-title-login'>
            <div className='link-prev-text'>
              <p>or </p>
              <Link href='/login'>
                <p className='link-text'>Login</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTitle;
