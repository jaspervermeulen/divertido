import '../styles/globals.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '../components/modal/modal';

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="selection:bg-blue selection:text-white">
      <div className="flex h-10 w-full items-center justify-center bg-blue">
        <span className="mr-3 inline-flex h-3 w-3 animate-ping rounded-full bg-white opacity-75" />
        <p className="font-fries text-white">
          Het hele kamp in Sint-Kruis Brugge is uitverkocht!
        </p>
        <span className="ml-3 inline-flex h-3 w-3 animate-ping rounded-full bg-white opacity-75" />
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
