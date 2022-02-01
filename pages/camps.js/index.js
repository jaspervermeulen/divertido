import Link from 'next/link';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Heading from '../../components/heading/heading';
import Layout from '../../components/layout/layout';

function Camp({ camps }) {
  return (
    <>
      <Header />
      <Layout>
        <Heading>Onze Kampen</Heading>
        <div className="text-black">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {camps.result.map((camp, index) => (
              <div key={index} className="rounded-lg border-8 border-blue p-6">
                {/* <Image src={camp.image} alt="Zeebrugge" layout="responsive" /> */}
                <p className="font-fries text-2xl">{camp.name}</p>
                <p>{camp.description}</p>
                <Link href="/">
                  <a className="text-fries mt-6 flex items-center justify-center rounded-sm bg-blue py-3 font-fries text-xl text-white transition-all hover:-translate-y-1 hover:shadow-xl">
                    Ontdek dit kamp
                  </a>
                </Link>
              </div>
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
