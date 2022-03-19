import Button from './Button';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <p>equitise</p>
      </div>
      <div className='navbar-right'>
        <Button text='View Deals' />
        <div className='initials'>
          <p>AB</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
