import { getAllAboutUsCard } from 'lib/api';

export default async function getAboutUsCard(req, res) {
  const data = await getAllAboutUsCard();
  res.status(200).json(data);
}
