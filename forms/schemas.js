import * as Yup from 'yup';

export const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Gelieve je naam in te geven'),
  email: Yup.string()
    .email('Dit mailadres is niet geldig')
    .required('Gelieve een mailadres in te geven'),
  subject: Yup.string().required('Gelieve een onderwerp in te geven'),
  message: Yup.string().required('Gelieve een berichtje in te geven'),
});
