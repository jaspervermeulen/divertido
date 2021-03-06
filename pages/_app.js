import '../styles/globals.css';
import PropTypes from 'prop-types';
import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL, { debug: true });

function MyApp({ Component, pageProps }) {
  return (
    <div className="selection:bg-blue selection:text-white">
      <div className="flex h-8 w-full items-center justify-center overflow-hidden bg-orange" />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
