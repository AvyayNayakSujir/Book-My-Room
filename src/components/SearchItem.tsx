import { api } from "~/utils/api";
import React from "react";

const SearchItem = () => {
  const hotels = api.hotel.getAll.useQuery();
  return (
    <div>
      {
        hotels.data?.map((hotel) => {
          return (
            <div>
              <h1 key={hotel.id}>{hotel.name}</h1>
              <div>
                <div>
                  {" "}
                  {hotel.city}, {hotel.country}
                </div>
                <div> {hotel.description}</div>
              </div>
              <br />
            </div>
          );
        })
      }
      
      {/* <div className="siDesc flex flex-col gap-[10px] flex-2">
            <h1 className="siTitle text-[20px] text-[#0071c2]">{item.title}</h1>
            <span className="siDistance text-[20px]">{item.distance}</span>
            <span className="siTaxi text-[20px] bg-[#008009] text-white w-[max-content] p-[5px] rounded-[5px]">{item.taxi}</span>
            <span className="siSubtitle text-[20px] font-bold">{item.subtitle}</span>
            <span className="siFeatures text-[12px]">{item.features}</span>
            <span className="siCancel text-[16px] bg-[#008009] font-bold">{item.cancel}</span>
            <span className="siCancelSubtitle text-[12px] bg-[#008009]">{item.cancelSubtitle}</span>
          </div>
          <div className="siDetails flex-1 flex flex-col justify-between">
            <div className="siRating flex justify-between">
              <span className="font-[500]">{item.ratingLabel}</span>
              <button className="bg-[#003580] text-white p-[5px] font-bold">{item.rating}</button>
            </div>
            <div className="siDetailTexts text-right flex flex-col gap-[5px]">
              <span className="siPrice text-[24px]">{item.price}</span>
              <span className="siGst text-[12px] text-gray-400">{item.gst}</span>
              <button className="siButton bg-[#0071c2] text-whitefont-bold py-10 px-5 border-none cursor-pointer rounded-[5px]">{item.buttonText}</button>
            </div>
          </div> */}
    </div>
  );
};
