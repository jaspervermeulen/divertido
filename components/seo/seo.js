import Head from 'next/head';

function SEO({ title }) {
  return (
    <Head>
      <title>{`${title} | Divertido`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}

export default SEO;
