import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import GirlIllustration from '../../assets/illustrations/logo-girl.svg';

import BoyIllustration from '../../assets/illustrations/logo-boy.svg';
import LetterLogo from '../../assets/illustrations/logo-letters.svg';
import LogoMobile from '../../assets/logo/Afbeelding.png';
import Layout from '../layout/layout';

function Header() {
  const { pathname } = useRouter();
  return (
    <Layout>
      <div className="mt-12 mb-8 flex justify-center xl:hidden">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src={LogoMobile}
            alt="Logo"
            width={217}
            height={191}
            placeholder="blur"
          />
        </Link>
      </div>
      <ul className="flex flex-wrap items-center justify-center font-fries text-2xl md:justify-between xl:grid xl:grid-cols-8 xl:content-center xl:items-center xl:justify-items-center xl:pt-16">
        <li className="transition-all hover:rotate-3 hover:scale-110 md:px-0">
          <Link href="/">
            <a
              className={
                pathname === '/'
                  ? 'p-4 underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
                  : 'p-4 no-underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
              }
            >
              Home
            </a>
          </Link>
        </li>
        <li className="p-2 transition-all hover:-rotate-2 hover:scale-110 md:px-0">
          <Link href="/info ">
            <a
              className={
                pathname === '/info'
                  ? 'p-4 underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
                  : 'p-4 no-underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
              }
            >
              Info/Prijzen
            </a>
          </Link>
        </li>
        <li className="p-2 transition-all hover:rotate-2 hover:scale-110 md:px-0">
          <Link href="/camps">
            <a
              className={
                pathname === '/camps'
                  ? 'p-4 underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
                  : 'p-4 no-underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
              }
            >
              Kampen
            </a>
          </Link>
        </li>
        <li className="group relative hidden cursor-pointer xl:col-span-2 xl:inline">
          <Link href="/">
            <div className="z-50 grid grid-cols-2">
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
        <li className="p-2 transition-all hover:-rotate-3 hover:scale-110  md:px-0">
          <Link href="/album">
            <a
              className={
                pathname === '/album'
                  ? 'p-4 underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
                  : 'p-4 no-underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
              }
            >
              Fotoalbum
            </a>
          </Link>
        </li>
        <li className="p-2 transition-all hover:rotate-2 hover:scale-110 md:px-0">
          <Link href="/register">
            <a
              className={
                pathname === '/register'
                  ? 'p-4 underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
                  : 'p-4 no-underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
              }
            >
              Inschrijven
            </a>
          </Link>
        </li>
        <li className="p-2 transition-all hover:-rotate-2 hover:scale-110 md:px-0">
          <Link href="/contact">
            <a
              className={
                pathname === '/contact'
                  ? 'p-4 underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
                  : 'p-4 no-underline decoration-orange decoration-dotted decoration-4 underline-offset-8'
              }
            >
              contact
            </a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
}

export default Header;
