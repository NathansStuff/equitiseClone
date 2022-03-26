import { urlFor } from 'lib/api';
export default function TeamMemberCard({ name, pic, blurb, title }) {
  return (
    <div className='team-member-container'>
      <img src={urlFor(pic)} />
      <div className='team-member-dets'>
        <h3>{name}</h3>
        <h5>{title}</h5>
        <p>{blurb}</p>
      </div>
    </div>
  );
}
