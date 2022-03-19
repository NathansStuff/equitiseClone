const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div>
        <h1 className='sidebar-title'>MENU</h1>

        <div className='sidebar-group-active'>
          <img
            alt='logo'
            className='sidebarLogo'
            src='https://avatars1.githubusercontent.com/u/9482724?s=460&u=69a6acab13fd5547a4e316e496b573271077147f&v=4'
          />
          <div className='sidebar-group-vert-active'>
            <div>
              <h3>Dashboard</h3>
            </div>
            <div>
              <h4>Snapshot of your account</h4>
            </div>
          </div>
        </div>

        <div className='sidebar-group'>
          <img
            alt='logo'
            className='sidebarLogo'
            src='https://avatars1.githubusercontent.com/u/9482724?s=460&u=69a6acab13fd5547a4e316e496b573271077147f&v=4'
          />
          <div className='sidebar-group-vert'>
            <div>
              <h3>Portfolio</h3>
            </div>
            <div>
              <h4>List of past investments</h4>
            </div>
          </div>
        </div>

        <div className='sidebar-group'>
          <img
            alt='logo'
            className='sidebarLogo'
            src='https://avatars1.githubusercontent.com/u/9482724?s=460&u=69a6acab13fd5547a4e316e496b573271077147f&v=4'
          />
          <div className='sidebar-group-vert'>
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
        <div className='sidebar-account-active'>
          <h4>Profile</h4>
        </div>
        <div className='sidebar-account'>
          <h4 >Login details</h4>
        </div>
        <div className='sidebar-account'>
          <h4 >HIN settings</h4>
        </div>
        <div className='sidebar-account'>
          <h4 >Investment preferences</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
