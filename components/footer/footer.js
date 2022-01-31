import Image from 'next/image';
import Link from 'next/link';
import {
  LocationMarkerIcon,
  MailIcon,
  CreditCardIcon,
  BriefcaseIcon,
} from '@heroicons/react/outline';
import SmallLogo from '../../assets/images/logo-small.png';

function Footer() {
  return (
    <div className="bg-orange py-16">
      <div className="mx-auto max-w-screen-xl font-fries">
        <div className="flex items-start justify-center ">
          <Link href="/">
            <div className="mx-12 cursor-pointer transition-all hover:rotate-2 hover:scale-110">
              <Image src={SmallLogo} alt="Logo" width={202} height={51} />
            </div>
          </Link>
          <div className="mx-12 hidden text-xl text-white lg:inline">
            <ul>
              <li>Navigatie</li>
              <li>
                <ul>
                  <li className="hover:opacity-60">
                    <Link href="/">- Home</Link>
                  </li>
                  <li className="hover:opacity-60">
                    <Link href="/info">- Info/prijzen</Link>
                  </li>
                  <li className="hover:opacity-60">
                    <Link href="/">- Zeebrugge/Dudzele</Link>
                  </li>
                  <li className="hover:opacity-60">
                    <Link href="/">- Sint-Kruis Brugge</Link>
                  </li>
                  <li className="hover:opacity-60">
                    <Link href="/register">- Inschrijven</Link>
                  </li>
                  <li className="hover:opacity-60">
                    <Link href="/contact">- Contact</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mx-12 hidden text-xl text-white md:inline lg:mt-0">
            <ul>
              <li>
                <a
                  href="https://goo.gl/maps/zaLJqeJsPp4ybVRb7"
                  className="mb-2 flex hover:opacity-60"
                >
                  <LocationMarkerIcon className="mt-0.5 h-6 w-6" />
                  <p className="ml-1.5">Gruttostraat 16, 8380 Lissewege</p>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@diverto-kampen.be"
                  className="mb-2 flex hover:opacity-60"
                >
                  <MailIcon className="mt-0.5 h-6 w-6" />
                  <p className="ml-1.5">info@diverto-kampen.be</p>
                </a>
              </li>
              <li className="mb-2 flex">
                <CreditCardIcon className="mt-0.5 h-6 w-6" />
                <p className="ml-1.5">BE76 7390 2107 7895</p>
              </li>
              <li className="mb-2 flex">
                <BriefcaseIcon className="mt-0.5 h-6 w-6" />
                <p className="ml-1.5">0759.859.594</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
