import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const newsFields = `
title, 
subtitle, 
content, 
date, 
tag1,
tag2,
'slug': slug.current, 
'coverImage': coverImage.asset->url, 
'author': author->{name, 'avatar': avatar.asset->url},
`;

export async function getAllNews() {
  const results = await client.fetch(
    `*[_type == "news"]{${newsFields}} | order(date asc)`
  );
  return results;
}

export async function getNewsBySlug(slug) {
  const result = await client
    .fetch(`*[_type == "news" && slug.current == $slug]{${newsFields}}`, {
      slug,
    })
    .then(res => res?.[0]);

  return result;
}

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

const companyFields = `
name, 
facebook,
instagram,
linkedin,
goal, 
minimum, 
shares, 
price,
video,
content,
blurb,
about,
start,
tag1,
tag2,
close,
logo,
type,
fees,
maximumInvestment,
maximumInvestmentSophisticated,
minimumInvestment,
preValuation,
coolingOff,
'doc1': doc1.asset->url,
'doc1Title': doc1.title,
'doc2': doc2.asset->url,
'doc2Title': doc2.title,
'doc3': doc3.asset->url,
'doc3Title': doc3.title,
'slug': slug.current, 
'coverImage': coverImage.asset->url, 
`;

export async function getAllCompanies() {
  const results = await client.fetch(`*[_type == "company"]{${companyFields}}`);
  return results;
}

export async function getCompanyBySlug(slug) {
  const result = await client
    .fetch(
      `*[_type == "company" && slug.current == $slug] {
        ${companyFields}
      }`,
      { slug }
    )
    .then(res => res?.[0]);

  return result;
}

export async function getAllInvestments() {
  const results =
    await client.fetch(`*[_type == 'company' ]{name, "relatedInvestment": *[_type=='investment' && references(^._id)]{amount}}
  `);
  return results;
}

export async function getInvestmentBySlug(slug) {
  const results =
    await client.fetch(`*[_type == 'company' && slug == $slug]{slug}
  `);
  return results;
}

const testimonialFields = `
'company': company->{name},
'customer': customer->{name, avatar},
testimony,
type,
`;


export async function getAllTestimonys() {
  const results = await client.fetch(`*[_type == "testimony"]{${testimonialFields}}`);
  return results;
}
