
import {api} from '~/utils/api';
import React from 'react';



const SearchItem = () => {
   const hotels = api.hotel.getAll.useQuery();
  return (
    <div>
      {hotels.map((hotel :Object ) => {
        
            <div>{hotel.data?.location}</div>
        //   <img src={hotel.image} alt="" className="SearchItemImg w-[200px] h-[200px] object-cover" />
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
        
      })}
    </div>
  );
};

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


