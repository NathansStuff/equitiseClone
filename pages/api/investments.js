import { getAllInvestments } from 'lib/api';

export default async function getCompanies(req, res) {
  const data = await getAllInvestments();
  res.status(200).json(data);
}
