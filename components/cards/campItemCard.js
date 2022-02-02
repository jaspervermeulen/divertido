import { LocationMarkerIcon } from '@heroicons/react/outline';

function CampItemCard({ title, name, price, key, available }) {
  return (
    <div className="relative">
      {available ? (
        <p className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 -rotate-6 font-fries text-8xl text-orange">
          Volzet
        </p>
      ) : null}
      <div
        key={key}
        className={`relative rounded-md border-4 border-blue p-4 ${
          available ? 'opacity-20' : null
        }`}
      >
        <p className="mb-5 font-fries text-xl">{title}</p>
        <div className="flex items-center justify-between">
          <div className="flex">
            <LocationMarkerIcon className="h-6 w-6" />
            <p className="ml-1.5">{name}</p>
          </div>
          <p className="font-fries text-2xl">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default CampItemCard;
