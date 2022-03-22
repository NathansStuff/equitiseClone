import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const newsFields = `
title, 
subtitle, 
content, 
date, 
'slug': slug.current, 
'coverImage': coverImage.asset->url, 
'author': author->{name, 'avatar': avatar.asset->url},
`;

export async function getAllNews() {
  const results = await client.fetch(`*[_type == "news"]{${newsFields}}`);
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
slug,
goal, 
minimum, 
shares, 
price,
blurb,
start,
tag1,
tag2,
close,
logo,
type,
'coverImage': coverImage.asset->url, 
`;

export async function getAllCompanies() {
  const results = await client.fetch(`*[_type == "company"]{${companyFields}}`);
  return results;
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
