import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Logo from '../../assets/images/logo.png';
import GirlIllustration from '../../assets/illustrations/logo-girl.svg';

import BoyIllustration from '../../assets/illustrations/logo-boy.svg';
import LetterLogo from '../../assets/illustrations/logo-letters.svg';
import StandardLayout from '../../container/layout/standardLayout';

function Header() {
  const { pathname } = useRouter();
  return (
    <StandardLayout>
      <div className="flex justify-center pt-10 pb-6 lg:hidden">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="Logo"
            width={217}
            height={191}
          />
        </Link>
      </div>
      <ul className="flex flex-wrap items-center justify-center px-8 font-fries text-2xl md:justify-between lg:pt-20 xl:px-4">
        <li className="p-2 md:px-0">
          <Link href="/">
            <a
              className={
                pathname === '/'
                  ? 'rounded-full underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
                  : 'rounded-full no-underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
              }
            >
              Home
            </a>
          </Link>
        </li>
        <li className="p-2 md:px-0">
          <Link href="/info">
            <a
              className={
                pathname === '/info'
                  ? 'rounded-full underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
                  : 'rounded-full no-underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
              }
            >
              Info/Prijzen
            </a>
          </Link>
        </li>
        <li className="p-2 md:px-0">
          <Link href="/camps">
            <a
              className={
                pathname === '/camps'
                  ? 'rounded-full underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
                  : 'rounded-full no-underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
              }
            >
              Kampen
            </a>
          </Link>
        </li>
        <li className="group hidden cursor-pointer lg:inline">
          <Link href="/">
            <div className="grid grid-cols-2">
              <div className="justify-self-end transition-all group-hover:rotate-6">
                <Image
                  src={GirlIllustration}
                  alt="Logo Meisje"
                  width={140}
                  height={160}
                />
              </div>
              <div className="justify-self-start transition-all group-hover:-rotate-3">
                <Image
                  src={BoyIllustration}
                  alt="Logo Jongetje"
                  width={140}
                  height={160}
                />
              </div>
              <div className="col-span-2 justify-self-center transition-all group-hover:rotate-2 group-hover:scale-110">
                <Image
                  src={LetterLogo}
                  alt="Logo Letters"
                  width={220}
                  height={60}
                />
              </div>
            </div>
          </Link>
        </li>
        <li className="p-2 md:px-0">
          <Link href="/album">
            <a
              className={
                pathname === '/album'
                  ? 'rounded-full underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
                  : 'rounded-full no-underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
              }
            >
              Fotoalbum
            </a>
          </Link>
        </li>
        <li className="p-2 md:px-0">
          <Link href="/register">
            <a
              className={
                pathname === '/register'
                  ? 'rounded-full underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
                  : 'rounded-full no-underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
              }
            >
              Inschrijven
            </a>
          </Link>
        </li>
        <li className="p-2 md:px-0">
          <Link href="/contact">
            <a
              className={
                pathname === '/contact'
                  ? 'rounded-full underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
                  : 'rounded-full no-underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
              }
            >
              contact
            </a>
          </Link>
        </li>
      </ul>
    </StandardLayout>
  );
}

export default Header;
