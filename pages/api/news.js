import { getAllNews } from 'lib/api';

export default async function getBlogs(req, res) {
  const data = await getAllNews();
  res.status(200).json(data);
}
