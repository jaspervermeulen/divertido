import { LocationMarkerIcon } from '@heroicons/react/outline';
import sanityClient from '@sanity/client';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';

const configuredSanityClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-06-07',
  useCdn: true,
});

function LocationCard({ key, name, adres, meta, image }) {
  const imageProps = useNextSanityImage(configuredSanityClient, image);

  return (
    <div key={key} className="py-4">
      <p className="font-fries text-xl">{name}</p>
      <div className="mt-1 flex">
        <LocationMarkerIcon className="h-6 w-6" />
        <p className="ml-1.5">{adres}</p>
      </div>
      <p className="mt-1">{meta}</p>
      <div className="relative mt-3 h-64 w-full">
        <Image {...imageProps} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default LocationCard;
