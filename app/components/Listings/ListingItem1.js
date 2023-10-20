import Moment from "react-moment";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
export default function ListingItem({ listing }) {
  return (
    <li className="relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 m-[10px]">
      <Link href={`/listing/forrentdetails/${listing.id}`} className="contents">
        <Image
          className="h-[200px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"
          loading="lazy"
          width={400}
          height={400}
          src={listing.images[0]}
          alt="image"
        />
        <Moment
          className="absolute top-2 left-2 bg-[#3377cc] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg"
          fromNow
        >
          {listing.time}
        </Moment>
        <div className="w-full p-[10px]">
          <h2 className="font-semibold text-lg mb-[4px] text-black truncate">
            {listing.heading1}
          </h2>
          <div className="flex items-center space-x-1">
            <MdLocationOn className="h-4 w-4 text-green-600" />
            <p className="text-sm mb-[2px] text-gray-500 truncate">
              {listing.heading2}
            </p>
          </div>
          <p className="font-semibold m-0 text-xl truncate">{listing.name}</p>
          <p className="text-[#457b9d] mt-2 font-semibold">
            {listing.price}
            {listing.type === "Rent" && " / month"}
          </p>
          <div className="flex items-center mt-[10px] space-x-3">
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">
                {listing.beds > 1
                  ? `${listing.beds} Beds`
                  : listing.beds === 1
                  ? `${listing.beds} Bed`
                  : listing.beds}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">
                {listing.baths > 1
                  ? `${listing.baths} Baths`
                  : listing.beds === 1
                  ? `${listing.beds} Bath`
                  : listing.baths}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              {/* <p className="font-bold text-xs">
                {listing.sf > 1 ? `${listing.sf} sqf` : listing.sf}
              </p> */}
            </div>
          </div>
        </div>
      </Link>
      {/* {onDelete && (
        <FaTrash
          className="absolute bottom-2 right-2 h-[14px] cursor-pointer text-red-500"
          onClick={() => onDelete(listing.id)}
        />
      )}
      {onEdit && (
        <MdEdit
          className="absolute bottom-2 right-7 h-4 cursor-pointer "
          onClick={() => onEdit(listing.id)}
        />
      )} */}
    </li>
  );
}
