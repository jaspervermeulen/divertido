import { useNextSanityImage } from 'next-sanity-image';
import sanityClient from '@sanity/client';
import Image from 'next/image';

const configuredSanityClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-06-07',
  useCdn: true,
});

function HomeImg({ image }) {
  const imageProps = useNextSanityImage(configuredSanityClient, image);

  return (
    <div className="snap-center">
      <div className="relative h-72 w-72">
        <Image
          {...imageProps}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </div>
    </div>
  );
}

export default HomeImg;
