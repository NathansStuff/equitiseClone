//Adds fortawesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faBorderAll, faChartLine, faHandshake, faHeart, faList, faLocationArrow, faMoneyBill1, faMoneyBill1Wave, faCircleCheck, faAddressBook, faCoins, faTriangleExclamation, faIdCard, faVault, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
library.add(faList, faBorderAll, faLocationArrow,faMoneyBill1, faHeart, faMoneyBill1Wave, faChartLine, faHandshake, faCircleCheck, faAddressBook, faCoins, faTriangleExclamation, faIdCard, faVault, faMoneyCheck);

import 'styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/dracula.css';
import 'react-circular-progressbar/dist/styles.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
