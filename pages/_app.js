// pages/_app.js
import '../styles/globals.css'; // Import the global styles here
import Layout from '../components/Layout'; // Import your Layout component
import { CartProvider } from '../context/cartContext'; // Import the CartProvider

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider> {/* Wrap the app with CartProvider */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
