import { useGetTestimonys } from 'actions';
import { getAllTestimonys } from 'lib/api';
import InvestCarourel from 'components/Invest/InvestCarousel';
import TestimonialCard from './TestimonyCard';

const Testimonials = ({
  testimonys: initalTestimonys,
  filter = ['retail'],
}) => {
  const { data: testimonys, testimonysError } =
    useGetTestimonys(initalTestimonys);

  if (!testimonys) {
    return 'loading';
  }

  let testifyies = [];
  let i = 0;
  for (i; i < testimonys.length; i++) {
    if (filter.includes(testimonys[i].company.type)) {
      testifyies.push(
        <TestimonialCard
          customer={testimonys[i].customer.name}
          avatar={testimonys[i].customer.avatar}
          company={`${testimonys[i].company.name}`}
          type={`${testimonys[i]['type']}`}
          testimony={`${testimonys[i]['testimony']}`}
        />
      );
    }
  }
  return (
    <div
      className='investment-home-container'
      style={{ position: 'relative', bottom: '80px' }}
    >
      <div
        style={{
          maxWidth: 1200,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 64,
        }}
      >
        <div className='invest-subtitle'>
          <h4>TESTIMONIALS</h4>
        </div>
        <InvestCarourel
          show={3}
          header='Meet some happy customers'
          filter={['company', 'investor']}
        >
          {testifyies}
        </InvestCarourel>
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
