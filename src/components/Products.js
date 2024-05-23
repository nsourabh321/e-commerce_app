import React from 'react'
import ProductCard from './ProductCard';


const productsData = [
    {
      img: "/p1.webp",
      title: "Earbuds",
      desc: "Daily essential",
      rating: 4,
      price: "999.00",
    },
    {
      img: "/p2.webp",
      title: "Earbuds",
      desc: "Old but Gold",
      rating: 5,
      price: "1199.00",
    },
    {
      img: "/p4.webp",
      title: "Earbuds",
      desc: "Ear accessory",
      rating: 3,
      price: "799.00",
    },
    {
      img: "/p3.webp",
      title: "Earbuds",
      desc: "Sleek and Tendy ",
      rating: 4,
      price: "450.00",
    },
    {
      img: "/p5.webp",
      title: " Gaming Earbuds",
      desc: "Get that kill",
      rating: 3,
      price: "1299.00",
    },
    {
      img: "/p6.webp",
      title: "Earbuds",
      desc: "The premium ",
      rating: 4,
      price: "4599.00",
    },
    {
      img: "/p11.webp",
      title: "Lunar Ring",
      desc: "Tech Revolution",
      rating: 4,
      price: "999.00",
    },
    {
        img: "/p8.webp",
        title: "Earbuds",
        desc: "Pocket fil earbuds",
        rating: 4,
        price: "1299.00",
      },
  ];

const Products= ({img,title,desc,rating,price}) => {
  return (
    <div>
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">New Products</h2>
            <div className="grid gridl-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
            {productsData.map((item, index) => {
            return (
              <ProductCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
              />
            );
          })}
            </div>
        </div>
    </div>
  )
}

export default Products