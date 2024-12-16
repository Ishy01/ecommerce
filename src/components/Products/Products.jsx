import React from 'react';
import women from '../../assets/women/women.png';
import women2 from '../../assets/women/women2.jpg';
import women3 from '../../assets/women/women3.jpg';
import women4 from '../../assets/women/women4.jpg';
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
  {
    id: 1,
    img: women,
    title: 'Women Ethnic',
    rating: 5.0,
    author: 'White',
    aosDelay: '0',
  },
  {
    id: 2,
    img: women2,
    title: 'Women Western',
    rating: 4.5,
    author: 'Red',
    aosDelay: '200',
  },
  {
    id: 3,
    img: women3,
    title: 'Goggles',
    rating: 4.7,
    author: 'Brown',
    aosDelay: '400',
  },
  {
    id: 4,
    img: women4,
    title: 'Printed T-Shirt',
    rating: 4.4,
    author: 'Yellow',
    aosDelay: '600',
  },
  {
    id: 5,
    img: women2,
    title: 'Fashion T-Shirt',
    rating: 4.5,
    author: 'Pink',
    aosDelay: '800',
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for you</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, aliquam!
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card Section */}
            {ProductsData.map((data) => (
              <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3">
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.author}</p> {/* Fixed key from data.color to data.author */}
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" /> {/* Added star color */}
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
