import { getAllNews } from 'lib/api';
import Loading from 'components/Loading';
import { useGetNews } from 'actions';

function active(name) {
  const location = window.location.pathname;
  if (location == name) {
    return true;
  } else {
    return false;
  }
}

export default function Sidebar({ news: initialNews }) {
  const { data: news, newsError } = useGetNews(initialNews);
  if (!news) {
    return <Loading />;
  }

  return (
    <div className='sidebar'>
      <div className='sidebar-container'>
        <h1 className='sidebar-title'>MENU</h1>

        <div
          className={
            active('/dashboard') ? 'sidebar-group-active' : 'sidebar-group'
          }
        >
          <img
            alt='logo'
            className='sidebarLogo'
            src='https://avatars1.githubusercontent.com/u/9482724?s=460&u=69a6acab13fd5547a4e316e496b573271077147f&v=4'
          />
          <div
            className={
              active('/dashboard')
                ? 'sidebar-group-vert-active'
                : 'sidebar-group-vert'
            }
          >
            <div>
              <h3>Dashboard</h3>
            </div>
            <div>
              <h4>Snapshot of your account</h4>
            </div>
          </div>
        </div>

        <div
          className={
            active('/dashboard/identity')
              ? 'sidebar-group-active'
              : 'sidebar-group'
          }
        >
          <img
            alt='logo'
            className='sidebarLogo'
            src='https://avatars1.githubusercontent.com/u/9482724?s=460&u=69a6acab13fd5547a4e316e496b573271077147f&v=4'
          />
          <div
            className={
              active('/dashboard/identity')
                ? 'sidebar-group-vert-active'
                : 'sidebar-group-vert'
            }
          >
            <div>
              <h3>Portfolio</h3>
            </div>
            <div>
              <h4>List of past investments</h4>
            </div>
          </div>
        </div>

        <div
          className={
            active('/dashboard/vehicles')
              ? 'sidebar-group-active'
              : 'sidebar-group'
          }
        >
          <img
            alt='logo'
            className='sidebarLogo'
            src='https://avatars1.githubusercontent.com/u/9482724?s=460&u=69a6acab13fd5547a4e316e496b573271077147f&v=4'
          />
          <div
            className={
              active('/dashboard/vehicles')
                ? 'sidebar-group-vert-active'
                : 'sidebar-group-vert'
            }
          >
            {' '}
            <div>
              <h3>Investment vehicles</h3>
            </div>
            <div>
              <h4>Your trusts and companies</h4>
            </div>
          </div>
        </div>
      </div>

      <div className='sidebar-account-settings'>
        <h1 className='sidebar-title'>ACCOUNT SETTINGS</h1>
        <div
          className={
            active('/dashboard/profile')
              ? 'sidebar-account-active'
              : 'sidebar-account'
          }
        >
          <h4>Profile</h4>
        </div>
        <div
          className={
            active('/dashboard/login-details')
              ? 'sidebar-account-active'
              : 'sidebar-account'
          }
        >
          {' '}
          <h4>Login details</h4>
        </div>
        <div
          className={
            active('/dashboard/hin')
              ? 'sidebar-account-active'
              : 'sidebar-account'
          }
        >
          {' '}
          <h4>HIN settings</h4>
        </div>
        <div
          className={
            active('/dashboard/preferences')
              ? 'sidebar-account-active'
              : 'sidebar-account'
          }
        >
          {' '}
          <h4>Investment preferences</h4>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const news = await getAllNews();
  return {
    props: {
      news,
    },
  };
}
