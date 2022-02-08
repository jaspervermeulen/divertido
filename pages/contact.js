import { Form, Formik } from 'formik';
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
import { initialContact } from '../forms/initialValues';
import { ContactSchema } from '../forms/schemas';
import FormikInput from '../components/input/formikInput';
import FormikButton from '../components/button/formikButton';
import Layout from '../components/layout/layout';
import Heading from '../components/heading/heading';

import ProfileCard from '../components/profileCard/profileCard';
import SEO from '../components/seo/seo';

import TogetherLogo from '../assets/logo/Afbeelding.png';

function Contact({ teamMembers }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sortedTeamMembers, setSortedTeamMembers] = useState([]);

  useEffect(() => {
    setSortedTeamMembers(teamMembers.sort((a, b) => a.order - b.order));
  }, [teamMembers]);

  function onSubmit(values, { resetForm }) {
    setLoading(true);
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((response) => {
      if (response.status === 200) {
        setLoading(false);
        resetForm({});
        setSubmitted(true);
      }
    });
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
                  <Formik
                    initialValues={initialContact}
                    validationSchema={ContactSchema}
                    onSubmit={(values, { resetForm }) =>
                      onSubmit(values, { resetForm })
                    }
                  >
                    {(formik) => {
                      const { errors, touched, isValid, dirty } = formik;
                      return (
                        <div>
                          <Form>
                            <div>
                              <FormikInput
                                as="input"
                                errors={errors}
                                touched={touched}
                                name="name"
                                id="name"
                                type="text"
                                label="Naam *"
                                htmlFor="name"
                              />
                              <FormikInput
                                as="input"
                                errors={errors}
                                touched={touched}
                                name="email"
                                id="email"
                                type="email"
                                label="Email *"
                                htmlFor="email"
                                className="mt-4 w-full"
                              />
                              <FormikInput
                                as="input"
                                errors={errors}
                                touched={touched}
                                name="subject"
                                id="subject"
                                type="text"
                                label="Onderwerp *"
                                htmlFor="subject"
                                className="mt-4"
                              />
                            </div>
                            <div>
                              <FormikInput
                                as="textarea"
                                errors={errors}
                                touched={touched}
                                name="message"
                                id="message"
                                type="text"
                                label="Bericht *"
                                htmlFor="message"
                                className="mt-4"
                              />
                            </div>
                            <FormikButton
                              dirty={dirty}
                              isValid={isValid}
                              label="Verzend"
                              className="mt-6 bg-blue transition-all hover:-translate-y-1 hover:bg-blue-dark hover:shadow-xl"
                            />
                          </Form>
                        </div>
                      );
                    }}
                  </Formik>
                )}
              </div>
            </div>
            <div className="mb-12 lg:mb-0 lg:w-1/2">
              <p className="mb-2 font-fries text-2xl">Divertido Kampen VZW</p>
              <div className="flex flex-col items-start gap-6 rounded-lg border-4 border-orange border-opacity-50 py-4 px-6 hover:border-blue sm:flex-row sm:items-center sm:gap-0">
                <div className="relative h-44 w-48">
                  <Image
                    src={TogetherLogo}
                    alt="Logo"
                    layout="fill"
                    placeholder="blur"
                  />
                </div>

                <div className="sm:ml-4">
                  <p className="mb-2 font-fries text-2xl">Divertido Kampen</p>

                  <a
                    href="mailto:info@diverto-kampen.be"
                    className="mb-2 flex hover:opacity-60"
                  >
                    <PhoneIcon className="mt-0.5 h-5 w-5" />
                    <p className="ml-1.5">0495/307016</p>
                  </a>
                  <a
                    href="mailto:info@diverto-kampen.be"
                    className="mb-2 flex hover:opacity-60"
                  >
                    <MailIcon className="mt-0.5 h-5 w-5" />
                    <p className="ml-1.5">info@diverto-kampen.be</p>
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
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[ _type == "team" ]`;
  const url = `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=${query}`;
  const team = await fetch(url).then((res) => res.json());
  return {
    props: { teamMembers: team.result },
  };
};

export default Contact;
