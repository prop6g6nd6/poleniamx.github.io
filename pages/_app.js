// pages/_app.js
import '../styles/globals.css'; // Import the global styles here
import Layout from '../components/Layout'; // Import your Layout component

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
