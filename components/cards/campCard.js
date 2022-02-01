import Image from 'next/image';
import Link from 'next/link';

function CampCard({
  image,
  title,
  description,
  slug,
  borderColor,
  buttonTextColor,
}) {
  return (
    <div key={slug} className={`rounded-lg border-8 p-6 border-${borderColor}`}>
      <Image src={image} alt="Zeebrugge" layout="responsive" />
      <p className="mt-4 font-fries text-2xl">{title}</p>
      <p>{description}</p>
      <Link href="/">
        <a
          className={`text-fries mt-6 flex items-center justify-center rounded-sm ${buttonTextColor} py-3 font-fries text-xl bg-${borderColor} hover:opacity-60`}
        >
          Ontdek dit kamp
        </a>
      </Link>
    </div>
  );
}

export default CampCard;
