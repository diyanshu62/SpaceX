import store from '../stores/store';
import {Provider} from 'react-redux';

import '../styles/globals.css'
import "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Component {...pageProps}/>
    </Provider>
  )
  
}

export default MyApp;
