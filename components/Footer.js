import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <div>
      <footer className='page-footer'>
        <div className='footer-flex-col'>
          <div className='link-style'>
            <h2>
              <a href='#'>equitise</a>
            </h2>
          </div>
          <div className='link-style'>
            <p>
              NZBN: 99999999999999
              <br />
              ABN: 99999999999999
            </p>
          </div>
          <div className='link-style'>
            <p>
              Authorised and licensed by the Financial Markets Authority (FSP
              #000000) and ASIC (AFSL #000000).
            </p>
          </div>
        </div>

        <div className='footer-flex-col'>
          <div className='link-style'>
            <h2>
              <a href='#'>About</a>
            </h2>
          </div>
          <div className='link-style'>
            <p>
              <a href='#'>About Equitise</a>
            </p>
          </div>
          <div className='link-style'>
            <p>
              <a href='#'>Meet the Team</a>
            </p>
          </div>
          <div className='link-style'>
            <p>
              <a href='#'>Contact Us</a>
            </p>
          </div>
        </div>

        <div className='footer-flex-col'>
          <div className='link-style'>
            <h2>
              <a href='#'>Learn More</a>
            </h2>
          </div>
          <div className='link-style'>
            <p>
              <a href='#'>Equity Crowdfunds</a>
            </p>
          </div>
          <div className='link-style'>
            <p>
              <a href='#'>IPO</a>
            </p>
          </div>
          <div className='link-style'>
            <p>
              <a href='#'>Wholesale</a>
            </p>
          </div>
          <div className='link-style'>
            <p>
              <a href='#'>Blog</a>
            </p>
          </div>
          <div className='link-style'>
            <p>
              <a href='#'>Crowdfunding FAQ</a>
            </p>
          </div>
          <div className='link-style'>
            <p>
              <a href='#'>What is Crowdfunding</a>
            </p>
          </div>
          <div className='link-style'>
            <p>
              <a href='#'>How to Raise Capital</a>
            </p>
          </div>
        </div>

        <div className='footer-flex-col'>
          <div className='link-style'>
            <h2>
              <a href='#'>Legal</a>
            </h2>
          </div>
          <div className='link-style'>
            <p>
              <a href='#'>Investor Agreement</a>
            </p>
          </div>
          <div className='link-style'>
            <p>
              <a href='#'>Discolosure Statement</a>
            </p>
          </div>
          <div className='link-style'>
            <p>
              <a href='#'>Warning Statements</a>
            </p>
          </div>
          <div className='link-style'>
            <p>
              <a href='#'>Direct Debit</a>
            </p>
          </div>
          <div className='link-style'>
            <p>
              <a href='#'>Fair Dealing Policy</a>
            </p>
          </div>
          <div className='link-style'>
            <p>
              <a href='#'>Financial Services Guide</a>
            </p>
          </div>
        </div>

        <div className='footer-flex-col'>
          <div className='link-style'>
            <h2>
              <a href='#'>Connect With Us</a>
            </h2>
            <div>
              <div className='socials'>
                <div className='footer-socials'>
                  <p>
                    <SocialIcon
                      url='https://facebook.com/'
                      style={{ height: '30px', width: '30px' }}
                    />
                  </p>
                </div>
                <div className='footer-socials'>
                  <p>
                    <SocialIcon
                      url='https://twitter.com/'
                      style={{ height: '30px', width: '30px' }}
                    />
                  </p>
                </div>
                <div className='footer-socials'>
                  <p>
                    <SocialIcon
                      url='https://instagram.com/'
                      style={{ height: '30px', width: '30px' }}
                    />
                  </p>
                </div>
                <div className='footer-socials'>
                  <p>
                    <SocialIcon
                      url='https://linkedin.com/'
                      style={{ height: '30px', width: '30px' }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='link-style'>
            <h2>
              <a href='#'>Subscribe</a>
            </h2>
          </div>
          <div>
            <p>SIGN UP LINK</p>
          </div>
          <div className='link-style'>
            <p>Join our newsletter to stay up to date on offers and news</p>
          </div>
        </div>
      </footer>
      <div classname='divider page-footer'>
        <hr />
        <div className='footer-copyright'>
          <div className='link-style'>
            <p>2022 Copyright Pty Ltd. All rights reserved.</p>
          </div>
          <div className='footer-privacy'>
            <div className='link-style'>
              <p>Privacy Policy</p>
            </div>
            <div className='link-style'>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
