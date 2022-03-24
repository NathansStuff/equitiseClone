import { urlFor } from 'lib/api';
import Link from 'next/link';
import { getInvestmentBySlug } from 'lib/api';
import { useGetInvestments } from 'actions';
import CountdownTimer from '../CountdownTimer';

export default function InvestmentCard({
  name,
  blurb,
  coverImage,
  logo,
  type,
  link,
  slug,
  start,
  close,
  minimum,
  investments: initialInvestments,
}) {
  const { data: investments, error } = useGetInvestments(initialInvestments);
  var i;
  var CompanyInvestments;
  for (i = 0; i < investments.length; i++) {
    if (name === investments[i]['name'])
      CompanyInvestments = investments[i]['relatedInvestment'];
  }
  const totalInvestments = CompanyInvestments.length;

  var totalInvested = 0;
  for (i = 0; i < CompanyInvestments.length; i++) {
    totalInvested += CompanyInvestments[i]['amount'];
  }

  var timeNow = new Date();
  var startDate = new Date(start);
  var closeDate = new Date(close);

  return (
    <div className='investment-container'>
      <Link {...link}>
        <div className='investment-link'></div>
      </Link>
      <img src={urlFor(coverImage).url()} className='investment-img' />

      <div className='investment-title'>
        <img src={urlFor(logo).url()} className='investment-logo' />
        <a href='#'>
          <span>{type}</span>
        </a>
        <a href='#'>
          <h4>{name}</h4>
        </a>

        <p>{blurb}</p>
      </div>
      {startDate < timeNow ? (
        <div>
          <div className='investment-summary'>
            <div className='flex-row'>
              <div>
                <h4>
                  {totalInvested > minimum ? (
                    <div>'Minimum target met' </div>
                  ) : (
                    'Minimum not yet met'
                  )}
                </h4>
              </div>
              <div>
                <p>
                  <strong>
                    {Math.floor((totalInvested / minimum) * 100)}% raised
                  </strong>
                </p>
              </div>
            </div>
            <div className='investment-progress-bar'></div>
            <div
              className='investment-progress-filled'
              style={{
                width: `${Math.floor((totalInvested / minimum) * 100)}%`,
                'max-width': '100%',
              }}
            ></div>
          </div>
          <div className='investment-3-headers'>
            <div>
              <h4>Raised</h4>
              <h3>${totalInvested.toLocaleString()}</h3>
            </div>
            <div>
              <h4>Equity</h4>
              <h3>5%</h3>
            </div>
            <div>
              <h4>Investments</h4>
              <h3>{totalInvestments}</h3>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className='investment-summary'></div>
          <div className='investment-3-headers'></div>
          <div className='investment-interest'>Expression of Interest</div>
        </div>
      )}
      <Link {...link}>
        <button type='button' className='investment-button'>
          <span className='button__text'>View Deal</span>
        </button>
      </Link>
      {startDate < timeNow && closeDate > timeNow ? (
        <div className='investment-time'>
          <p>CLOSES IN </p>
          <p style={{ color: '#06004d', 'font-weight': '700' }}>
            <CountdownTimer close={close} />
          </p>
        </div>
      ) : (
        <div className='investment-time' />
      )}

      {startDate < timeNow && closeDate > timeNow ? (
        <div className='investment-public-coming'>
          <p>PUBLIC</p>
        </div>
      ) : (
        <div />
      )}

      {startDate > timeNow ? (
        <div className='investment-coming'>
          <p>COMING SOON</p>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
