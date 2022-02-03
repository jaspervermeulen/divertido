import * as Yup from 'yup';

export const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Gelieve je naam in te geven'),
  email: Yup.string()
    .email('Dit mailadres is niet geldig')
    .required('Gelieve een mailadres in te geven'),
  subject: Yup.string().required('Gelieve een onderwerp in te geven'),
  message: Yup.string().required('Gelieve een berichtje in te geven'),
});

export const RegisterSchema = Yup.object().shape({
  participantFirstname: Yup.string().required(
    'Gelieve je voornaam in te geven'
  ),
  participantLastname: Yup.string().required(
    'Gelieve je achternaam in te geven'
  ),
  participantBirthData: Yup.string().required(
    'Gelieve je geboortedatum in te geven'
  ),
  participantGrade: Yup.string().required('Gelieve je leerjaar te selecteren'),
  participantSex: Yup.string().required('Gelieve je geslacht te selecteren'),
  parentFirstname: Yup.string().required('Gelieve je voornaam in te geven'),
  parentLastname: Yup.string().required('Gelieve je achternaam in te geven'),
  parentEmail: Yup.string()
    .email('Dit mailadres is niet geldig')
    .required('Gelieve je email in te geven'),
  parentPhone: Yup.string().required('Gelieve je gsm-nummer in te geven'),
  parentAdres1: Yup.string().required('Gelieve je adres in te geven'),
  parentAdres2: Yup.string(),
  parentPostalCode: Yup.string().required('Gelieve je postcode in te geven'),
  parentPlace: Yup.string().required('Gelieve je woonplaats in te geven'),
});
