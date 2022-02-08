import Image from 'next/image';
import Link from 'next/link';
import {
  MailIcon,
  CreditCardIcon,
  BriefcaseIcon,
  PhoneIcon,
  ArrowUpIcon,
} from '@heroicons/react/outline';
import Logo from '../../assets/logo/logo-letter.svg';

import FacebookIcon from '../../assets/facebookIcon.svg';
import InstagramIcon from '../../assets/instagramIcon.svg';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="mt-16 bg-orange text-white sm:py-16">
      <div className="mx-auto max-w-screen-xl px-3 sm:px-6 md:px-12 lg:px-16">
        <div className="mb-4 flex items-center justify-center pt-8 sm:justify-between sm:pt-0">
          <Link href="/" passHref>
            <div className="cursor-pointer transition-all hover:rotate-3 hover:scale-110">
              <Image src={Logo} width={208} height={50} layout="fixed" />
            </div>
          </Link>
          <button
            type="button"
            className="hidden rounded-full bg-white p-2 sm:inline"
            onClick={scrollToTop}
          >
            <ArrowUpIcon className="h-5 w-5 rounded text-orange" />
          </button>
        </div>
        <hr />
        <div className="flex sm:mt-8">
          <div className="mr-16 hidden sm:inline">
            <p className="mb-2 font-fries text-xl">Info</p>
            <a
              href="mailto:info@diverto-kampen.be"
              className="mb-2 flex hover:opacity-60"
            >
              <PhoneIcon className="h-6 w-6" />
              <p className="ml-1.5">0495/307016</p>
            </a>
            <a
              href="mailto:info@diverto-kampen.be"
              className="mb-2 flex hover:opacity-60"
            >
              <MailIcon className="h-6 w-6" />
              <p className="ml-1.5">info@diverto-kampen.be</p>
            </a>
            <div className="mb-2 flex">
              <CreditCardIcon className="h-6 w-6" />
              <p className="ml-1.5">BE76 7390 2107 7895</p>
            </div>
            <div className="mb-2 flex">
              <BriefcaseIcon className="h-6 w-6" />
              <p className="ml-1.5">0759.859.594</p>
            </div>
          </div>
          <div className="mr-16 hidden sm:inline">
            <p className="mb-2 font-fries text-xl">Navigatie</p>
            <ul>
              <li className="mb-2 hover:opacity-60">
                <Link href="/">Home</Link>
              </li>
              <li className="mb-2 hover:opacity-60">
                <Link href="/info">Info/prijzen</Link>
              </li>
              <li className="mb-2 hover:opacity-60">
                <Link href="/">Zeebrugge/Dudzele</Link>
              </li>
              <li className="mb-2 hover:opacity-60">
                <Link href="/">Sint-Kruis Brugge</Link>
              </li>
              <li className="mb-2 hover:opacity-60">
                <Link href="/register">Inschrijven</Link>
              </li>
              <li className="mb-2 hover:opacity-60">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="mr-16 hidden md:inline">
            <p className="mb-2 font-fries text-xl">Sociale media</p>
            <ul>
              <li className="mb-2 flex cursor-pointer hover:opacity-60">
                <Link href="https://www.facebook.com/Divertidokampen">
                  <>
                    <Image
                      src={FacebookIcon}
                      width={26}
                      height={26}
                      layout="fixed"
                    />
                    <p className="ml-1.5">Facebook</p>
                  </>
                </Link>
              </li>
              <li className="mb-2 flex cursor-pointer hover:opacity-60">
                <Link href="https://www.instagram.com/divertidokampen/">
                  <>
                    <Image
                      src={InstagramIcon}
                      width={26}
                      height={26}
                      layout="fixed"
                    />
                    <p className="ml-1.5">Instagram</p>
                  </>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center sm:justify-start">
          <p className="py-8 font-sans text-sm font-medium text-white opacity-70">
            <Link href="https://divertido.sanity.studio/desk">Admin</Link>{' '}
            &bull; <Link href="/policy">Privacy Policy</Link> &bull;{' '}
            <Link href="https://www.linkedin.com/in/jasper-vermeulen-billy/">
              Website by @Jasper
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
