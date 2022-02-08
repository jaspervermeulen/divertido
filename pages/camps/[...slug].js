import { useEffect, useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Header from '../../components/header/header';
import SEO from '../../components/seo/seo';
import Layout from '../../components/layout/layout';
import LocationCard from '../../components/cards/locationCard';
import Footer from '../../components/footer/footer';
import CampItemCard from '../../components/cards/campItemCard';
import Paragraph from '../../components/paragraph/paragraph';
import { stringToSlug } from '../../utils/stringToSlug.util';

function Camp({ camp, camps }) {
  const [otherCamps, setOtherCamps] = useState([]);

  useEffect(() => {
    setOtherCamps(camps.filter((item) => item.name !== camp.name));
  }, [camp, camps]);

  return (
    <>
      <SEO title={camp.name} />
      <Header />
      <Layout>
        <div className="mt-12 mb-6 flex flex-col justify-between font-fries text-4xl sm:flex-row">
          <Paragraph size="xl">{camp.name}</Paragraph>
          <div className="mt-3 flex gap-2 sm:mt-0 sm:gap-0">
            {camps &&
              otherCamps.map((item, idx) => (
                <div
                  key={idx}
                  className="ml-0 w-full rounded-lg bg-orange text-lg text-white sm:ml-2 sm:w-fit"
                >
                  <Link href={`/camps/${stringToSlug(item.name)}`}>
                    <div className="flex cursor-pointer items-center p-2">
                      <p className="mr-1">{item.name}</p>
                      <ArrowRightIcon className="h-5 w-5" />
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:gap-12">
          <div className="mt-12 w-full md:mt-0 md:w-2/5">
            <p className="font-fries text-2xl">Locatie's</p>
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
          <div className="w-full md:w-3/5">
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

  const queryCamps = `*[ _type == "camp" ]`;
  const urlCamps = `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=${queryCamps}`;
  const camps = await fetch(urlCamps).then((res) => res.json());

  return {
    props: {
      camp,
      camps: camps.result,
    },
  };
};

export default Camp;
