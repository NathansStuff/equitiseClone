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

const CompanyBody = ({ content }) => {
  const headers = getHeaders(content);
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
        <BlockContent serializers={serializers} blocks={content} />
      </div>
      <div className='company-body-socials'>
        <h1>Share: </h1>
      </div>
    </div>
  );
};
export default CompanyBody;
