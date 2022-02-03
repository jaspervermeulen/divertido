import { Disclosure } from '@headlessui/react';
import { ArrowUpIcon } from '@heroicons/react/outline';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Heading from '../components/heading/heading';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';

function Info() {
  return (
    <>
      <SEO title="Info/Prijzen" />
      <Header />
      <Layout>
        <Heading>Info/Prijzen</Heading>
        <div className="flex flex-col-reverse gap-8 md:flex-row">
          <div className="mt-8 md:mt-0 md:w-2/5 lg:w-3/5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between border-b-4 border-dotted border-orange  px-4 py-2 text-left">
                    <span className="font-fries text-2xl">Voor wie?</span>
                    <div
                      className={`${
                        open ? '' : 'rotate-180 transform'
                      } h-5 w-5`}
                    >
                      <ArrowUpIcon className="h-5 w-5" />
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="flex flex-col items-start pt-4 pb-2 font-fries text-2xl lg:flex-row">
                    <p className="mr-8 font-sans text-xl font-medium lg:w-1/2">
                      Iedereen is welkom! De kinderen worden in groepen verdeeld
                      volgens leeftijd.
                    </p>
                    <div className="mt-4 flex justify-center lg:mt-0">
                      <div className="mr-6 flex flex-col items-center">
                        <p>Mini</p>
                        <ul className="flex flex-col items-center font-sans">
                          <li>2016</li>
                          <li>2017</li>
                          <li>2018</li>
                        </ul>
                      </div>
                      <div className="mr-6 flex flex-col items-center">
                        <p>Midi</p>
                        <ul className="flex flex-col items-center font-sans">
                          <li>2013</li>
                          <li>2014</li>
                          <li>2015</li>
                        </ul>
                      </div>
                      <div className="flex flex-col items-center">
                        <p>Maxi</p>
                        <ul className="flex flex-col items-center font-sans">
                          <li>2010</li>
                          <li>2011</li>
                          <li>2012</li>
                        </ul>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-6">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between border-b-4 border-dotted border-orange px-4 py-2 text-left">
                    <span className="font-fries text-2xl">
                      Wat neem ik mee?
                    </span>
                    <div
                      className={`${
                        open ? '' : 'rotate-180 transform'
                      } h-5 w-5`}
                    >
                      <ArrowUpIcon className="h-5 w-5" />
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className=" pt-4 pb-2 font-fries text-2xl">
                    <ul className="ml-6 list-disc font-sans text-xl font-medium">
                      <li>Drankje en versnapering</li>
                      <li className="mt-1">Ongevallenverzekering</li>
                      <li className="mt-1">Alle activiteiten en materiaal</li>
                      <li className="mt-1">Pedagogisch geschoolde monitoren</li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-6">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between border-b-4 border-dotted border-orange px-4 py-2 text-left">
                    <span className="font-fries text-2xl">Uurregeling</span>
                    <div
                      className={`${
                        open ? '' : 'rotate-180 transform'
                      } h-5 w-5`}
                    >
                      <ArrowUpIcon className="h-5 w-5" />
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className=" pt-4 pb-2 font-fries text-2xl">
                    <ul>
                      <li className="flex">
                        <p className="font-sans text-xl font-medium">Kamp:</p>
                        <p className="ml-2 text-4xl">9u tot 16u</p>
                      </li>
                      <li className="mt-2 flex">
                        <p className="font-sans text-xl font-medium">Opvang:</p>
                        <p className="ml-2 text-4xl">8u tot 17u (GRATIS)</p>
                      </li>
                    </ul>
                    <p className="mt-4 font-sans text-xl font-medium">
                      Geen opvang op de laatste dag van het kamp!
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-6">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between border-b-4 border-dotted border-orange px-4 py-2 text-left">
                    <span className="font-fries text-2xl">
                      Interessant om te weten
                    </span>
                    <div
                      className={`${
                        open ? '' : 'rotate-180 transform'
                      } h-5 w-5`}
                    >
                      <ArrowUpIcon className="h-5 w-5" />
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className=" pt-4 pb-2 font-fries text-2xl">
                    <ul className="ml-6 list-disc font-sans text-xl font-medium">
                      <li>
                        Geef ons een attest voor uw mutualiteit. Wij vullen dit
                        met veel plezier in.
                      </li>
                      <li className="mt-1">
                        De kosten van het kamp zijn fiscaal aftrekbaar. Wij
                        brengen dit in orde op aanvraag.
                      </li>
                      <li className="mt-1">
                        Kennen jullie het bestaan van Sport-Axibonnen? Dit is
                        een betaalmiddel dat personen met een verhoogde
                        tegemoetkoming krijgen, van de Stad Brugge, om
                        sportkampen te betalen. Klik op deze link voor meer
                        info.
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="rounded-md border-8 border-blue p-8 font-fries md:w-3/5 lg:w-2/5">
            <div>
              <p className="text-5xl underline decoration-orange decoration-dotted decoration-4 underline-offset-8">
                Prijs
              </p>
              <div className="my-6">
                <ul>
                  <li className="flex flex-wrap">
                    <p className="font-sans text-xl font-medium">
                      Basisprijs 5-dagenweek:
                    </p>
                    <p className="ml-2 text-4xl">110€</p>
                  </li>
                  <li className="mt-2 flex flex-wrap">
                    <p className="font-sans text-xl font-medium">
                      basisprijs 4-dagenweek:
                    </p>
                    <p className="ml-2 text-4xl">90€</p>
                  </li>
                  <li className="mt-2 flex flex-wrap">
                    <p className="font-sans text-xl font-medium">Opvang:</p>
                    <p className="ml-2 text-4xl">
                      Gratis <span className="text-base">(Voor en na)</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-8">
              <p className="text-3xl underline decoration-orange decoration-dotted decoration-4 underline-offset-8">
                Inbegrepen in de prijs
              </p>
              <ul className="mt-4 ml-6 list-disc font-sans text-xl font-medium">
                <li>Drankje en versnapering</li>
                <li className="mt-1">Ongevallenverzekering</li>
                <li className="mt-1">Alle activiteiten en materiaal</li>
                <li className="mt-1">Pedagogisch geschoolde monitoren</li>
              </ul>
            </div>

            <div className="my-6">
              <p className="text-3xl underline decoration-orange decoration-dotted decoration-4 underline-offset-8">
                Kortingen{' '}
                <span className="text-xl">(Max 1 korting per kind)</span>
              </p>
              <ul className="mt-4">
                <li className="flex">
                  <p className="font-sans text-xl font-medium">
                    vanaf 2de kampweek:
                  </p>
                  <p className="ml-2 text-4xl">-10€</p>
                </li>
                <li className="flex">
                  <p className="font-sans text-xl font-medium">
                    Vanaf 2de kind:
                  </p>
                  <p className="ml-2 text-4xl">-10€</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>

      <Footer />
    </>
  );
}

export default Info;
