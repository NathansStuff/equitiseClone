import PageLayout from 'components/PageLayout';
import { getAllTeams } from 'lib/api';
import { useGetTeams } from 'actions';
import EachTeam from 'components/teams/EachTeam';
import Newsletter from 'components/Newsletter';
import Loading from 'components/Loading';
export default function Team({ teams: initialTeams }) {
  const { data: teams, teamsError } = useGetTeams(initialTeams);
  if (!teams) {
    return <Loading />;
  }
  return (
    <PageLayout
      title='The Team'
      subtitle='MEET THE TEAM'
      content='Nunc suscipit pulvinar leo.'
      style={{ padding: '40px 50px ' }}
    >
      {teams.map(team => {
        return (
          <div className='team-container'>
            <EachTeam team={team} />
          </div>
        );
      })}
      <Newsletter />
    </PageLayout>
  );
}
export async function getStaticProps() {
  const teams = await getAllTeams({ offset: 0 });

  return {
    props: {
      teams,
    },
  };
}
