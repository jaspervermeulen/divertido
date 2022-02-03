import { Form, Formik } from 'formik';
import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/outline';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Paragraph from '../components/paragraph/paragraph';
import { initialContact } from '../forms/initialValues';
import { ContactSchema } from '../forms/schemas';
import FormikInput from '../components/input/formikInput';
import FormikButton from '../components/button/formikButton';
import Layout from '../components/layout/layout';
import Heading from '../components/heading/heading';

import ProfileCard from '../components/profileCard/profileCard';
import SEO from '../components/seo/seo';

function Contact({ teamMembers }) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(values, { resetForm }) {
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((response) => {
      if (response.status === 200) {
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
            <Paragraph funky={false} size="medium">
              Team
            </Paragraph>
            <div className="mt-2 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {teamMembers.map((teamMember, id) => (
                <ProfileCard
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
          <div className="">
            <div className="w-full">
              <Paragraph funky={false} size="medium" className="mb-2">
                Stuur ons een berichtje
              </Paragraph>
              {submitted ? (
                <div className="flex items-center justify-center rounded-lg bg-blue p-6 font-fries text-xl text-white">
                  <CheckCircleIcon className="mb-1 h-5 w-5" />
                  <p className="ml-1.5">Jou berichtje is verzonden!</p>
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
                          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                              />
                            </div>
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
