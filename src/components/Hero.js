"use client";
// component to be rendered at the client side use : use client
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
const Hero = () => {
  let settings = {
    dots: true,
    infinite: true,
    // brought from react-slick.neostack.com check out from there
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slideData = [

    {
      id: 0,
      img: "/banner-2.jpg",
      title: "Tending Now",
      mainTitle: "GO Gaming",
      price: "₹1200",
    },
    {
      id: 1,
      img: "/banner-3.jpg",
      title: "Sale Offer",
      mainTitle: "50 db ANC",
      price: "₹4000",
    },
    {
      id: 2,
      img: "/banner-4.jpg",
      title: "premium series",
      mainTitle: "GET YOURS",
      price: "₹1999",
    },
    {
        id: 3,
        img:"/banner-5.jpg",
        title: "Trending Item",
        mainTitle: "GET YOUR ANC",
        price: "₹1500",
      },
  ];

  return (
    <div >
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => {
            return (
              <Slide
                key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default Hero;
