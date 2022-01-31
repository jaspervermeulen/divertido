import { Form, Formik } from 'formik';
import Container from '../components/container/container';
import Footer from '../components/footer/footer';
import Header from '../components/header';
import Paragraph from '../components/paragraph/paragraph';
import TopBar from '../components/topBar/topBar';
import { initialContact } from '../forms/initialValues';
import { ContactSchema } from '../forms/schemas';
import FormikInput from '../components/input/formikInput';
import FormikButton from '../components/button/formikButton';

function Contact() {
  return (
    <>
      <Container>
        <Header />
        <div className="px-4 sm:px-8 xl:px-0">
          <TopBar>Contact</TopBar>
        </div>
        <div className="mb-20 px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-8 xl:px-0">
          <div className="mt-10 w-full">
            <Paragraph funky={false} size="medium" className="mb-2">
              Stuur ons een berichtje
            </Paragraph>
            <Formik
              initialValues={initialContact}
              validationSchema={ContactSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
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
          <div className="mt-10">
            <Paragraph funky={false} size="medium">
              Team
            </Paragraph>
            <div className="mt-4 flex flex-col-reverse">
              {/* {camps.map((camp, id) => {
                const image = images.find(
                  (item) => item._id === camp.image.asset._ref
                );
                return (
                  <ProfileCard
                    key={id}
                    image={image.url}
                    name={camp.name}
                    education={camp.education}
                    qualification={camp.experience}
                    location={camp.address}
                    phone={camp.phone}
                  />
                );
              })} */}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;