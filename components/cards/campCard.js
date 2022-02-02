import Link from 'next/link';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import sanityClient from '@sanity/client';
import { stringToSlug } from '../../utils/stringToSlug.util';

const configuredSanityClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-06-07',
  useCdn: true,
});

function CampCard({ index, name, description, image, accentColor }) {
  const imageProps = useNextSanityImage(configuredSanityClient, image);

  return (
    <div
      key={index}
      className={`h-fit rounded-lg border-8 ${
        accentColor ? 'border-white' : 'border-blue'
      } p-6`}
    >
      {image ? (
        <div className="relative mb-6 h-44 w-full">
          <Image {...imageProps} layout="fill" objectFit="cover" />
        </div>
      ) : null}
      <p className="font-fries text-2xl">{name}</p>
      <p>{description}</p>
      <Link href={`/camps/${stringToSlug(name)}`}>
        <a
          className={`text-fries ${
            accentColor ? 'bg-white' : 'bg-blue'
          } mt-4 flex items-center justify-center rounded-sm py-3 font-fries text-xl ${
            accentColor ? 'text-blue' : 'text-white'
          } transition-all hover:-translate-y-1 hover:bg-blue-dark hover:shadow-xl ${
            accentColor ? 'hover:bg-slate-200' : 'hover:bg-blue-dark'
          }`}
        >
          Ontdek dit kamp
        </a>
      </Link>
    </div>
  );
}

export default CampCard;
