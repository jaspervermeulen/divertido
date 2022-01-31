import Image from 'next/image';
import Link from 'next/link';
import Image1 from '../../assets/images/1.png';
import Image2 from '../../assets/images/2.png';
import Image3 from '../../assets/images/3.png';
import Image4 from '../../assets/images/4.png';
import { games } from '../../data/games';
import StandardLayout from '../layout/standardLayout';

function HeroSection() {
  return (
    <div className="pt-12 pb-20">
      <StandardLayout>
        <div className="flex flex-col items-center justify-center px-4 md:px-0">
          <p className="text-center font-fries text-3xl lg:text-5xl">
            Op zoek naar een funtastisch kamp?
          </p>
          <p className="text-center font-fries text-3xl lg:text-5xl">
            Kom op kamp bij divertido vakantiekampen
            <br /> in{' '}
            <Link href="/">
              <a className="text-blue transition-all hover:text-orange">
                Zeebrugge/Dudzele
              </a>
            </Link>{' '}
            en{' '}
            <Link href="/">
              <a className="text-blue hover:text-orange">Sint-Kruis Brugge</a>
            </Link>
            !
          </p>
        </div>
      </StandardLayout>

      <div className="mt-8 flex justify-center">
        <div className="flex snap-x gap-4 overflow-x-scroll">
          <div className="snap-center">
            <Image
              src={Image1}
              alt="Image"
              width={268}
              height={268}
              layout="fixed"
            />
          </div>
          <div className="snap-center">
            <Image
              src={Image2}
              alt="Image"
              width={268}
              height={268}
              layout="fixed"
            />
          </div>
          <div className="snap-center">
            <Image
              src={Image3}
              alt="Image"
              width={268}
              height={268}
              layout="fixed"
            />
          </div>
          <div className="snap-center">
            <Image
              src={Image4}
              alt="Image"
              width={268}
              height={268}
              layout="fixed"
            />
          </div>
          <div className="snap-center">
            <Image
              src={Image1}
              alt="Image"
              width={268}
              height={268}
              layout="fixed"
            />
          </div>
          <div className="snap-center">
            <Image
              src={Image2}
              alt="Image"
              width={268}
              height={268}
              layout="fixed"
            />
          </div>
          <div className="snap-center">
            <Image
              src={Image3}
              alt="Image"
              width={268}
              height={268}
              layout="fixed"
            />
          </div>
          <div className="snap-center">
            <Image
              src={Image4}
              alt="Image"
              width={268}
              height={268}
              layout="fixed"
            />
          </div>
          <div className="snap-center">
            <Image
              src={Image1}
              alt="Image"
              width={268}
              height={268}
              layout="fixed"
            />
          </div>
          <div className="snap-center">
            <Image
              src={Image2}
              alt="Image"
              width={268}
              height={268}
              layout="fixed"
            />
          </div>
          <div className="snap-center">
            <Image
              src={Image3}
              alt="Image"
              width={268}
              height={268}
              layout="fixed"
            />
          </div>
          <div className="snap-center">
            <Image
              src={Image4}
              alt="Image"
              width={268}
              height={268}
              layout="fixed"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center px-4 sm:px-8 xl:px-0">
        <ul className="flex flex-wrap justify-center gap-2 font-fries text-white">
          {games.map((game, id) => (
            <li key={id} className="rounded-full bg-orange p-2">
              {game}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HeroSection;
