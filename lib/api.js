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
