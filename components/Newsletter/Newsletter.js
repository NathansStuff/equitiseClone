import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Newsletter = () => {
  return (
    <div className='newsletter-container'>
      <div className='newsletter'>
        <div>
          <h3 className='newsletter-title'>BE IN THE KNOW</h3>
        </div>
        <div>
          <p className='newsletter-subtitle'>Get dibs on the latest offers</p>
        </div>
        <div>
          <form className='newsletter-signup'>
            <input
              type='email'
              placeholder='Enter your email address'
              required
            ></input>
            <div className='newsletter-button'>
              <button type='submit'>
                <FontAwesomeIcon
                  icon='location-arrow'
                  className='newsletter-icon'
                />{' '}
              </button>
            </div>
          </form>
        </div>
        <div>
          <p className='newsletter-signup-text'>
            Join our newsletter to stay up to date on offers and news
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
