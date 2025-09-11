import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import SearchBar from "./SearchBar";

export default function LocSer() {
  return (
    <>
      <div className="w-full bg-orange-500 pt-30 pb-20">
        {/* heading */}
        <div    className="text-center text-white mb-4">
          <h2 className="text-xl font-semibold">
            Dine local, save more.
            <span className="block text-lg font-normal">Great deals, just around the corner.</span>
          </h2>
        </div>

            {/* search option */}

        <div className="flex justify-center gap-3">
            
                <div className="flex items-center bg-white px-3 rounded-sm border-amber-50 shadow-md">
                    <FaMapMarkerAlt />
                    <select name="" id="">
                        <option value="">select loction</option>
                        <option value="">New york</option>
                        <option value="">Los angels</option>
                        <option value="">Chicago</option>
                    </select>
                </div>

                <div>
                    <SearchBar/>
                </div>


        </div>
      </div>
    </>
  );
}
