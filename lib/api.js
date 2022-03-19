import client from './sanity';
// title,  'slug': slug.current, 'coverImage': coverImage.asset->url, date
const newsFields = `
title,
date,
'slug': slug.current,
'coverImage': coverImage.asset->url,
`

export async function getAllNews() {
  const results = await client.fetch(
    `*[_type == "news"]{${newsFields}}`
  );
  return results;
}

export async function getNewsBySlug(slug) {
  const result = await client
    .fetch(
      `*[_type == "news" && slug.current == $slug]{${newsFields}}`,
      { slug }
    )
    .then(res => res?.[0]);

  return result;
}
