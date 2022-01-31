import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Button from '../button/button';

export default function Modal({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => closeModal()}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="font-fries text-4xl text-gray-900"
              >
                Nieuw kamp in Kortrijk/Roeselare !!!
              </Dialog.Title>
              <div className="mt-4">
                <p className="">
                  We hebben een nieuwe kamplocatie in Kortrijk/Roeselare, ontdek
                  de details op de detail pagina van het kamp op de pagina
                  Kampen!
                </p>
              </div>

              <div className="">
                <button
                  type="button"
                  onClick={() => closeModal()}
                  className="mt-8 h-12 w-full rounded-md bg-blue font-fries text-white hover:opacity-60"
                >
                  Sluit de melding
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
