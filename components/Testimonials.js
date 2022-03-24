import { useGetTestimonys } from 'actions';
import { getAllTestimonys } from 'lib/api';

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
          <h4>METRICS</h4>
          <h2>{testimonys[0]['type']}</h2>
        </div>
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
