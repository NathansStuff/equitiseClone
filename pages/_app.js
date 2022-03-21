//Adds fortawesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faBorderAll, faList } from '@fortawesome/free-solid-svg-icons';
library.add(faList, faBorderAll);

import 'styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/dracula.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
