import Link from 'next/link';
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
        <div className="flex h-96 items-center justify-center">
          <p className="font-fries text-2xl">
            Bekijk binnenkort hier al de foto's van de kampen!
          </p>
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export default Album;
