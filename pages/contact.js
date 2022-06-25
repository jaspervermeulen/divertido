import { useEffect, useState } from 'react';
import {
  BriefcaseIcon,
  CheckCircleIcon,
  CreditCardIcon,
  MailIcon,
  PhoneIcon,
  RefreshIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Layout from '../components/layout/layout';
import Heading from '../components/heading/heading';

import ProfileCard from '../components/profileCard/profileCard';
import SEO from '../components/seo/seo';
import FormikInput from '../components/input/formikInput';
import KidsLogo from '../assets/illustrations/together.svg';
import FormikButton from '../components/button/formikButton';

function Contact({ teamMembers, camps }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sortedTeamMembers, setSortedTeamMembers] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setSortedTeamMembers(teamMembers.sort((a, b) => a.order - b.order));
  }, [teamMembers]);

  return (
    <>
      <SEO title="Contact" />
      <Header />
      <Layout>
        <Heading>Contact</Heading>
        <div className="flex flex-col gap-12">
          <div>
            <p className="font-fries text-2xl">Team</p>
            <div className="mt-2 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {sortedTeamMembers.map((teamMember, id) => (
                <ProfileCard
                  key={id}
                  index={id}
                  image={teamMember.img}
                  name={teamMember.name}
                  education={teamMember.opleiding}
                  qualification={teamMember.ervaring}
                  location={teamMember.adres}
                  phone={teamMember.gsm}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row lg:gap-6">
            <div className="lg:w-1/2">
              <p className="mb-2 font-fries text-2xl">
                Stuur ons een berichtje
              </p>
              {loading && (
                <div className="flex items-center justify-center rounded-lg bg-blue p-6 font-fries text-xl text-white">
                  <RefreshIcon className="h-8 w-8 animate-spin" />
                </div>
              )}
              <div className={`${loading ? 'hidden' : null}`}>
                {submitted ? (
                  <div className="flex items-center justify-center rounded-lg bg-blue p-6 font-fries text-xl text-white">
                    <CheckCircleIcon className="mb-1 h-5 w-5" />
                    <p className="ml-1.5">Het berichtje is verzonden!</p>
                  </div>
                ) : (
                  <div>
                    <form method="POST" data-netlify="true" name="contact">
                      <div>
                        <label
                          className="font-sans text-lg font-medium"
                          htmlFor="name"
                        >
                          Naam
                        </label>
                        <input
                          required
                          id="name"
                          value={name}
                          className="h-11 w-full rounded-md border-2 border-blue px-3 font-sans"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="mt-4">
                        <label
                          className="font-sans text-lg font-medium"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          required
                          id="email"
                          value={email}
                          className="h-11 w-full rounded-md border-2 border-blue px-3 font-sans"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mt-4">
                        <label
                          htmlFor="message"
                          className="font-sans text-lg font-medium"
                        >
                          Bericht
                        </label>
                        <textarea
                          required
                          id="message"
                          value={message}
                          className="h-48 w-full rounded-md border-2 border-blue px-3 font-sans"
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </div>
                      <button
                        className="mt-4 h-12 w-full rounded-md bg-blue font-fries text-white hover:opacity-60"
                        type="submit"
                      >
                        Verzend
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
            <div className="mb-12 lg:mb-0 lg:w-1/2">
              <p className="mb-2 font-fries text-2xl">Divertido Kampen VZW</p>
              <div className="flex flex-col items-start gap-6 rounded-lg border-4 border-orange border-opacity-50 py-4 px-6 hover:border-blue sm:flex-row sm:items-center sm:gap-0">
                <div className="relative h-44 w-48">
                  {/* <Image
                    src={TogetherLogo}
                    alt="Logo"
                    layout="fill"
                    placeholder="blur"
                  /> */}
                  <Image src={KidsLogo} layout="fill" />
                </div>

                <div className="sm:ml-4">
                  <p className="mb-2 font-fries text-2xl">Divertido Kampen</p>

                  <a
                    href="tel:0495307016"
                    className="mb-2 flex hover:opacity-60"
                  >
                    <PhoneIcon className="mt-0.5 h-5 w-5" />
                    <p className="ml-1.5">0495/307016</p>
                  </a>
                  <a
                    href="mailto:info@divertido-kampen.be"
                    className="mb-2 flex hover:opacity-60"
                  >
                    <MailIcon className="mt-0.5 h-5 w-5" />
                    <p className="ml-1.5">info@divertido-kampen.be</p>
                  </a>
                  <div className="mb-2 flex">
                    <CreditCardIcon className="mt-0.5 h-5 w-5" />
                    <p className="ml-1.5">BE76 7390 2107 7895</p>
                  </div>
                  <div className="mb-2 flex">
                    <BriefcaseIcon className="mt-0.5 h-5 w-5" />
                    <p className="ml-1.5">0759.859.594</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Footer campList={camps} />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[ _type == "team" ]`;
  const url = `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=${query}`;
  const team = await fetch(url).then((res) => res.json());

  const queryCamps = `*[ _type == "camp" ]{name}`;
  const campsUrl = `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=${queryCamps}`;
  const camps = await fetch(campsUrl).then((res) => res.json());

  return {
    props: { teamMembers: team.result, camps: camps.result },
  };
};

export default Contact;
