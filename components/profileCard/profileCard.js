import {
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import Paragraph from '../paragraph/paragraph';

function ProfileCard({
  image,
  name,
  education,
  qualification,
  location,
  phone,
  key
}) {
  return (
    <div key={key} className="mb-6 flex flex-col md:flex-row lg:flex lg:flex-col">
      <Image
        width={200}
        height={200}
        layout="fixed"
        src={image}
        alt="Dimitri Delporte Portret"
      />
      <div className="mt-4 ml-0 md:ml-4 lg:ml-0">
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
