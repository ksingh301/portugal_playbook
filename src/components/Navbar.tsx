import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const AboutUs = () => {
  const images = [
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2ODk5MjY0NzA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2ODk5MjY0NzA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2ODk5MjY0NzA&ixlib=rb-1.2.1&q=80&w=1080',
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="custom-size overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full md:w-1/2 p-8 text-white">
          <h2 className="text-5xl font-extrabold mb-6">About Us</h2>
          <p className="text-lg mb-4 leading-relaxed">
            We are a team of dedicated professionals committed to providing exceptional service and creating memorable experiences.
          </p>
          <p className="text-lg leading-relaxed">
            Our journey began in [Year], and we have been passionate about delivering quality and excellence ever since.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;