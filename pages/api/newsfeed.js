import { getAllNewsfeed } from 'lib/api';

export default async function getNewsfeed(req, res) {
  const data = await getAllNewsfeed();
  res.status(200).json(data);
}
