import Button from './Button';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <h1>equitise</h1>
      </div>
      <Button text='View Deals' />

      <div className='initials'>
        <p>AB</p>
      </div>
    </div>
  );
};

export default Navbar;
