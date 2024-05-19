import Moment from "react-moment";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
export default function airbBnbItem({ airbBnb }) {
  return (
    <li className="relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 m-[10px]">
      <Link href={`/listing/${airbBnb?._id}`} className="contents">
        <Image
          className="h-[200px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"
          loading="lazy"
          width={400}
          height={400}
          src={airbBnb?.detailImage}
          alt="image"
        />
        <Moment
          className="absolute top-2 left-2 bg-[#3377cc] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg"
          fromNow
        >
          {airbBnb?.updatedAt}
        </Moment>
        <div className="w-full p-[10px]">
          <div className="flex items-center space-x-1">
            <MdLocationOn className="h-4 w-4 text-green-600" />
            <p className="text-sm mb-[2px] text-gray-500 truncate">
              {airbBnb?.location?.name}
            </p>
          </div>
          <p className="font-semibold m-0 text-xl truncate">{airbBnb?.title}</p>
          <p className="text-[#457b9d] mt-2 font-semibold">
            Ksh {airbBnb?.price?.toLocaleString()}
          </p>
          <div className="flex items-center mt-[10px] space-x-3">
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">
                {airbBnb?.beds > 1
                  ? `${airbBnb?.category?.beds} Beds`
                  : airbBnb?.category?.beds === 1
                  ? `${airbBnb?.category?.beds} Bed`
                  : airbBnb?.category?.beds}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">
                {airbBnb?.baths > 1
                  ? `${airbBnb?.category?.baths} Baths`
                  : airbBnb?.category?.beds === 1
                  ? `${airbBnb?.category?.beds} Bath`
                  : airbBnb?.category?.baths}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              {/* <p className="font-bold text-xs">
                {airbBnb.sf > 1 ? `${airbBnb.sf} sqf` : "1 sqf"}
              </p> */}
            </div>
          </div>
        </div>
      </Link>
      {/* {onDelete && (
        <FaTrash
          className="absolute bottom-2 right-2 h-[14px] cursor-pointer text-red-500"
          onClick={() => onDelete(airbBnb.id)}
        />
      )}
      {onEdit && (
        <MdEdit
          className="absolute bottom-2 right-7 h-4 cursor-pointer "
          onClick={() => onEdit(airbBnb.id)}
        />
      )} */}
    </li>
  );
}