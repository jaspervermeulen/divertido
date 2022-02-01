import Image from 'next/image';
import Link from 'next/link';
import Zeebrugge from '../../assets/images/zeebrugge.png';
import Brugge from '../../assets/images/brugge.png';
import StandardLayout from '../layout/standardLayout';
import CampCard from '../../components/cards/campCard';

const camps = [
  {
    title: 'Zeebrugge',
    description: 'Vakantiekamp in Zeebrugge, keuze uit paas en zomervakanties.',
    image: Zeebrugge,
    slug: 'zeebrugge',
  },
  {
    title: 'Dudzele',
    description: 'Vakantiekamp in Dudzele, keuze uit paas en zomervakanties.',
    image: Zeebrugge,
    slug: 'dudzele',
  },
  {
    title: 'Sint-Kruis',
    description:
      'Vakantiekamp in Sint-Kruis, keuze uit paas en zomervakanties.',
    image: Zeebrugge,
    slug: 'sint-kruis',
  },
  {
    title: 'Sint-Kruis',
    description:
      'Vakantiekamp in Sint-Kruis, keuze uit paas en zomervakanties.',
    image: Zeebrugge,
    slug: 'sint-kruis',
  },
  {
    title: 'Sint-Kruis',
    description:
      'Vakantiekamp in Sint-Kruis, keuze uit paas en zomervakanties.',
    image: Zeebrugge,
    slug: 'sint-kruis',
  },
];

function DiscoverCamps({
  backgroundColor = 'bg-blue',
  textColor = 'text-white',
  withHeader = true,
  alignment = 'justify-center',
  paddingTop = 'pt-12',
  borderColor = 'white',
  buttonTextColor = 'text-blue',
}) {
  return (
    <div className={backgroundColor}>
      <div className={`${paddingTop} pb-20 ${textColor}`}>
        {withHeader ? (
          <div className="mb-8 flex justify-center font-fries text-4xl">
            <p>Ontdek onze kampen</p>
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {camps.map((camp, index) => (
            <CampCard
              title={camp.title}
              description={camp.description}
              image={camp.image}
              key={index}
              borderColor={borderColor}
              buttonTextColor={buttonTextColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DiscoverCamps;
