import { getAllCompanies } from 'lib/api';

export default async function getCompanies(req, res) {
  const data = await getAllCompanies();
  res.status(200).json(data);
}
