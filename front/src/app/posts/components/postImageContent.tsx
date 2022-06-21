import React from 'react';
import { Image } from '@/components/ui/image';
import ImgPostLayout from './imageComps/imgPostLayout';
import { Swiper, SwiperSlide, Navigation } from '@/components/ui/slider';
import { ArrowNext, ArrowPrev } from '@/components/icons';
import { UPLOAD_LINK } from '@/constants/uploads';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type Props = {
  attachments?: any;
};
// === do not remove ===
// const offerSliderBreakpoints = {
//   320: {
//     slidesPerView: 1,
//     spaceBetween: 0,
//   },
//   580: {
//     slidesPerView: 2,
//     spaceBetween: 16,
//   },
//   1024: {
//     slidesPerView: 3,
//     spaceBetween: 16,
//   },
//   1920: {
//     slidesPerView: 4,
//     spaceBetween: 24,
//   },
// };
// === do not remove ===

const PostImageContent = ({ attachments }: Props) => {
  return (
    <div className=" object-center pt-2 pb-2">
      <div className="relative">
        <Swiper
          id="POST"
          //TODO: need discussion
          // loop={true}
          // breakpoints={offerSliderBreakpoints}
          modules={[Navigation]}
          slidesPerView={attachments.length == 1 ? 1 : 2}
          spaceBetween={16}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // navigation={{
        //   nextEl: '.next',
        //   prevEl: '.prev',
        // }}

        >
          <div className='bg-slate-200 h-full'>
            {attachments.map((i: any, index: number) => (
              <SwiperSlide key={index}>
                <div className=''>

                  {/* <Image
                    key={index}
                    className="w-full h-auto rounded-lg object-cover object-center"
                    // className="block h-full w-full rounded-lg object-cover object-center "
                    src={require('../../../../uploads/' + i.path) ? require('../../../../uploads/' + i.path)  : ''}
                    // src={i.image}
                    alt={'sample'}
                    layout="responsive"
                  /> */}
                  <img
                    key={index}
                    className="w-full h-auto rounded-lg object-cover object-center"
                    src={UPLOAD_LINK(i.path)}
                    // src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                    alt="new"
                  />

                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default PostImageContent;
