import { MailIcon, PaperClipIcon } from '@heroicons/react/outline';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Heading from '../components/heading/heading';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';

// const grade = [
//   { value: '', text: 'Kies een optie', default: true },
//   { value: '1e kleuter', text: '1e kleuter' },
//   { value: '2e kleuter', text: '2e kleuter' },
//   { value: '3e kleuter', text: '3e kleuter' },
//   { value: '1e leerjaar', text: '1e leerjaar' },
//   { value: '2e leerjaar', text: '2e leerjaar' },
//   { value: '3e leerjaar', text: '3e leerjaar' },
//   { value: '4e leerjaar', text: '4e leerjaar' },
//   { value: '5e leerjaar', text: '5e leerjaar' },
//   { value: '6e leerjaar', text: '6e leerjaar' },
// ];

// const gender = [
//   { value: '', text: 'Kies een optie', default: true },
//   { value: 'Jongen', text: 'Jongen' },
//   { value: 'Meisje', text: 'Meisje' },
// ];

function Register({ camps }) {
  // const router = useRouter();

  // const [campOptions, setCampOptions] = useState([]);
  // const [selectedCamp, setSelectedCamp] = useState();

  // const [userCamps, setUserCamps] = useState([]);
  // const [campRequired, setCampRequired] = useState('');

  // const [gdprImages, setGdprImages] = useState(false);
  // const [gdprData, setGdpaData] = useState(false);
  // const [gdprDataRequired, setGdprRequired] = useState('');

  // const [submitted, setSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setCampOptions([]);
  //   camps.forEach((camp) =>
  //     // eslint-disable-next-line no-shadow
  //     setCampOptions((campOptions) => [...campOptions, camp.name])
  //   );
  // }, [camps]);

  // useEffect(() => {
  //   setCampRequired('');
  // }, [userCamps]);

  // function handleCheckbox(e) {
  //   if (userCamps.includes(e.target.value)) {
  //     setUserCamps(userCamps.filter((camp) => camp !== e.target.value));
  //   } else {
  //     // eslint-disable-next-line no-shadow
  //     setUserCamps((userCamps) => [...userCamps, e.target.value]);
  //   }
  // }

  // function onSubmit(values, { resetForm }) {
  //   if (userCamps.length === 0) {
  //     setCampRequired('Gelieve minstens 1 kamp te kiezen');
  //     return;
  //   }

  //   if (!gdprData) {
  //     setGdprRequired('Dit veld is verplicht.');
  //     return;
  //   }

  //   setLoading(true);

  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });

  //   if (values.parentAdres2 === '') {
  //     values.parentAdres2 = '/';
  //   }

  //   if (values.notes === '') {
  //     values.notes = '/';
  //   }

  //   values.gdprImages = gdprImages ? 'Akkoord' : 'Niet akkoord';
  //   values.gdprData = gdprData ? 'Akkoord' : 'Niet akkoord';
  //   values.selectedCamps = userCamps;
  //   values.participantFullName = `${values.participantFirstname} ${values.participantLastname}`;
  //   values.parentFullName = `${values.parentFirstname} ${values.parentLastname}`;

  //   fetch('/api/register', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(values),
  //   }).then((response) => {
  //     setLoading(false);
  //     resetForm({});
  //     setSubmitted(true);
  //   });
  // }

  return (
    <>
      <SEO title="Inschrijven" />
      <Header />
      <Layout>
        <Heading>Inschrijven</Heading>
        <div className="gap-8 lg:flex">
          <div className="lg:w-1/3">
            <div className="h-full">
              <div className="sticky top-20">
                <div className="rounded-md border-8 border-orange p-4">
                  <p className="font-fries text-2xl">
                    !! Schrijf snel in. Plaatsen zijn beperkt !!
                  </p>
                  <p className="font-sans text-lg">
                    Vul alle gegevens correct in en druk op verzend. Jullie
                    ontvangen nadien een email terug van ons met alle gegevens
                    om het inschrijvingsgeld te betalen.{' '}
                    <span className="underline">
                      Pas na betaling is de inschrijving definitief!
                    </span>
                  </p>
                  <p className="mt-2 font-sans text-lg">
                    Ook de medische fiche is een verplichting om in te vullen.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 font-sans text-lg font-medium lg:mt-0 lg:w-2/3">
            {/* <div className={`${loading ? null : 'hidden'}`}>
              <div className="flex items-center justify-center rounded-lg bg-blue p-6 font-fries text-xl text-white">
                <RefreshIcon className="h-8 w-8 animate-spin" />
              </div>
            </div> */}
            <div>
              <p>
                We zijn momenteel eventjes aan het werken aan het online
                inschrijvingsformulier. Je kunt je wel nog altijd inschrijven
                via mail.
              </p>
              <p>
                Inschrijven doe je door een mailtje te sturen naar
                info@divertido-kampen.be met volgende gegevens.
              </p>
              <a href="mailto:info@divertido-kampen.be">
                <div className="my-6 flex h-16 w-full items-center justify-center rounded bg-blue">
                  <MailIcon className="h-8 w-8 text-white" />
                </div>
              </a>
              <p className="mt-6">1. Gegevens deelnemer</p>
              <ul className="list-inside list-disc">
                <li>Naam Deelnemer</li>
                <li>Geboortedatum</li>
                <li>Leerjaar</li>
                <li>Geslacht</li>
              </ul>
              <p className="mt-6">2. Gegevens ouder/voogd</p>
              <ul className="list-inside list-disc">
                <li>Naam ouder/voogd</li>
                <li>Emailadres ouder/voogd</li>
                <li>Gsm nummer ouder/voogd</li>
                <li>Adres</li>
              </ul>
              <p className="mt-6">3. Extra info of opmerkingen</p>
              <p className="mt-6">4. Het gekozen kamp of kampen</p>
              <p className="mt-6">
                5. Medische fiche (ingevuld meebrengen naar kamp)
              </p>
              <div className="mt-3 flex w-fit items-center rounded-md bg-orange font-fries text-white transition-all hover:-translate-y-1 hover:bg-orange-dark hover:shadow-xl">
                <a
                  href="/files/Medische-fiche.pdf"
                  alt="alt text"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="align-center mt-1 flex px-4 py-2 "
                >
                  <PaperClipIcon className="mt-0.5 h-5 w-5" />
                  <p className="ml-0.5 text-xl">Download Medische Fiche</p>
                </a>
              </div>
              <p className="mt-6">6. Indien u akkoord gaat met gdpr regels</p>
              <ul className="list-inside list-disc">
                <li>
                  Ik ga ermee akkoord dat mijn gegevens gebruikt en opgeslagen
                  worden voor de algemene administratie.
                </li>
                <li>
                  Ik ga ermee akkoord dat er foto’s genomen worden en deze op
                  sociale media geplaatst worden.
                </li>
              </ul>
              <a href="mailto:info@divertido-kampen.be">
                <div className="mt-12 flex h-16 w-full items-center justify-center rounded bg-blue">
                  <MailIcon className="h-8 w-8 text-white" />
                </div>
              </a>
            </div>
            {/* <div className={`${loading ? 'hidden' : null}`}>
              {submitted ? (
                <div className="relative flex items-center justify-center rounded-lg bg-blue p-6 font-fries text-xl text-white">
                  <CheckCircleIcon className="mb-1 h-5 w-5" />
                  <p className="ml-1.5">Inschrijving verstuurd!</p>
                  <button
                    type="button"
                    className="absolute top-1/2 right-8 -translate-y-1/2"
                    onClick={() => router.reload('/register')}
                  >
                    <p className="p-2">X</p>
                  </button>
                </div>
              ) : (
                <Formik
                  initialValues={initialRegister}
                  validationSchema={RegisterSchema}
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
                            <p className="font-fries text-2xl">
                              Gegevens Deelnemer
                            </p>
                            <div className="mt-4 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5">
                              <FormikInput
                                as="input"
                                errors={errors}
                                touched={touched}
                                name="participantFirstname"
                                id="participantFirstname"
                                type="text"
                                label="Voornaam Deelnemer *"
                                htmlFor="participantFirstname"
                              />
                              <FormikInput
                                as="input"
                                errors={errors}
                                touched={touched}
                                name="participantLastname"
                                id="participantLastname"
                                type="text"
                                label="Achternaam Deelnemer *"
                                htmlFor="participantLastname"
                              />
                              <FormikInput
                                as="input"
                                errors={errors}
                                touched={touched}
                                name="participantBirthData"
                                id="participantBirthData"
                                type="date"
                                label="Geboortedatum (DD/MM/JJ) *"
                                htmlFor="participantBirthData"
                              />
                              <FormikInput
                                as="select"
                                errors={errors}
                                touched={touched}
                                name="participantGrade"
                                id="participantGrade"
                                type="date"
                                label="Leerjaar (Schooljaar 2021-2022) *"
                                htmlFor="participantGrade"
                                options={grade}
                                defaultText="Kies optie"
                              />
                              <FormikInput
                                as="select"
                                errors={errors}
                                touched={touched}
                                name="participantSex"
                                id="participantSex"
                                type="date"
                                label="Geslacht *"
                                htmlFor="participantSex"
                                options={gender}
                                defaultText="Kies optie"
                              />
                            </div>
                          </div>
                          <div className="mt-12">
                            <p className="font-fries text-2xl">
                              Gegevens Ouder/Voogd
                            </p>
                            <div className="mt-4 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5">
                              <FormikInput
                                as="input"
                                errors={errors}
                                touched={touched}
                                name="parentFirstname"
                                id="parentFirstname"
                                type="text"
                                label="Voornaam Ouder/voogd *"
                                htmlFor="parentFirstname"
                              />
                              <FormikInput
                                as="input"
                                errors={errors}
                                touched={touched}
                                name="parentLastname"
                                id="parentLastname"
                                type="text"
                                label="Achternaam Ouder/voogd *"
                                htmlFor="parentLastname"
                              />
                              <FormikInput
                                as="input"
                                errors={errors}
                                touched={touched}
                                name="parentEmail"
                                id="parentEmail"
                                type="email"
                                label="Email-adres Ouder/voogd *"
                                htmlFor="parentEmail"
                              />
                              <FormikInput
                                as="input"
                                errors={errors}
                                touched={touched}
                                name="parentPhone"
                                id="parentPhone"
                                type="text"
                                label="Gsm Nummer Ouder/voogd *"
                                htmlFor="parentPhone"
                              />

                              <div className="col-span-2">
                                <FormikInput
                                  as="input"
                                  errors={errors}
                                  touched={touched}
                                  name="parentAdres1"
                                  id="parentAdres1"
                                  type="text"
                                  label="Adresregel 1 *"
                                  htmlFor="parentAdres1"
                                />
                              </div>
                              <div className="col-span-2">
                                <FormikInput
                                  as="input"
                                  errors={errors}
                                  touched={touched}
                                  name="parentAdres2"
                                  id="parentAdres2"
                                  type="text"
                                  label="Adresregel 2 (optioneel)"
                                  htmlFor="parentAdres2"
                                />
                              </div>
                              <FormikInput
                                as="input"
                                errors={errors}
                                touched={touched}
                                name="parentPostalCode"
                                id="parentPostalCode"
                                type="text"
                                label="Postcode *"
                                htmlFor="parentPostalCode"
                              />
                              <FormikInput
                                as="input"
                                errors={errors}
                                touched={touched}
                                name="parentPlace"
                                id="parentPlace"
                                type="text"
                                label="Woonplaats *"
                                htmlFor="parentPlace"
                              />
                            </div>
                          </div>
                          <div className="mt-12">
                            <p className="font-fries text-2xl">
                              Extra info/opmerkingen
                            </p>
                            <div className="mt-4 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5">
                              <div className="col-span-2">
                                <FormikInput
                                  as="textarea"
                                  errors={errors}
                                  touched={touched}
                                  name="notes"
                                  id="notes"
                                  type="text"
                                  label="Opmerkingen die we moeten weten (optioneel)"
                                  htmlFor="notes"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-12">
                            <p className="font-fries text-2xl">Kamp</p>
                            <p className="font-sans text-red">{campRequired}</p>
                            <div className="mt-4 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5">
                              <label>
                                <p className="font-sans text-lg font-medium">
                                  Locatie *
                                </p>
                                <select
                                  name="locatie"
                                  id="locatie"
                                  className="h-11 w-full cursor-pointer appearance-none rounded-md border-2 border-blue bg-white px-3 font-sans"
                                  onChange={(e) =>
                                    setSelectedCamp(e.target.value)
                                  }
                                >
                                  <option defaultValue disabled selected>
                                    Kies je kamplocatie
                                  </option>
                                  {campOptions.map((option, id) => (
                                    <option key={id} id={id} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </label>
                              <div>
                                <p className="font-sans text-lg font-medium">
                                  Kamp * (meerdere mogelijk)
                                </p>

                                {!selectedCamp && (
                                  <p className="mt-2 font-sans opacity-60">
                                    Selecteer eerst je kamp locatie!
                                  </p>
                                )}

                                {camps.map((camp, index) => (
                                  <div
                                    key={index}
                                    className={`${
                                      camp.name === selectedCamp
                                        ? 'inline'
                                        : 'hidden'
                                    }`}
                                  >
                                    {camp.dataEaster?.map((data, idx) => (
                                      <label
                                        key={idx}
                                        name={`${camp.name} - ${data.title}`}
                                        value={`${camp.name} - ${data.title}`}
                                        className={`mb-1 flex ${
                                          data.available
                                            ? null
                                            : 'cursor-pointer'
                                        } items-start gap-2`}
                                      >
                                        <input
                                          type="checkbox"
                                          name={`${camp.name} - ${data.title}`}
                                          value={`${camp.name} - ${data.title}`}
                                          className={`mt-1.5 cursor-pointer rounded border-2 border-blue ${
                                            data.available ? 'opacity-40' : null
                                          }`}
                                          disabled={!!data.available}
                                          onClick={handleCheckbox}
                                        />
                                        <p
                                          className={`${
                                            data.available
                                              ? 'line-through opacity-40'
                                              : null
                                          } font-sans text-lg font-medium`}
                                        >
                                          {data.title}
                                        </p>
                                      </label>
                                    ))}
                                    {camp.dataSummer?.map((data, idx) => (
                                      <label
                                        key={idx}
                                        name={`${camp.name} - ${data.title}`}
                                        value={`${camp.name} - ${data.title}`}
                                        className={`mb-1 flex ${
                                          data.available
                                            ? null
                                            : 'cursor-pointer'
                                        } items-start gap-2`}
                                      >
                                        <input
                                          type="checkbox"
                                          name={`${camp.name} - ${data.title}`}
                                          value={`${camp.name} - ${data.title}`}
                                          className={`mt-1.5 cursor-pointer rounded border-2 border-blue ${
                                            data.available ? 'opacity-40' : null
                                          }`}
                                          disabled={!!data.available}
                                          onClick={handleCheckbox}
                                        />
                                        <p
                                          className={`${
                                            data.available
                                              ? 'line-through opacity-40'
                                              : null
                                          } font-sans text-lg font-medium`}
                                        >
                                          {data.title}
                                        </p>
                                      </label>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mt-12">
                            <p className="font-fries text-2xl">
                              Medische fiche *
                            </p>

                            <p className="font-sans text-lg font-medium">
                              Hieronder kunt u de medische fiche downloaden,
                              deze is verplicht om in te vullen en mee te
                              brengen op de eerste kampdag. Je krijgt deze ook
                              opgezonden via mail of je kan deze alvast
                              hieronder downloaden.
                            </p>

                            <div className="mt-3 flex w-fit items-center rounded-md bg-orange font-fries text-white transition-all hover:-translate-y-1 hover:bg-orange-dark hover:shadow-xl">
                              <a
                                href="/files/Medische-fiche.pdf"
                                alt="alt text"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="align-center mt-1 flex px-4 py-2 "
                              >
                                <PaperClipIcon className="mt-0.5 h-5 w-5" />
                                <p className="ml-0.5 text-xl">
                                  Download Medische Fiche
                                </p>
                              </a>
                            </div>
                          </div>

                          <div className="mt-12">
                            <p className="font-fries text-2xl">Gdpr</p>

                            <label className="mt-4 flex cursor-pointer items-start gap-2">
                              <input
                                className="mt-1 cursor-pointer rounded border-2 border-blue"
                                type="checkbox"
                                name="gdprPictures"
                                value="gdprPictures"
                                onChange={(e) =>
                                  setGdprImages(e.target.checked)
                                }
                              />
                              <p className="font-sans text-lg font-medium">
                                Ik ga ermee akkoord dat er foto’s genomen worden
                                en deze op sociale media geplaatst worden.
                                (optioneel)
                              </p>
                            </label>
                            <label className="mt-2 flex cursor-pointer items-start gap-2">
                              <input
                                className="mt-1 cursor-pointer rounded border-2 border-blue"
                                type="checkbox"
                                name="gdprData"
                                value="gdprData"
                                onChange={(e) => {
                                  setGdpaData(e.target.checked);
                                  setGdprRequired('');
                                }}
                              />
                              <p className="font-sans text-lg font-medium">
                                Ik ga ermee akkoord dat mijn gegevens gebruikt
                                en opgeslagen worden voor de algemene
                                administratie. *
                              </p>
                            </label>
                            <p className="ml-6 font-sans text-red">
                              {gdprDataRequired}
                            </p>
                          </div>
                          <FormikButton
                            dirty={dirty}
                            isValid={isValid}
                            label="Schrijf mij in"
                            className="mt-12 h-12 w-full rounded-md bg-blue font-fries text-white transition-all hover:-translate-y-1 hover:bg-blue-dark hover:shadow-xl"
                          />
                        </Form>
                      </div>
                    );
                  }}
                </Formik>
              )}
            </div> */}
          </div>
        </div>
      </Layout>
      <Footer campList={camps} />
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

export default Register;
