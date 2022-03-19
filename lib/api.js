import client from './sanity';

export async function getAllNews() {
  const results = await client.fetch(
    `*[_type == "news"]{title,  'slug': slug.current, 'coverImage': coverImage.asset->url, date}`
  );
  return results;
}
