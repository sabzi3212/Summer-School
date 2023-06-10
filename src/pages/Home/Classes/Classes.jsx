import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import img1 from '../../../assets/images/baseball.jpg'
import img2 from '../../../assets/images/cricket.jpg'
import img3 from '../../../assets/images/rugby.jpg'
import img4 from '../../../assets/images/Badminton.jpg'
const Classes = () => {
    return (
        <section className="mb-10">
            <h1 className="text-3xl text-center text-orange-300 mb-8 mt-8">Featured Sports</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="h-[300px] w-[400px]" src={img1} alt="" />
                    <h3 className='text-3xl -mt-14 text-white uppercase text-center'>Baseball</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-[300px] w-[400px]" src={img2} alt="" />
                    <h3 className='text-3xl -mt-14 text-white uppercase text-center'>Cricket</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-[300px] w-[400px]" src={img3} alt="" />
                    <h3 className='text-3xl -mt-14 text-white uppercase text-center'>Rugby</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-[300px] w-[400px]" src={img4} alt="" />
                    <h3 className='text-3xl -mt-14 text-white uppercase text-center'>Badminton</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Classes;