import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const AboutUs = () => {
  const images = [
    '/images/image4.jpeg',
    '/images/image1.jpg',
    '/images/image2.jpeg',
    '/images/image3.jpeg',
  ];

  return (
    <section id="about-us" className="py-24 bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Swiper
            modules={[Pagination, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="h-96 w-full overflow-hidden rounded-lg shadow-lg">
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
            We’re Ariane and Karan, two average 30-year-olds who grew up on the East Coast, met in college at University of Maryland and currently live in Brooklyn while both working corporate tech jobs. After getting engaged July of 2023 and riding cloud 9 for a few months, we finally faced the reality that we had no idea what the next step was. What kind of wedding do we even want? Where do we start? And the big one - how much is this going to cost? Not to mention the elephant in the room, how to fuse our two cultures while still staying true to ourselves.
          </p>
          <p className="text-lg leading-relaxed">
            Like the analytical, thorough, uptight east coasters we are….we embarked on this journey entirely ourselves and really took the reins on the whole process. We got really scrappy along the way, talked to tons of different people and walked away with a lot of learnings that we don’t want to gatekeep. If you’re in the shoes of our past selves, let’s chat!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;