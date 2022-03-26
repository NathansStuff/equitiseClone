import TeamMemberCard from './TeamMemberCard';
export default function EachTeam({ team }) {
  return (
    <div className='team-ind-container'>
      <div className='team-title'>
        <h3>{team.subtitle}</h3>
        <h1>{team.title}</h1>
      </div>
      <div className='team-members-container'>
        {team.teamMember.map(teamMember => {
          return (
            <TeamMemberCard name={teamMember.name} pic={teamMember.avatar} blurb={teamMember.blurb} title={teamMember.title} />
          );
        })}
      </div>
    </div>
  );
}
