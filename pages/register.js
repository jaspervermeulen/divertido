import { useState } from 'react';
import Button from '../components/button/button';
import Container from '../components/container/container';
import Footer from '../components/footer/footer';
import Header from '../components/header';
import Input from '../components/input/input';
import Paragraph from '../components/paragraph/paragraph';

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

const camps = [
  {
    value: 'paaskamp-04/04-08/04',
    text: 'Paaskamp: 4 april - 8 april 2022',
  },
  {
    value: 'zomerkamp-w1-04/07-08/07',
    text: 'Zomerkamp Week 1: 4 juli - 8 juli 2022',
  },
  {
    value: 'zomerkamp-w1-11/07-15/07',
    text: 'Zomerkamp Week 2: 11 juli - 15 juli 2022',
  },
  {
    value: 'zomerkamp-w1-16/08-19/08',
    text: 'Zomerkamp Week 3: 16 aug - 19 aug 2022',
  },
  {
    value: 'zomerkamp-w1-22/08-26/08',
    text: 'Zomerkamp Week 4: 22 aug - 26 aug 2022',
  },
];

const locations = [
  { value: 'zeebrugge-dudzele', text: 'Zeebrugge/Dudzele' },
  { value: 'sint-kruis-brugge', text: 'Sint-Kruis Brugge' },
];

function Register() {
  return (
    <>
      <Container>
        <Header />
        <div className="my-20 gap-12 px-4 sm:px-8 lg:flex xl:px-0">
          <div className="lg:w-1/3">
            <div className="h-full">
              <div className="sticky top-20">
                <Paragraph funky={false} size="large">
                  Inschrijven
                </Paragraph>
                <div className="mt-8 rounded-md border-8 border-orange p-4">
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
          <div className="mt-16 font-fries lg:w-2/3">
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
                <Input
                  type="select"
                  labelText="Locatie *"
                  defaultText="Kies optie"
                  options={locations}
                />
                <div>
                  <p className="font-sans text-lg font-medium">Kamp *</p>
                  <div>
                    {camps.map((camp, id) => (
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
                    ))}
                  </div>
                </div>
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
            <Button buttonText="Schrijf mij in" />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Register;
