import { urlFor } from 'lib/api';

const TestimonialCard = ({ customer, company, type, testimony }) => {
  return (
    <div>
      <div>
        <div><img src={urlFor(customer.avatar)} /></div>
        <div>
          <div>
            <h2>{customer.name}</h2>
          </div>
          <div>
            <h3>{company.name}</h3>
          </div>
          <div>{type == 'retail' ? 'RETAIL INVESTOR' : 'SUCCESSFUL RAISE'}</div>
        </div>
      </div>
      <div></div>

      <div></div>
    </div>
  );
};
export default TestimonialCard;
