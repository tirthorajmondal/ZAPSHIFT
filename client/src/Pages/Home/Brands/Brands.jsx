import logo1 from '../../../assets/brands/casio.png'
import logo2 from '../../../assets/brands/amazon.png'
import logo3 from '../../../assets/brands/moonstar.png'
import logo4 from '../../../assets/brands/start.png'
import logo5 from '../../../assets/brands/start-people 1.png'
import logo6 from '../../../assets/brands/randstad.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Brands = () => {

    const logos = [logo1, logo2, logo3, logo4, logo5, logo6]

    return (
        <section className='my-24 '>
            <h3 className='font-extrabold text-3xl text-secondary text-center mb-10'>We've helped thousands of sales teams</h3>
            <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                spaceBetween={40}
                loop={true}
                freeMode={true}
                speed={2000}          // higher = slower smooth scroll
                autoplay={{
                    delay: 0,           // important for marquee effect
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,

                }}
                className="max-w-10/12 max-h-14">

                {
                    logos.map((logo, index) => <SwiperSlide className='max-w-max  flex justify-center items-center'><img className='h-12 opacity-70 saturate-80 hover:opacity-100 hover:saturate-150 transition-all duration-300'
                        key={index} src={logo} /></SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Brands;