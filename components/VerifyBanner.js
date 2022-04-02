import Banner from './Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function VerifyBanner() {
  return (
    <Banner href={'/'}>
      <FontAwesomeIcon
        icon='triangle-exclamation'
        className='metrics-fontawesome'
      />
      <p>
        Before you invest with Equitise we require you to verify your identity
      </p>
    </Banner>
  );
}
