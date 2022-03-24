import { getAllTestimonys } from 'lib/api';

export default async function getTestimonys(req, res) {
  const data = await getAllTestimonys();
  res.status(200).json(data);
}
