import { urlFor } from 'lib/api';
import { Fragment } from 'react';
import Link from 'next/link';
import { getInvestmentBySlug } from 'lib/api';
import { useGetInvestments } from 'actions';
import CountdownTimer from './CountdownTimer';

function diff_miliseconds(dt2, dt1) {
  var diff = dt2.getTime() - dt1.getTime();
  return Math.abs(Math.round(diff));
}

function abbreviateNumber(number) {
  var SI_SYMBOL = ['', 'K', 'M', 'G', 'T', 'P', 'E'];

  // what tier? (determines SI symbol)
  var tier = (Math.log10(Math.abs(number)) / 3) | 0;

  // if zero, we don't need a suffix
  if (tier == 0) return number;

  // get suffix and determine scale
  var suffix = SI_SYMBOL[tier];
  var scale = Math.pow(10, tier * 3);

  // scale the number
  var scaled = number / scale;

  // format number and add suffix
  if (suffix === 'K') {
    return scaled.toFixed(0) + suffix;
  }
  return scaled.toFixed(1) + suffix;
}

function capitaliseTag(tag) {
  if (!tag) {
    return;
  }
  if (tag.includes('-')) {
    var splitStr = tag.split('-');
  } else {
    var splitStr = tag;
  }
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  return splitStr.join(' ');
}

export default function InvestmentCardPast({
  name,
  blurb,
  coverImage,
  type,
  link,
  slug,
  start,
  close,
  minimum,
  tag1,
  tag2,
  investments: initialInvestments,
}) {
  var capitalTag1 = capitaliseTag(tag1);
  var capitalTag2 = capitaliseTag(tag2);
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
  const invested = abbreviateNumber(totalInvested);

  var timeNow = new Date();
  var startDate = new Date(start);
  var closeDate = new Date(close);
  var timeDiffMs = diff_miliseconds(closeDate, timeNow);

  return (
    <div className='investment-container-past'>
      <Link {...link}>
        <div className='investment-link'></div>
      </Link>
      <img src={urlFor(coverImage).url()} className='investment-img' />

      <div className='investment-title-past'>
        <a href='#'>
          <h4>{name}</h4>
        </a>

        <p>{blurb}</p>
      </div>
      <div className='investment-past-dets'>
        <h3>{type}</h3>
        <h4>A${invested}</h4>
      </div>
      <div className='investment-past-tags'>
        {capitalTag1 ? (
          <div className='investment-past-tag'>
            <p>{capitalTag1}</p>
          </div>
        ) : (
          <Fragment />
        )}

        {capitalTag2 ? (
          <div className='investment-past-tag' >
            <p >{capitalTag2}</p>
          </div>
        ) : (
          <Fragment />
        )}
      </div>
    </div>
  );
}
