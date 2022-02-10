import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';

function Album({ camps }) {
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

export default Album;
