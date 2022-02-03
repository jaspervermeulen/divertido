import {
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import ImageUrlBuilder from '@sanity/image-url';
import Paragraph from '../paragraph/paragraph';

function ProfileCard({
  name,
  education,
  qualification,
  location,
  phone,
  index,
  image,
}) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const imgBuilder = ImageUrlBuilder({
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      dataset: 'production',
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);

  return (
    <div
      key={index}
      className="flex w-full flex-col items-start gap-4 rounded-lg border-4 border-orange border-opacity-50 bg-opacity-50 px-6 py-4 transition-all hover:border-blue sm:flex-row sm:items-center sm:gap-6"
    >
      <img
        src={imageUrl}
        width={200}
        height={200}
        alt={`Portretfoto van ${name}`}
        className="w-36 rounded-full lg:w-48"
      />

      <div className="ml-0 w-full md:ml-4 lg:ml-0">
        <Paragraph funky={false} size="medium">
          {name}
        </Paragraph>
        <ul>
          <li className="mt-3 flex items-start">
            <AcademicCapIcon className="mt-0.5 h-5 w-5" />
            <p className="ml-1">{education}</p>
          </li>
          <li className="mt-3 flex items-start">
            <QuestionMarkCircleIcon className="mt-0.5 h-5 w-5" />
            <p className="ml-1">{qualification}</p>
          </li>
          <li className="mt-3 flex items-start">
            <LocationMarkerIcon className="mt-0.5 h-5 w-5" />
            <p className="ml-1">{location}</p>
          </li>
          <li className="mt-3 flex items-start">
            <PhoneIcon className="mt-0.5 h-5 w-5" />
            <p className="ml-1 hover:opacity-60">
              <a href={`tel:${phone}`}>{phone}</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileCard;
