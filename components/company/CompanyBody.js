import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from 'components/HighlightCode';
import { urlFor } from 'lib/api';
import React from 'react';

const BlockRenderer = props => {
  const { style = 'normal' } = props.node;

  // Custom id prop if header element for same page referencing
  if (/^h\d/.test(style)) {
    return React.createElement(
      style,
      { id: `${props.children}` },
      props.children
    );
  }

  if (style === 'blockquote') {
    return <blockquote>- {props.children}</blockquote>;
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};
const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => {
      return (
        <HighlightCode language={language}>
          {code}
          <div className='code-filename'>{filename}</div>
        </HighlightCode>
      );
    },
    image: ({ node: { asset, alt, position = 'center' } }) => {
      return (
        <div className={`blog-image blog-image-${position}`}>
          <img src={urlFor(asset).fit('max').url()} />
          <div className='image-alt'>{alt}</div>
        </div>
      );
    },
    block: BlockRenderer,
  },
};

const getHeaders = content => {
  let headers = [];
  content.map(cont => {
    if (cont['style'] == 'h1') {
      headers.push(cont['children'][0]['text']);
    }
  });
  return headers;
};

const CompanyBody = ({ company }) => {
  const headers = getHeaders(company.content);
  const minimumPost = company.minimum + company.preValuation;
  const maximumPost = company.goal + company.preValuation;
  const maxShares = Math.floor(company.goal / company.price).toLocaleString();
  return (
    <div className='company-body-container'>
      <div className='company-body-header-container'>
        <div className='company-border-div'>
          <ul className='company-ul'>
            {headers.map(header => {
              return (
                <li className='company-body-header'>
                  <a href={`#${header}`}>{header}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className='company-body-content'>
        <div>
          <h1>{company.name}</h1>
          <p>{company.about}</p>
          <ul className='company-li'>
            <li>
              <p className='company-flex'>
                <div className='company-overlay-container'>
                  <strong className='company-hover'>
                    Fees Paid by Issuer:
                    <div className='company-li-overlay'>
                      <p>Super cool amazing overlay message the first!</p>
                    </div>
                  </strong>
                </div>{' '}
                {`${company.fees}`}% of funds raised
              </p>
            </li>
            <li>
              <p>
                <strong>Minimum Parcel Size:</strong>
                {' $'}
                {`${company.minimumInvestment}`}
              </p>
            </li>
            <li>
              <p className='company-flex'>
                <div className='company-overlay-container' id='cooling'>
                  <strong className='company-hover'>
                    Cooling off rights:
                    <div className='company-li-overlay'>
                      <p>Second cool amazing overlay message the next!</p>
                    </div>
                  </strong>
                </div>
                {`${company.coolingOff}`} working days
              </p>
            </li>
          </ul>
          <h1>OFFER OVERVIEW</h1>
        </div>
        <table className='company-table'>
          <tbody>
            <tr>
              <th>Offer Overview</th>
              <th></th>
              <th>
                <th>AUD</th>
              </th>
            </tr>
            <tr>
              <td>Minimum Investment</td>
              <td>amount</td>
              <td>
                {'$'}
                {company.price}
              </td>
            </tr>
            <tr>
              <td>Maximum Investment</td>
              <td>retail investors only</td>
              <td>
                {' '}
                {'$'}
                {company.maximumInvestment.toLocaleString()}
              </td>
            </tr>
            <tr>
              <td></td>
              <td>sophisticated investors only</td>
              <td>{company.maximumInvestmentSophisticated.toLocaleString()}</td>
            </tr>
            <tr>
              <td>Pre-Money Valuation</td>
              <td>equity</td>
              <td>
                {' '}
                {'$'}
                {company.preValuation.toLocaleString()}
              </td>
            </tr>
            <tr>
              <td>Offer Amount</td>
              <td>minimum</td>
              <td>
                {' '}
                {'$'}
                {company.minimum.toLocaleString()}
              </td>
            </tr>
            <tr>
              <td></td>
              <td>maximum</td>
              <td>
                {' '}
                {'$'}
                {company.goal.toLocaleString()}
              </td>
            </tr>
            <tr>
              <td>Post-Money Valuation</td>
              <td>minimum</td>
              <td>
                {'$'}
                {minimumPost.toLocaleString()}
              </td>
            </tr>
            <tr>
              <td></td>
              <td>maximum</td>
              <td>
                {'$'}
                {maximumPost.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          The company is offering up to {maxShares} shares at an issue price of{' '}
          {'$'}
          {company.price} per share up to {'$'}
          {company.goal}
        </p>
        <h1>Key Documents</h1>
        {}
        <div>
            
        </div>
        <BlockContent serializers={serializers} blocks={company.content} />
      </div>
      <div className='company-body-socials'>
        <h1>Share: </h1>
      </div>
    </div>
  );
};
export default CompanyBody;
