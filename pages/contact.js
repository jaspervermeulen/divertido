import { Form, Formik } from 'formik';
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

function Contact({ teamMembers }) {
  const handleSubmit = () => {
    // eslint-disable-next-line no-console
    console.info('Submitted');
  };

  return (
    <>
      <Header />
      <Layout>
        <Heading>Contact</Heading>
        <div className="lg:grid lg:grid-cols-2 lg:gap-6">
          <div className="w-full">
            <Paragraph funky={false} size="medium" className="mb-2">
              Stuur ons een berichtje
            </Paragraph>
            <Formik
              initialValues={initialContact}
              validationSchema={ContactSchema}
              onSubmit={handleSubmit}
            >
              {(formik) => {
                const { errors, touched, isValid, dirty } = formik;
                return (
                  <div>
                    <Form>
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
                      <FormikButton
                        dirty={dirty}
                        isValid={isValid}
                        label="Verzend"
                        className="mt-4"
                      />
                    </Form>
                  </div>
                );
              }}
            </Formik>
          </div>
          <div className="">
            <Paragraph funky={false} size="medium">
              Team
            </Paragraph>
            <div className="flex flex-col-reverse">
              {teamMembers.map((teamMember, id) => (
                <ProfileCard
                  key={id}
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
