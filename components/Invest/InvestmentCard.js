import { urlFor } from 'lib/api';
import Link from 'next/link';
import { getInvestmentBySlug } from 'lib/api';
import { useGetInvestments } from 'actions';
export default function InvestmentCard({
  name,
  blurb,
  coverImage,
  logo,
  type,
  link,
  slug,
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
      totalInvested += CompanyInvestments[i]['amount']
  }

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
      <div className='investment-summary'>
        <div className='flex-row'>
          <div>
            <h4>Minimum target met</h4>
          </div>
          <div>
            <p>
              <strong>198% raised</strong>
            </p>
          </div>
        </div>
        <div className='investment-progress-bar'></div>
        <div
          className='investment-progress-filled'
          style={{ width: '8150%', 'max-width': '100%' }}
        ></div>
      </div>
      <div className='investment-3-headers'>
        <div>
          <h4>Raised</h4>
          <h3>{totalInvested}</h3>
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
      <Link {...link}>
        <button type='button' className='investment-button'>
          <span className='button__text'>View Deal</span>
        </button>
      </Link>
      <div className='investment-time'>
        <p>CLOSES IN </p>
        <p style={{ color: '#06004d', 'font-weight': '700' }}>
          17d, 12h, 40m and 20s
        </p>
      </div>
    </div>
  );
}
