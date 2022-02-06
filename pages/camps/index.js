import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Heading from '../../components/heading/heading';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo/seo';
import CampCard from '../../components/cards/campCard';

function Camp({ camps }) {
  return (
    <>
      <SEO title="Kampen" />
      <Header />
      <Layout>
        <Heading>Onze Kampen</Heading>
        <div className="text-black">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {camps.result.map((camp, index) => (
              <CampCard
                key={index}
                index={index}
                name={camp.name}
                description={camp.description}
                image={camp.cover}
                accentColor={false}
              />
            ))}
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
    props: { camps },
  };
};

export default Camp;
