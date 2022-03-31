import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';

export default function Newsletter() {
  const [newsletterViewPortEntered, setNewsletterViewPortEntered] =
    useState(false);

  return (
    <div className='newsletter-container'>
      {' '}
      <VisibilitySensor
        active={!newsletterViewPortEntered}
        onChange={isVisible => {
          if (isVisible) {
            setNewsletterViewPortEntered(true);
          }
        }}
      >
        <div>
          {' '}
          <div
            className={
              newsletterViewPortEntered
                ? 'newsletter-spacer'
                : ''
            }
          />
          <div className={newsletterViewPortEntered ? 'newsletter' : 'newsletter bg'}>
            <div>
              <h3 className='newsletter-title'>BE IN THE KNOW</h3>
            </div>
            <div>
              <p className='newsletter-subtitle'>
                Get dibs on the latest offers
              </p>
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
      </VisibilitySensor>
    </div>
  );
}
