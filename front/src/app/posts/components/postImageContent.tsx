import React from 'react';
import { Image } from '@/components/ui/image';
import ImgPostLayout from './imageComps/imgPostLayout';
import { Swiper, SwiperSlide, Navigation } from '@/components/ui/slider';
import { ArrowNext, ArrowPrev } from '@/components/icons';

type Props = {};

const sampleData = [
  {
    image: '/img/img5.jpg',
  },
  {
    image: '/img/img1.jpg',
  },
  {
    image: '/img/img6.jpg',
  },
  {
    image: '/img/img1.jpg',
  },
];

const offerSliderBreakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  580: {
    slidesPerView: 2,
    spaceBetween: 16,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 16,
  },
  1920: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const PostImageContent = (props: Props) => {
  return (
    <div className=" object-center pt-6">
      <Swiper
        id="offer"
        breakpoints={offerSliderBreakpoints}
        modules={[Navigation]}
        navigation={{
          nextEl: '.next',
          prevEl: '.prev',
        }}
      >
        <div className=" grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 ms:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
          {/* <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3"> */}
          {sampleData.map((i, index) => (
            <SwiperSlide key={index}>
              <ImgPostLayout>
                <Image
                  key={index}
                  className="block h-full w-full rounded-lg object-cover object-center "
                  src={i.image}
                  alt={'sample'}
                  layout="fill"
                />
              </ImgPostLayout>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      
    </div>
  );
};

export default PostImageContent;
