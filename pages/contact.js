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

import KidsLogo from '../assets/illustrations/together.svg';

function Contact({ teamMembers, camps }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sortedTeamMembers, setSortedTeamMembers] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      setDisabled(false);
    }
  }, [name, email, message]);

  useEffect(() => {
    setSortedTeamMembers(teamMembers.sort((a, b) => a.order - b.order));
  }, [teamMembers]);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const myForm = document.getElementById('contactForm');
    const formData = new FormData(myForm);
    // fetch('/', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   body: new URLSearchParams(formData).toString(),
    // })
    //   .then(() => {
    //     // eslint-disable-next-line no-console
    //     console.log('Form successfully submitted ✅');
    //     setLoading(false);
    //     setSubmitted(true);
    //   })
    //   .catch((error) => alert(error));
    // eslint-disable-next-line no-console
    console.log(new URLSearchParams(formData).toString());
    setSubmitted(true);
  }

  return (
    <>
      <SEO title="Contact" />
      <Header />
      <Layout>
        <Heading>Contact</Heading>
        <div className="flex flex-col gap-12">
          <div className="">
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
              <div className={`${loading ? null : 'hidden'}`}>
                <div className="flex items-center justify-center rounded-lg bg-blue p-6 font-fries text-xl text-white">
                  <RefreshIcon className="h-8 w-8 animate-spin" />
                </div>
              </div>
              <div className={`${loading ? 'hidden' : null}`}>
                {submitted ? (
                  <div className="flex items-center justify-center rounded-lg bg-blue p-6 font-fries text-xl text-white">
                    <CheckCircleIcon className="mb-1 h-5 w-5" />
                    <p className="ml-1.5">Het berichtje is verzonden!</p>
                  </div>
                ) : (
                  // <form
                  //   netlify
                  //   name="contact"
                  //   method="POST"
                  //   data-netlify="true"
                  //   onSubmit={(event) => handleSubmit(event)}
                  //   id="contactForm"
                  // >
                  //   <input type="hidden" name="form-name" value="contact" />
                  //   <div className="mb-4 mt-2 flex flex-col">
                  //     <label
                  //       className="font-sans text-lg font-medium"
                  //       htmlFor="name"
                  //     >
                  //       Name *
                  //     </label>
                  //     <input
                  //       className="w-full rounded-md border-2 border-blue px-3 font-sans"
                  //       type="text"
                  //       name="name"
                  //       id="name"
                  //       value={name}
                  //       onChange={(event) => setName(event.target.value)}
                  //     />
                  //   </div>
                  //   <div className="mb-4 mt-2 flex flex-col">
                  //     <label
                  //       className="font-sans text-lg font-medium"
                  //       htmlFor="email"
                  //     >
                  //       Email *
                  //     </label>
                  //     <input
                  //       className="w-full rounded-md border-2 border-blue px-3 font-sans"
                  //       type="email"
                  //       name="email"
                  //       id="email"
                  //       value={email}
                  //       onChange={(event) => setEmail(event.target.value)}
                  //     />
                  //   </div>
                  //   <div className="mb-4 mt-2 flex flex-col">
                  //     <label
                  //       className="font-sans text-lg font-medium"
                  //       htmlFor="message"
                  //     >
                  //       Berichtje *
                  //     </label>
                  //     <textarea
                  //       className="h-40 w-full rounded-md border-2 border-blue px-3 font-sans"
                  //       type="text"
                  //       name="message"
                  //       id="message"
                  //       value={message}
                  //       onChange={(event) => setMessage(event.target.value)}
                  //     />
                  //   </div>
                  //   <button
                  //     className="mt-8 w-full rounded bg-[#4692E6] px-5 pt-3.5 pb-3 text-base text-white outline-offset-4 transition-all hover:-translate-y-1 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:-translate-y-0 disabled:hover:shadow-none dark:bg-sky-800"
                  //     type="submit"
                  //     disabled={disabled}
                  //   >
                  //     Verstuur
                  //   </button>
                  // </form>
                  <div>ok</div>
                )}
                  <form
                    netlify
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={(event) => handleSubmit(event)}
                    id="contactForm"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="mb-4 mt-2 flex flex-col">
                      <label
                        className="font-sans text-lg font-medium"
                        htmlFor="name"
                      >
                        Name *
                      </label>
                      <input
                        className="w-full rounded-md border-2 border-blue px-3 font-sans"
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>
                    <div className="mb-4 mt-2 flex flex-col">
                      <label
                        className="font-sans text-lg font-medium"
                        htmlFor="email"
                      >
                        Email *
                      </label>
                      <input
                        className="w-full rounded-md border-2 border-blue px-3 font-sans"
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                    <div className="mb-4 mt-2 flex flex-col">
                      <label
                        className="font-sans text-lg font-medium"
                        htmlFor="message"
                      >
                        Berichtje *
                      </label>
                      <textarea
                        className="h-40 w-full rounded-md border-2 border-blue px-3 font-sans"
                        type="text"
                        name="message"
                        id="message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                      />
                    </div>
                    <button
                      className="mt-8 w-full rounded bg-[#4692E6] px-5 pt-3.5 pb-3 text-base text-white outline-offset-4 transition-all hover:-translate-y-1 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:-translate-y-0 disabled:hover:shadow-none dark:bg-sky-800"
                      type="submit"
                      disabled={disabled}
                    >
                      Verstuur
                    </button>
                  </form>
              </div>
            </div>
            <div className="mb-12 lg:mb-0 lg:w-1/2">
              <p className="mb-2 font-fries text-2xl">Divertido Kampen VZW</p>
              <div className="flex flex-col items-start gap-6 rounded-lg border-4 border-orange border-opacity-50 py-4 px-6 hover:border-blue sm:flex-row sm:items-center sm:gap-0">
                <div className="relative h-44 w-48">
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
