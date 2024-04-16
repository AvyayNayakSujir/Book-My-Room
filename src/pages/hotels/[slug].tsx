
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import MailList from "../../components/MailList";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);



  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];


  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer flex flex-col items-center mt-[20px]">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close absolute top-[20px] right-[20px] text-[30px] text-gray-300 cursor-pointer"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow m-[20px] text-[50px] text-gray-300 cursor-pointer"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper w-full h-full flex justify-center items-center">
              <img src="taj.jpg" alt="" className="sliderImg w-4/5 h-[80vh]" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow m-[20px] text-[50px] text-gray-300 cursor-pointer"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper w-full max-w-[1024px] flex flex-col gap-[10px] relative">
          <button className="bookNow absolute top-[10px] right-0 border-none py-[10px] px-[20px] bg-[#0071c2] text-white font-bold rounded-[5px] cursor-pointer">Reserve or Book Now!</button>
          <h1 className="hotelTitle text-[24px] font-bold">Tower Street Apartments</h1>
          <div className="hotelAddress text-[12px] flex items-center gap-[10px]">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance text-[#0071c2] font-[500]">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight text-[#008009] font-[500]">
            Book a stay over ₹100 at this property and get a free airport taxi
          </span>
          <div className="hotelImages flex flex-wrap justify-between">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper w-[33%] pb-1" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg w-full object-cover cursor-pointer rounded-lg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails flex justify-between gap-[20px] mt-[20px]">
            <div className="hotelDetailsTexts flex-[3]">
              <h1 className="hotelTitle text-[24px] font-bold">Stay in the heart of City</h1>
              <p className="hotelDesc font-[14px] mt-[20px]">
                Tower Street Apartments offer a modern and luxurious urban living experience in the heart of the city. With sleek architectural design and premium amenities, these apartments provide residents with comfort, convenience, and style. From spacious layouts to panoramic views of the city skyline, Tower Street Apartments redefine city living. Whether you're relaxing in the rooftop garden or enjoying the state-of-the-art fitness center, every aspect of these apartments is designed to enhance your lifestyle. Located in a vibrant neighborhood with easy access to dining, shopping, and entertainment options, Tower Street Apartments offer the perfect blend of sophistication and urban living.
              </p>
            </div>
            <div className="hotelDetailsPrice flex-[1] bg-[#ebf3ff] p-[20px] flex flex-col gap-[20px] rounded-lg">
              <h1 className="text-[18px] text-[#555] font-bold">Perfect for a 9-night stay!</h1>
              <span className="text-[14px]">
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2 className="font-[500]">
                <b>₹945</b> (9 nights)
              </h2>
              <button className="border-none py-[10px] px-[20px] bg-[#0071c2] text-white font-bold cursor-pointer rounded-[5px]">Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <div className="text mt-[20px]"></div>

        <Footer />
      </div>
    </div>
  );
};

export default Hotel;