import FadeInSection from 'components/FadeInSection';

export default function FadeIn({ title, blurb, subtitle, children }) {
  debugger;
  return (
    <div className='raise-process-container'>
      <div>
        <div className='raise-process-header'>
          <h4>{title}</h4>
          <h2>{subtitle}</h2>
          <p>{blurb}</p>
        </div>
        <FadeInSection className='fade-in-section'>
          <div className='raise-process-steps-container'>
            {children[0].map(child => {
              return (
                <div className='raise-process-steps'>
                  <h2>
                    {' '}
                    <img src={child.image} className='img-header' />
                    {child.title}
                  </h2>
                  <p>{child.content}</p>
                </div>
              );
            })}
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
