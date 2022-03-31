import PageLayout from 'components/PageLayout';
import PageTitle from 'components/PageTitle';

export default function NewsFeed() {
  return (
    <PageLayout>
      <PageTitle
        title='Newsfeed'
        content='Read about the latest news'
        subtitle='Stay updated'
      />
      <div className='equity-faq-container'>
        <div className='newsfeed-faq-card'>
          <div className='newsfeed-container'>
            <div className='timeline'>
              <div className='newsitem-container newsitem-left'>
                <div className='newsitem-content'>
                  <div className='newsitem-date newsitem-date-left'>
                    <div className='newsitem-date-line newsitem-date-line-left'></div>{' '}
                    <h2>March 14th</h2>
                  </div>
                  <div className='newsitem-flex'>
                    <div className='newsitem'>
                      <img
                        src='https://images.prismic.io/equitise-v3/9a554681-93c7-46b4-9df6-8363b777ed5c_Bundlfresh.png?auto=compress%2Cformat'
                        className='newsitem-img'
                      />
                      <div className='newsitem-content'>
                        <h1>TAG</h1>
                        <h2>TITLE</h2>
                        <p>
                          Visit{' '}
                          <a href='https://learngitbranching.js.org/'>
                            this site
                          </a>{' '}
                          to learn about Git and become comfortable with basic
                          Git practices
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='newsitem-container newsitem-right'>
                <div className='newsitem-content'>
                  <div className='newsitem-date'>
                    <div className='newsitem-date-line newsitem-date-line-right'></div>{' '}
                    <h2>March 14th</h2>
                  </div>
                  <div className='newsitem'>
                    <img
                      src='https://images.prismic.io/equitise-v3/9a554681-93c7-46b4-9df6-8363b777ed5c_Bundlfresh.png?auto=compress%2Cformat'
                      className='newsitem-img'
                    />
                    <div className='newsitem-content'>
                      <h1>TAG</h1>
                      <h2>TITLE</h2>
                      <p>
                        Visit{' '}
                        <a href='https://learngitbranching.js.org/'>
                          this site
                        </a>{' '}
                        to learn about Git and become comfortable with basic Git
                        practices
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
