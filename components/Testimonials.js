import { useGetTestimonys } from 'actions';
import { getAllTestimonys } from 'lib/api';
import InvestCarourel from 'components/Invest/InvestCarousel';
import TestimonialCard from './TestimonyCard';

const Testimonials = ({ testimonys: initalTestimonys }) => {
  const { data: testimonys, testimonysError } =
    useGetTestimonys(initalTestimonys);

  if (!testimonys) {
    return 'loading';
  }

  return (
    <div
      className='investment-home-container'
      style={{ position: 'relative', bottom: '80px' }}
    >
      <div>
        <div className='invest-subtitle'>
          <h4>TESTIMONIALS</h4>
          <h2>Meet some happy customers</h2>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1200,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 64,
        }}
      >
        <InvestCarourel show={3}>
          {testimonys.map(testimony => {
            return (
              <TestimonialCard
                customer={testimony.customer}
                company={testimony.company}
                type={testimony.type}
                testimony={testimony.testimony}
              />
            );
          })}{' '}
        </InvestCarourel>
        ;
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const testimonys = await getAllTestimonys();

  return {
    props: {
      testimonys,
    },
  };
}

export default Testimonials;
