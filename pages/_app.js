import '../styles/globals.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '../components/modal/modal';

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="selection:bg-blue selection:text-white">
      <div className="flex w-full items-center justify-center overflow-hidden bg-blue">
        <p className="px-6 py-3 text-center font-fries text-white">
          Nieuw kamp in Sint-Kruis Brugge vanaf dit jaar!!
        </p>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
