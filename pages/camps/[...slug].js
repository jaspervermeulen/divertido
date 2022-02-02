import Header from '../../components/header/header';
import SEO from '../../components/seo/seo';
import Heading from '../../components/heading/heading';
import Layout from '../../components/layout/layout';
import LocationCard from '../../components/cards/locationCard';
import Footer from '../../components/footer/footer';
import CampItemCard from '../../components/cards/campItemCard';

function Camp({ camp }) {
  return (
    <>
      <SEO title={camp.name} />
      <Header />
      <Layout>
        <Heading>{camp.name}</Heading>
        <div className="flex gap-12">
          <div className="w-2/5">
            <p className="font-fries text-2xl">Locations</p>
            {camp.locations ? (
              <>
                {camp.locations.map((location, index) => (
                  <LocationCard
                    key={index}
                    name={location.name}
                    adres={location.adres}
                    meta={location.meta}
                    image={location.img}
                  />
                ))}
              </>
            ) : null}
          </div>
          <div className="w-3/5">
            <div>
              {camp.dataEaster ? (
                <>
                  <p className="mb-3 font-fries text-2xl">Paaskamp</p>
                  <div className="flex flex-col gap-2">
                    {camp.dataEaster.map((campEaster, index) => (
                      <CampItemCard
                        title={campEaster.title}
                        name={camp.name}
                        price={campEaster.price}
                        key={index}
                        available={campEaster.available}
                      />
                    ))}
                  </div>
                </>
              ) : null}
            </div>
            <div className="mt-6">
              {camp.dataSummer ? (
                <>
                  <p className="mb-3 font-fries text-2xl">Zomerkamp</p>
                  <div className="flex flex-col gap-2">
                    {camp.dataSummer.map((campSummer, index) => (
                      <CampItemCard
                        title={campSummer.title}
                        name={camp.name}
                        price={campSummer.price}
                        key={index}
                        available={campSummer.available}
                      />
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const pageSlug = params.slug.toString();

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }
  const query = encodeURIComponent(`*[ _type == "camp" ]`);
  const url = `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  const camp = result.result.find((ress) => ress.slug.current === pageSlug);

  return {
    props: {
      camp,
    },
  };
};

export default Camp;
