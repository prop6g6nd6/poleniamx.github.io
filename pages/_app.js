// pages/_app.js
import '../styles/globals.css'; // Import the global styles here
import Layout from '../components/Layout'; // Import your Layout component
import { Provider } from 'react-redux'; // Import the Provider from react-redux
import store from '../store'; // Import your Redux store

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}> {/* Wrap the app with Provider to pass the Redux store */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
