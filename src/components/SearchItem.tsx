import { api } from "~/utils/api";
import React from "react";

export default function SearchItem() {
  const hotels = api.hotel.getAll.useQuery();
  
  return (
    <div>
      {hotels.data?.map((hotel) => {
        return (
          <div className="searchItem border border-gray-300 p-[10px] rounded-[5px] flex justify-between gap-[20px] mb-[20px]">
            <img src={hotel.image} alt="" className="SearchItemImg w-[200px] h-[200px] object-cover" />
        <div className="siDesc flex-2 flex flex-col gap-[10px]">
          <h1 className="siTitle text-[20px] text-[#0071c2]">{hotel.name}</h1>
          <span className="siDistance text-[20px]">{hotel.distance}</span>
          <span className="siTaxi w-[max-content] rounded-[5px] bg-[#008009] p-[5px] text-[20px] text-white">
            Free Airport Taxi
          </span>
          <span className="siSubtitle text-[20px] font-bold">
            {hotel.description}
          </span>
          <span className="siFeatures text-[12px]">{hotel.ammenities}</span>
          <span className="siCancel bg-[#008009] text-[16px] font-bold">
          Free Cancellation
          </span>
          <span className="siCancelSubtitle bg-[#008009] text-[12px]">
          You can cancel later! So lock in this great deal today
          </span>
        </div>
        <div className="siDetails flex flex-1 flex-col justify-between">
          <div className="siRating flex justify-between">
            <span className="font-[500]">{hotel.ratingLabel}</span>
            <button className="bg-[#003580] p-[5px] font-bold text-white">
              {hotel.rating}
            </button>
          </div>
          <div className="siDetailTexts flex flex-col gap-[5px] text-right">
            <span className="siPrice text-[24px]">{hotel.initialPrice}</span>
            <span className="siGst text-[12px] text-gray-400">Inclusive of GST</span>
            <button className="siButton text-whitefont-bold cursor-pointer rounded-[5px] border-none bg-[#0071c2] px-5 py-10">
              Check Out
            </button>
          </div>
        </div>
      </div>
        );
      })}
      
    </div>
  );
}

// const SearchItemList = () => {

//     const items = [
//       {
//         image: "taj.jpg",
//         title: "Grand Hotel du Palais Royal",
//         distance: "600m from centre",
//         taxi: "Free Airport Taxi",
//         subtitle: "Studio Apartment with air Conditioning",
//         features: "Entire Studio . 2 bathroom . 2 bed",
//         cancel: "Free Cancellation",
//         cancelSubtitle: "You can cancel later! So lock in this great deal today",
//         ratingLabel: "Excellent",
//         rating: "9.1",
//         price: "18949/-",
//         gst: "Inclusive of GST",
//         buttonText: "Check Availability"
//       },
//       {
//         image: "siu.jpg",
//         title: "Four Seasons Hotel George V",
//         distance: "200m from centre",
//         taxi: "Free Airport Taxi",
//         subtitle: "Studio Apartment with air Conditioning",
//         features: "Entire Studio . 2 bathroom . 2 bed",
//         cancel: "Free Cancellation",
//         cancelSubtitle: "You can cancel later! So lock in this great deal today",
//         ratingLabel: "Excellent",
//         rating: "9.1",
//         price: "18949/-",
//         gst: "Inclusive of GST",
//         buttonText: "Check Availability"
//       },
//       {
//         image: "taj.jpg",
//         title: "Grand Set",
//         distance: "600m from centre",
//         taxi: "Free Airport Taxi",
//         subtitle: "Studio Apartment with air Conditioning",
//         features: "Entire Studio . 2 bathroom . 2 bed",
//         cancel: "Free Cancellation",
//         cancelSubtitle: "You can cancel later! So lock in this great deal today",
//         ratingLabel: "Excellent",
//         rating: "9.1",
//         price: "18949/-",
//         gst: "Inclusive of GST",
//         buttonText: "Check Availability"
//       },
//       {
//         image: "taj.jpg",
//         title: "Grand Set",
//         distance: "600m from centre",
//         taxi: "Free Airport Taxi",
//         subtitle: "Studio Apartment with air Conditioning",
//         features: "Entire Studio . 2 bathroom . 2 bed",
//         cancel: "Free Cancellation",
//         cancelSubtitle: "You can cancel later! So lock in this great deal today",
//         ratingLabel: "Excellent",
//         rating: "9.1",
//         price: "18949/-",
//         gst: "Inclusive of GST",
//         buttonText: "Check Availability"
//       },
//       {
//         image: "taj.jpg",
//         title: "Grand Set",
//         distance: "600m from centre",
//         taxi: "Free Airport Taxi",
//         subtitle: "Studio Apartment with air Conditioning",
//         features: "Entire Studio . 2 bathroom . 2 bed",
//         cancel: "Free Cancellation",
//         cancelSubtitle: "You can cancel later! So lock in this great deal today",
//         ratingLabel: "Excellent",
//         rating: "9.1",
//         price: "18949/-",
//         gst: "Inclusive of GST",
//         buttonText: "Check Availability"
//       },
//       {
//         image: "taj.jpg",
//         title: "Grand Set",
//         distance: "600m from centre",
//         taxi: "Free Airport Taxi",
//         subtitle: "Studio Apartment with air Conditioning",
//         features: "Entire Studio . 2 bathroom . 2 bed",
//         cancel: "Free Cancellation",
//         cancelSubtitle: "You can cancel later! So lock in this great deal today",
//         ratingLabel: "Excellent",
//         rating: "9.1",
//         price: "18949/-",
//         gst: "Inclusive of GST",
//         buttonText: "Check Availability"
//       }
//     ];

//     return <SearchItem items={items} />; // Ensure that 'items' prop is passed
//   };

// export default SearchItemList;
