import Image from 'next/image';
import CheckMarkIcon from '../../assets/images/check.svg';
import QualifiedIcon from '../../assets/images/qualified.svg';
import DiversiteitIcon from '../../assets/images/diversiteit.svg';

function CompanyVision() {
  return (
    <div className="mx-auto max-w-screen-xl pt-12 pb-20">
      <div className="mb-10 flex justify-center font-fries text-5xl">
        <p>Onze visie</p>
      </div>
      <div className="hidden md:inline">
        <div className="mb-4 flex justify-center">
          <div className="flex">
            <div className="flex flex-col items-center px-5 md:w-[250px] lg:w-[300px]">
              <Image src={DiversiteitIcon} alt="Diversiteit" />
              <p className="mt-2 text-center font-fries text-xl">Diversiteit</p>
            </div>
            <div className="flex flex-col items-center px-5 md:w-[250px] lg:w-[300px]">
              <Image src={QualifiedIcon} alt="Diversiteit" />
              <p className="mt-2 text-center font-fries text-xl">
                Pedagogisch
                <br />
                geschoolde monitoren
              </p>
            </div>
            <div className="flex flex-col items-center px-5 md:w-[250px] lg:w-[300px]">
              <Image src={CheckMarkIcon} alt="Diversiteit" />
              <p className="mt-2 text-center font-fries text-xl">
                Waarden staan
                <br />
                centraal
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="md:flex">
          <div className="flex w-full flex-col items-center px-5 md:w-[250px] lg:w-[300px]">
            <div className="flex w-[300px] flex-col items-center px-5 pt-4 pb-2 md:hidden">
              <Image src={DiversiteitIcon} alt="Diversiteit" />
              <p className="mt-2 text-center font-fries text-xl">Diversiteit</p>
            </div>
            <p className="text-justify leading-relaxed">
              Divertido kampen staat garant voor een vakantieaanbod waarbij de
              kinderen centraal staan. Tijdens onze boeiende activiteiten
              vertrekken we steeds vanuit de belevingswereld van de kinderen en
              jongeren. Deze insteek zorgt ervoor dat we inspelen op de
              interesses, noden en context van iedereen. Ieder individu wordt
              hier geprikkeld en uitgedaagd. Voor Divertido kampen is elk kind
              van tel. We zorgen ervoor dat iedereen de kans heeft om zijn eigen
              persoon ten volle te ontwikkelen en iedereen verbinding kan
              vinden. Groepverbindende activiteiten zijn dan ook de norm.
            </p>
          </div>
          <div className="flex w-full flex-col items-center px-5 md:w-[250px] lg:w-[300px]">
            <div className="flex w-[300px] flex-col items-center px-5 pt-12 pb-2 md:hidden">
              <Image src={QualifiedIcon} alt="Diversiteit" />
              <p className="mt-2 text-center font-fries text-xl">
                Pedagogisch
                <br />
                geschoolde monitoren
              </p>
            </div>
            <p className="text-justify leading-relaxed">
              Vanuit beroepservaring of door praktijkervaring zet Divertido
              kampen in op pedagogisch onderbouwde monitoren. De monitoren
              wakkeren de talenten en de motivatie van elk kind aan. Door hun
              enthousiasme, kennis, ervaring, begeestering en betrokkenheid zijn
              ze in staat elk kind ten volle tot ontplooiing te brengen.
            </p>
          </div>
          <div className="flex flex-col items-center px-5 md:w-[250px] lg:w-[300px]">
            <div className="flex w-[300px] flex-col items-center px-5 pt-12 pb-2 md:hidden">
              <Image src={CheckMarkIcon} alt="Diversiteit" />
              <p className="mt-2 text-center font-fries text-xl">
                Waarden staan
                <br />
                centraal
              </p>
            </div>
            <p className="text-justify leading-relaxed">
              Bij Divertido kampen voelt iedereen zich welkom en thuis.
              Basiswaarden als vertrouwen, eerlijkheid, zorgzaamheid en respect
              staan bij Divertido kampen centraal. Wanneer deze waarden ten
              volle nageleefd worden creëer je een basis voor sterke
              vriendschappen en relaties. We zetten in op een gezonde
              levensstijl waarbij lichaam en geest als een uitdagende eenheid
              wordt gezien. Creativiteit, avontuur, kwaliteit, plezier,
              uitdagend spel, leergierigheid en ruimdenkendheid kun je zien als
              de kenmerken van Divertido kampen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyVision;
