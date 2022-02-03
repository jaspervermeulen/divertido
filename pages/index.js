/* eslint-disable no-param-reassign */
import Image from 'next/image';
import Link from 'next/link';
import {
  UserGroupIcon,
  AcademicCapIcon,
  BadgeCheckIcon,
} from '@heroicons/react/outline';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import Image1 from '../assets/images/1.png';
import Image2 from '../assets/images/2.png';
import Image3 from '../assets/images/3.png';
import Image4 from '../assets/images/4.png';
import { games } from '../data/games';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';
import CampCard from '../components/cards/campCard';

function Home({ camps }) {
  return (
    <>
      <SEO title="Home" />
      <Header />
      <div className="py-16">
        <Layout>
          <div className="flex flex-col items-center justify-center">
            <p className="text-center font-fries text-3xl sm:w-2/3 lg:text-5xl">
              Op zoek naar een funtastisch kamp in{' '}
              <Link href="/">
                <a className="text-blue transition-all hover:text-orange">
                  Zeebrugge
                </a>
              </Link>
              ,{' '}
              <Link href="/">
                <a className="text-blue transition-all hover:text-orange">
                  Dudzele
                </a>
              </Link>{' '}
              of{' '}
              <Link href="/">
                <a className="text-blue hover:text-orange">Sint-Kruis Brugge</a>
              </Link>
              ?
            </p>
          </div>
        </Layout>

        <div className="mt-8 flex justify-center">
          <div className="flex snap-x gap-4 overflow-x-scroll">
            <div className="snap-center">
              <Image
                src={Image1}
                alt="Image"
                width={268}
                height={268}
                layout="fixed"
              />
            </div>
            <div className="snap-center">
              <Image
                src={Image2}
                alt="Image"
                width={268}
                height={268}
                layout="fixed"
              />
            </div>
            <div className="snap-center">
              <Image
                src={Image3}
                alt="Image"
                width={268}
                height={268}
                layout="fixed"
              />
            </div>
            <div className="snap-center">
              <Image
                src={Image4}
                alt="Image"
                width={268}
                height={268}
                layout="fixed"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center px-4 sm:px-8 xl:px-0">
          <ul className="flex flex-wrap justify-center gap-2 font-fries text-white">
            {games.map((game, id) => (
              <li
                key={id}
                className="rounded-full bg-orange p-2 hover:rotate-2 hover:scale-110"
              >
                {game}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-blue py-20">
        <Layout>
          <div className="text-white">
            <div className="flex justify-center font-fries text-4xl">
              <p>Ontdek onze kampen</p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {camps.map((camp, index) => (
                // <div
                //   key={index}
                //   className="rounded-lg border-8 border-white p-6"
                // >
                //   {/* <Image src={camp.image} alt="Zeebrugge" layout="responsive" /> */}
                //   <p className="font-fries text-2xl">{camp.name}</p>
                //   <p>{camp.description}</p>
                //   <Link href={`/camps/${stringToSlug(camp.name)}`}>
                //     <a className="text-fries mt-6 flex items-center justify-center rounded-sm bg-white py-3 font-fries text-xl text-blue transition-all hover:-translate-y-1 hover:shadow-xl">
                //       Ontdek dit kamp
                //     </a>
                //   </Link>
                // </div>
                <CampCard
                  index={index}
                  name={camp.name}
                  description={camp.description}
                  image={camp.cover}
                  accentColor
                />
              ))}
            </div>
          </div>
        </Layout>
      </div>
      <Layout>
        <div className="mb-6 flex justify-center pt-20 font-fries text-5xl">
          <p>Onze visie</p>
        </div>
        <div className="hidden md:inline">
          <div className="mb-4 flex justify-center">
            <div className="flex">
              <div className="flex flex-col items-center px-5 md:w-[250px] lg:w-[300px]">
                <UserGroupIcon className="h-9 w-9" />
                <p className="mt-2 text-center font-fries text-xl">
                  Diversiteit
                </p>
              </div>
              <div className="flex flex-col items-center px-5 md:w-[250px] lg:w-[300px]">
                <AcademicCapIcon className="h-9 w-9" />
                <p className="mt-2 text-center font-fries text-xl">
                  Pedagogisch
                  <br />
                  geschoolde monitoren
                </p>
              </div>
              <div className="flex flex-col items-center px-5 md:w-[250px] lg:w-[300px]">
                <BadgeCheckIcon className="h-9 w-9" />
                <p className="mt-2 text-center font-fries text-xl">
                  Waarden staan
                  <br />
                  centraal
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="md:flex">
            <div className="flex w-full flex-col items-center px-5 md:w-[250px] lg:w-[300px]">
              <div className="flex w-[300px] flex-col items-center px-5 pt-4 pb-2 md:hidden">
                <UserGroupIcon className="h-9 w-9" />
                <p className="mt-2 text-center font-fries text-xl">
                  Diversiteit
                </p>
              </div>
              <p className="text-justify leading-relaxed">
                Divertido kampen staat garant voor een vakantieaanbod waarbij de
                kinderen centraal staan. Tijdens onze boeiende activiteiten
                vertrekken we steeds vanuit de belevingswereld van de kinderen
                en jongeren. Deze insteek zorgt ervoor dat we inspelen op de
                interesses, noden en context van iedereen. Ieder individu wordt
                hier geprikkeld en uitgedaagd. Voor Divertido kampen is elk kind
                van tel. We zorgen ervoor dat iedereen de kans heeft om zijn
                eigen persoon ten volle te ontwikkelen en iedereen verbinding
                kan vinden. Groepverbindende activiteiten zijn dan ook de norm.
              </p>
            </div>
            <div className="flex w-full flex-col items-center px-5 md:w-[250px] lg:w-[300px]">
              <div className="flex w-[300px] flex-col items-center px-5 pt-12 pb-2 md:hidden">
                <AcademicCapIcon className="h-9 w-9" />
                <p className="mt-2 text-center font-fries text-xl">
                  Pedagogisch
                  <br />
                  geschoolde monitoren
                </p>
              </div>
              <p className="text-justify leading-relaxed">
                Vanuit beroepservaring of door praktijkervaring zet Divertido
                kampen in op pedagogisch onderbouwde monitoren. De monitoren
                wakkeren de talenten en de motivatie van elk kind aan. Door hun
                enthousiasme, kennis, ervaring, begeestering en betrokkenheid
                zijn ze in staat elk kind ten volle tot ontplooiing te brengen.
              </p>
            </div>
            <div className="flex flex-col items-center px-5 md:w-[250px] lg:w-[300px]">
              <div className="flex w-[300px] flex-col items-center px-5 pt-12 pb-2 md:hidden">
                <BadgeCheckIcon className="h-9 w-9" />
                <p className="mt-2 text-center font-fries text-xl">
                  Waarden staan
                  <br />
                  centraal
                </p>
              </div>
              <p className="text-justify leading-relaxed">
                Bij Divertido kampen voelt iedereen zich welkom en thuis.
                Basiswaarden als vertrouwen, eerlijkheid, zorgzaamheid en
                respect staan bij Divertido kampen centraal. Wanneer deze
                waarden ten volle nageleefd worden creëer je een basis voor
                sterke vriendschappen en relaties. We zetten in op een gezonde
                levensstijl waarbij lichaam en geest als een uitdagende eenheid
                wordt gezien. Creativiteit, avontuur, kwaliteit, plezier,
                uitdagend spel, leergierigheid en ruimdenkendheid kun je zien
                als de kenmerken van Divertido kampen.
              </p>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[ _type == "camp" ]`;
  const url = `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=${query}`;
  const camps = await fetch(url).then((res) => res.json());
  return {
    props: { camps: camps.result },
  };
};

export default Home;
