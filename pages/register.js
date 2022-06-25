import { PaperClipIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Heading from '../components/heading/heading';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';

const grades = [
  '1e kleuter',
  '2e kleuter',
  '3e kleuter',
  '1e leerjaar',
  '2e leerjaar',
  '3e leerjaar',
  '4e leerjaar',
  '5e leerjaar',
  '6e leerjaar',
];

function Register({ camps }) {
  const router = useRouter();

  const [campOptions, setCampOptions] = useState([]);
  const [selectedCamp, setSelectedCamp] = useState();

  const [userCamps, setUserCamps] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [grade, setGrade] = useState('1e leerjaar');
  const [gender, setGender] = useState('Meisje');

  const [parentFirstName, setParentFirstName] = useState('');
  const [parentLastName, setParentLastName] = useState('');
  const [parentMail, setParentMail] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [parentAdres, setParentAdres] = useState('');

  const [extraNotes, setExtraNotes] = useState('');

  const [gdprImages, setGdprImages] = useState(false);
  const [gdprData, setGdpaData] = useState(false);

  useEffect(() => {
    setCampOptions([]);
    camps.forEach((camp) =>
      // eslint-disable-next-line no-shadow
      setCampOptions((campOptions) => [...campOptions, camp.name])
    );
  }, [camps]);

  function handleCheckbox(e) {
    if (userCamps.includes(e.target.value)) {
      setUserCamps(userCamps.filter((camp) => camp !== e.target.value));
    } else {
      // eslint-disable-next-line no-shadow
      setUserCamps((userCamps) => [...userCamps, e.target.value]);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (userCamps.length === 0) {
      alert('Gelieve minstens 1 kamp te kiezen');
    } else {
      const res = await fetch('/api/register', {
        body: JSON.stringify({
          firstName,
          lastName,
          birthDate,
          grade,
          gender,
          parentFirstName,
          parentLastName,
          parentMail,
          parentPhone,
          parentAdres,
          userCamps,
          extraNotes,
          gdprImages,
          gdprData,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();
      if (error) {
        alert(error);
      } else {
        router.push('/');
      }
    }
  }

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
            <form onSubmit={(e) => handleSubmit(e)}>
              <div>
                <p className="font-fries text-2xl">Gegevens Deelnemer</p>
                <div className="mt-4 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5">
                  <div>
                    <label
                      className="font-sans text-lg font-medium"
                      htmlFor="firstname"
                    >
                      Voornaam Deelnemer *
                    </label>
                    <input
                      required
                      id="firstname"
                      name="firstname"
                      value={firstName}
                      className="h-11 w-full rounded-md border-2 border-blue px-3 font-sans"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      className="font-sans text-lg font-medium"
                      htmlFor="lastname"
                    >
                      Achternaam Deelnemer *
                    </label>
                    <input
                      required
                      id="lastname"
                      name="lastname"
                      value={lastName}
                      className="h-11 w-full rounded-md border-2 border-blue px-3 font-sans"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      className="font-sans text-lg font-medium"
                      htmlFor="birth-date"
                    >
                      Geboortedatum Deelnemer *
                    </label>
                    <input
                      type="date"
                      required
                      id="birth-date"
                      name="birth-date"
                      value={birthDate}
                      className="h-11 w-full rounded-md border-2 border-blue px-3 font-sans"
                      onChange={(e) => setBirthDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      className="font-sans text-lg font-medium"
                      htmlFor="grade"
                    >
                      Leerjaar *
                    </label>
                    <select
                      className="h-11 w-full rounded-md border-2 border-blue px-3 font-sans"
                      name="grade"
                      id="grade"
                      required
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                    >
                      {grades.map((item) => (
                        <option value={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      className="font-sans text-lg font-medium"
                      htmlFor="gender"
                    >
                      Geslacht *
                    </label>
                    <select
                      name="gender"
                      id="gender"
                      required
                      className="h-11 w-full rounded-md border-2 border-blue px-3 font-sans"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="jongen">Jongen</option>
                      <option value="meisje">Meisje</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <p className="font-fries text-2xl">Gegevens Ouder/Voogd</p>
                <div className="mt-4 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5">
                  <div>
                    <label
                      className="font-sans text-lg font-medium"
                      htmlFor="oudervoornaam"
                    >
                      Voornaam Ouder/voogd *
                    </label>
                    <input
                      required
                      id="oudervoornaam"
                      name="oudervoornaam"
                      value={parentFirstName}
                      className="h-11 w-full rounded-md border-2 border-blue px-3 font-sans"
                      onChange={(e) => setParentFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      className="font-sans text-lg font-medium"
                      htmlFor="ouderachternaam"
                    >
                      Achternaam Ouder/voogd *
                    </label>
                    <input
                      required
                      id="ouderachternaam"
                      name="ouderachternaam"
                      value={parentLastName}
                      className="h-11 w-full rounded-md border-2 border-blue px-3 font-sans"
                      onChange={(e) => setParentLastName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      className="font-sans text-lg font-medium"
                      htmlFor="oudermail"
                    >
                      Email-adres Ouder/voogd *
                    </label>
                    <input
                      required
                      type="email"
                      id="oudermail"
                      name="oudermail"
                      value={parentMail}
                      className="h-11 w-full rounded-md border-2 border-blue px-3 font-sans"
                      onChange={(e) => setParentMail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      className="font-sans text-lg font-medium"
                      htmlFor="oudergsm"
                    >
                      GSM Nummer Ouder/voogd *
                    </label>
                    <input
                      required
                      id="oudergsm"
                      name="oudergsm"
                      value={parentPhone}
                      className="h-11 w-full rounded-md border-2 border-blue px-3 font-sans"
                      onChange={(e) => setParentPhone(e.target.value)}
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      className="font-sans text-lg font-medium"
                      htmlFor="adres"
                    >
                      Volledig adres *
                    </label>
                    <p className="mb-1 text-sm opacity-40">
                      Bv: Kerkstraat 1, 8000 Brugge
                    </p>
                    <input
                      required
                      id="adres"
                      name="adres"
                      value={parentAdres}
                      className="h-11 w-full rounded-md border-2 border-blue px-3 font-sans"
                      onChange={(e) => setParentAdres(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <p className="font-fries text-2xl">Extra info/opmerkingen</p>
                <div className="mt-4 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5">
                  <div className="col-span-2">
                    <div className="col-span-2">
                      <label
                        className="font-sans text-lg font-medium"
                        htmlFor="bnotes"
                      >
                        Opmerkingen die we moeten weten (optioneel)
                      </label>
                      <textarea
                        id="bnotes"
                        name="bnotes"
                        value={extraNotes}
                        className="h-48 w-full rounded-md border-2 border-blue px-3 font-sans"
                        onChange={(e) => setExtraNotes(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <p className="font-fries text-2xl">Kamp</p>
                <div className="mt-4 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5">
                  <label>
                    <p className="font-sans text-lg font-medium">Locatie *</p>
                    <select
                      name="locatie"
                      id="locatie"
                      className="h-11 w-full cursor-pointer appearance-none rounded-md border-2 border-blue bg-white px-3 font-sans"
                      onChange={(e) => setSelectedCamp(e.target.value)}
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
                          camp.name === selectedCamp ? 'inline' : 'hidden'
                        }`}
                      >
                        {camp.dataEaster?.map((data, idx) => (
                          <label
                            key={idx}
                            name={`${camp.name} - ${data.title}`}
                            value={`${camp.name} - ${data.title}`}
                            className={`mb-1 flex ${
                              data.available ? null : 'cursor-pointer'
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
                              data.available ? null : 'cursor-pointer'
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
                <p className="font-fries text-2xl">Medische fiche *</p>

                <p className="font-sans text-lg font-medium">
                  Hieronder kunt u de medische fiche downloaden, deze is
                  verplicht om in te vullen en mee te brengen op de eerste
                  kampdag. Je krijgt deze ook opgezonden via mail of je kan deze
                  alvast hieronder downloaden.
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
                <p className="font-fries text-2xl">Gdpr</p>

                <label className="mt-4 flex cursor-pointer items-start gap-2">
                  <input
                    className="mt-1 cursor-pointer rounded border-2 border-blue"
                    type="checkbox"
                    name="gdprPictures"
                    value={gdprImages}
                    onChange={(e) => setGdprImages(!gdprImages)}
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
                    name="gdprData"
                    value={gdprData}
                    onChange={(e) => {
                      setGdpaData(!gdprData);
                    }}
                  />
                  <p className="font-sans text-lg font-medium">
                    Ik ga ermee akkoord dat mijn gegevens gebruikt en opgeslagen
                    worden voor de algemene administratie. *
                  </p>
                </label>
              </div>
              <button
                type="submit"
                className="mt-12 h-12 w-full rounded-md bg-blue font-fries text-white transition-all hover:-translate-y-1 hover:bg-blue-dark hover:shadow-xl"
              >
                Schrijf mij in
              </button>
            </form>
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
