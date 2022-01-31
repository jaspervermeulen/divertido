import Image from 'next/image';
import Link from 'next/link';
import Zeebrugge from '../../assets/images/zeebrugge.png';
import Brugge from '../../assets/images/brugge.png';
import StandardLayout from '../layout/standardLayout';

function DiscoverCamps({ backgroundColor, textColor }) {
  return (
    <div className={backgroundColor}>
      <StandardLayout>
        <div className={`pt-12 pb-20 ${textColor}`}>
          <div className="mb-8 flex justify-center font-fries text-4xl">
            <p>Ontdek onze kampen</p>
          </div>
          <div className="flex justify-center">
            <div className="gap-6 px-4 sm:flex sm:px-8 xl:px-0">
              <div className="w-min-w rounded-lg border-8 border-white p-6 md:w-96">
                <Image src={Zeebrugge} alt="Zeebrugge" layout="responsive" />
                <p className="mt-4 font-fries text-2xl">Zeebrugge/Dudzele</p>
                <p>
                  Vakantiekamp in Zeebrugge/Dudzele, keuze uit paas en
                  zomervakanties.
                </p>
                <Link href="/">
                  <a className="text-fries mt-6 flex items-center justify-center rounded-sm bg-white py-3 font-fries text-xl text-blue hover:opacity-60">
                    Ontdek dit kamp
                  </a>
                </Link>
              </div>
              <div className="w-min-w mt-8 rounded-lg border-8 border-white p-6 sm:mt-0 md:w-96">
                <Image src={Brugge} alt="Zeebrugge" layout="responsive" />
                <p className="mt-4 font-fries text-2xl">Sint-Kruis Brugge</p>
                <p>
                  Vakantiekamp in Sint-Kruis Brugge, keuze uit paas en
                  zomervakanties.
                </p>
                <Link href="/">
                  <a className="text-fries mt-6 flex items-center justify-center rounded-sm bg-white py-3 font-fries text-xl text-blue hover:opacity-60">
                    Ontdek dit kamp
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </StandardLayout>
    </div>
  );
}

export default DiscoverCamps;
