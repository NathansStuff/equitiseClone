import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import company from './company';
import customer from './customer';
import investment from './investment';
import author from './author';
import news from './news';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([company, customer, investment, author, news]),
});
