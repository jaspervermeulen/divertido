import { PaperClipIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Heading from '../components/heading/heading';
import Input from '../components/input/input';
import Layout from '../components/layout/layout';
import Paragraph from '../components/paragraph/paragraph';
import SEO from '../components/seo/seo';

const grade = [
  { value: '1ekleuter', text: '1e kleuter' },
  { value: '2ekleuter', text: '2e kleuter' },
  { value: '3ekleuter', text: '3e kleuter' },
  { value: '1eleerjaar', text: '1e leerjaar' },
  { value: '2eleerjaar', text: '2e leerjaar' },
  { value: '3eleerjaar', text: '3e leerjaar' },
  { value: '4eleerjaar', text: '4e leerjaar' },
  { value: '5eleerjaar', text: '5e leerjaar' },
  { value: '6eleerjaar', text: '6e leerjaar' },
];

const gender = [
  { value: 'male', text: 'Jongen' },
  { value: 'female', text: 'Meisje' },
];

function Register({ camps }) {
  const [campOptions, setCampOptions] = useState([]);
  const [selectedCamp, setSelectedCamp] = useState();
  const [selectedCampData, setSelectedCampData] = useState();

  useEffect(() => {
    const result = camps.find((camp) => camp.name === selectedCamp);
    setSelectedCampData(result);
  }, [selectedCamp]);

  useEffect(() => {
    setCampOptions([]);
    camps.forEach((camp) =>
      // eslint-disable-next-line no-shadow
      setCampOptions((campOptions) => [...campOptions, camp.name])
    );
  }, []);
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
                  <Paragraph funky={false} size="medium">
                    !! Schrijf snel in. Plaatsen zijn beperkt !!
                  </Paragraph>
                  <Paragraph size="base" className="mt-3">
                    Vul alle gegevens correct in en druk op verzend. Jullie
                    ontvangen nadien een email terug van ons met alle gegevens
                    om het inschrijvingsgeld te betalen.{' '}
                    <span className="underline">
                      Pas na betaling is de inschrijving definitief!
                    </span>
                  </Paragraph>
                  <Paragraph size="base" className="mt-3">
                    Ook de medische fiche is een verplichting om in te vullen en
                    mee te brengen op de eerste kampdag. Dit krijg je ook
                    opgezonden in onze mail of kan je hieronder downloaden.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
          <div className="font-fries lg:w-2/3">
            <div>
              <Paragraph funky={false} size="medium">
                Gegevens Deelnemer
              </Paragraph>
              <div className="mt-4 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5">
                <Input type="text" labelText="Voornaam Deelnemer *" />
                <Input type="text" labelText="Achternaam Deelnemer *" />
                <Input type="date" labelText="Geboortedatum (DD/MM/JJ) *" />
                <Input
                  type="select"
                  labelText="Leerjaar (Schooljaar 2021-2022) *"
                  defaultText="Kies optie"
                  options={grade}
                />
                <Input
                  type="select"
                  labelText="Geslacht *"
                  defaultText="Kies optie"
                  options={gender}
                />
              </div>
            </div>
            <div className="mt-12">
              <Paragraph funky={false} size="medium">
                Gegevens Ouder/Voogd
              </Paragraph>
              <div className="mt-4 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5">
                <Input type="text" labelText="Voornaam Ouder/voogd *" />
                <Input type="text" labelText="Achternaam Ouder/voogd *" />
                <Input type="email" labelText="Email-adres Ouder/voogd *" />
                <Input type="phone" labelText="Gsm Nummer Ouder/voogd *" />

                <label className="col-span-2">
                  <p className="font-sans text-lg font-medium">
                    Adresregel 1 *
                  </p>
                  <input className="h-11 w-full rounded-md border-2 border-blue px-3 font-sans" />
                </label>
                <label className="col-span-2">
                  <p className="font-sans text-lg font-medium">
                    Adresregel 2 (optioneel)
                  </p>
                  <input className="h-11 w-full rounded-md border-2 border-blue px-3 font-sans" />
                </label>
                <Input type="text" labelText="Postcode *" />
                <Input type="text" labelText="Woonplaats *" />
              </div>
            </div>
            <div className="mt-12">
              <Paragraph funky={false} size="medium">
                Kamp
              </Paragraph>

              <div className="mt-4 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5">
                <label>
                  <p className="font-sans text-lg font-medium">Locatie *</p>
                  <select
                    name="locatie"
                    id="locatie"
                    className="h-11 w-full cursor-pointer appearance-none rounded-md border-2 border-blue bg-white px-3 font-sans"
                    onChange={(e) => setSelectedCamp(e.target.value)}
                  >
                    <option value="" selected disabled hidden>
                      Kies je kamplocatie
                    </option>
                    {campOptions.map((option, id) => (
                      <option id={id} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
                <div>
                  <p className="font-sans text-lg font-medium">Kamp *</p>
                  <div>
                    {selectedCampData ? (
                      <div>
                        {selectedCampData.dataEaster
                          ? selectedCampData.dataEaster.map((camp, index) => (
                              <label
                                key={index}
                                className="mb-1 flex cursor-pointer items-start gap-2"
                              >
                                <input
                                  className="mt-1.5 cursor-pointer rounded border-2 border-blue"
                                  type="checkbox"
                                />
                                <p className="font-sans text-lg font-medium">
                                  {camp.title}
                                </p>
                              </label>
                            ))
                          : null}
                      </div>
                    ) : (
                      'selecteer je locatie'
                    )}
                    {selectedCampData ? (
                      <div>
                        {selectedCampData.dataSummer
                          ? selectedCampData.dataSummer.map((camp, index) => (
                              <label
                                key={index}
                                className={`mb-1 flex ${
                                  camp.available ? null : 'cursor-pointer'
                                } items-start gap-2`}
                              >
                                <input
                                  className={`mt-1.5 cursor-pointer rounded border-2 border-blue ${
                                    camp.available ? 'opacity-40' : null
                                  }`}
                                  type="checkbox"
                                  disabled={!!camp.available}
                                />
                                <p
                                  className={`${
                                    camp.available
                                      ? 'line-through opacity-40'
                                      : null
                                  } font-sans text-lg font-medium`}
                                >
                                  {camp.title}
                                </p>
                              </label>
                            ))
                          : null}
                      </div>
                    ) : (
                      'selecteer je locatie'
                    )}
                    {/* {camps.map((camp, id) => (
                      <label
                        key={id}
                        className="mb-1 flex cursor-pointer items-start gap-2"
                      >
                        <input
                          className="mt-1.5 cursor-pointer rounded border-2 border-blue"
                          type="checkbox"
                        />
                        <p className="font-sans text-lg font-medium">
                          {camp.text}
                        </p>
                      </label>
                    ))} */}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Paragraph funky={false} size="medium">
                Medische fiche *
              </Paragraph>

              <p className="font-sans text-lg font-medium">
                Hieronder kunt u de medische fiche downloaden, deze is verplicht
                om in te vullen en mee te brengen op de eerste kampdag. Je
                krijgt deze ook opgezonden via mail of je kan deze alvast
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
                  <p className="ml-0.5 text-xl">Download Medische Fiche</p>
                </a>
              </div>
            </div>

            <div className="mt-12">
              <Paragraph funky={false} size="medium">
                Gdpr
              </Paragraph>

              <label className="mt-4 flex cursor-pointer items-start gap-2">
                <input
                  className="mt-1 cursor-pointer rounded border-2 border-blue"
                  type="checkbox"
                />
                <p className="font-sans text-lg font-medium">
                  Ik ga ermee akkoord dat er foto’s genomen worden en deze op
                  sociale media geplaatst worden. (optioneel)
                </p>
              </label>
              <label className="mt-2 flex cursor-pointer items-start gap-2">
                <input
                  className="mt-1 cursor-pointer rounded border-2 border-blue"
                  type="checkbox"
                />
                <p className="font-sans text-lg font-medium">
                  Ik ga ermee akkoord dat mijn gegevens gebruikt en opgeslagen
                  worden voor de algemene administratie. *
                </p>
              </label>
            </div>
            <button
              type="button"
              className="mt-12 h-12 w-full rounded-md bg-blue font-fries text-white transition-all hover:-translate-y-1 hover:bg-blue-dark hover:shadow-xl"
            >
              Schrijf mij in
            </button>
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

export default Register;
