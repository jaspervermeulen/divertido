import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Heading from '../components/heading/heading';
import Layout from '../components/layout/layout';

function Policy() {
  return (
    <>
      <Header />
      <Layout>
        <Heading>Privacy Policy</Heading>
        <p>
          At DIVERTIDO KAMPEN, accessible from www.divertido.be, one of our main
          priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by www.divertido.be and how we use it. If you have additional
          questions or require more information about our Privacy Policy, do not
          hesitate to contact us. This Privacy Policy applies only to our online
          activities and is valid for visitors to our website with regards to
          the information that they shared and/or collect in www.divertido.be.
          This policy is not applicable to any information collected offline or
          via channels other than this website.
        </p>
        <p className="pt-6 pb-2 font-fries text-xl">Consent</p>
        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>
        <p>Information we collect</p>
        <p>
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information. If you
          contact us directly, we may receive additional information about you
          such as your name, email address, phone number, the contents of the
          message and/or attachments you may send us, and any other information
          you may choose to provide. Information or data that is collected is
          never stored on a server by send via mail to one of the supervisors.
          We handle this information personally and don't rely on outside
          companies.
        </p>

        <p className="pt-6 pb-2 font-fries text-xl">
          How we use your information
        </p>
        <p>
          Information that is collected will remain strictly confidential and
          will only be viewed by the supervisor/board of DIVERTIDO KAMPEN. Your
          information may also be provided to (medical) care providors.
        </p>
        <p className="pt-6 pb-2 font-fries text-xl">
          GDPR Data Protection Rights
        </p>
        <p>
          We would like to make sure you are fully aware of all of your data
          protection rights. Every user is entitled to the following: The right
          to access – You have the right to request copies of your personal
          data. The right to rectification – You have the right to request that
          we correct any information you believe is inaccurate. You also have
          the right to request that we complete the information you believe is
          incomplete. The right to erasure – You have the right to request that
          we erase your personal data, under certain conditions. The right to
          restrict processing – You have the right to request that we restrict
          the processing of your personal data, under certain conditions. The
          right to object to processing – You have the right to object to our
          processing of your personal data, under certain conditions. The right
          to data portability – You have the right to request that we transfer
          the data that we have collected to another organization, or directly
          to you, under certain conditions. If you would like to exercise any of
          these rights, please contact us.
        </p>
        <p className="pt-6 pb-2 font-fries text-xl">Children's Information</p>
        <p>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
          www.divertido.be does not knowingly collect any Personal Identifiable
          Information from children. If you think that your child provided this
          kind of information on our website, we strongly encourage you to
          contact us immediately and we will do our best efforts to promptly
          remove such information from our records.
        </p>
      </Layout>
      <Footer />
    </>
  );
}

export default Policy;
