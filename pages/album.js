import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Heading from '../components/heading/heading';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';

function Album() {
  return (
    <>
      <SEO title="Fotoalbum" />
      <Header />
      <Layout>
        <Heading>Fotoalbum</Heading>
      </Layout>
      <Footer />
    </>
  );
}

export default Album;
