import '../styles/globals.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '../components/modal/modal';

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
