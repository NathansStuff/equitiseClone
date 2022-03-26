import { getAllTeams } from 'lib/api';

export default async function getTeams(req, res) {
  const data = await getAllTeams();
  res.status(200).json(data);
}
