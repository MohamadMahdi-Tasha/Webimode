// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import IconComponent from "@/chunk/iconComponent";
import {Dispatch, ReactNode, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import SliderPaginationComponent from "@/chunk/sliderPaginationCompont";
import ProjectComponent from "@/component/projectComponent";
import ProjectImage from '@/public/img/blog/img-random.png';
import 'swiper/css';

// Creating and exporting fifth section of work samples page as defaultt
export default function FifthSectionComponent():ReactNode {
    // Defining states of component
    const [activeSliderIndex, setActiveSliderIndex]:[number, Dispatch<number>] = useState(0);
    const [activeSliderIndexMQ, setActiveSliderIndexMQ]:[number, Dispatch<number>] = useState(0);

    // Returning JSX 
    return (
        <section className="lg:py-[64px] lg:mt-[249px] mt-[50px] lg:mb-[161px] mb-[50px] bg-gradient-to-r from-themeBlue to-darketThemeBlue">
            <div className="container p-[20px]">
                <header className="flex items-center lg:justify-between justify-center gap-[10px] flex-wrap lg:mb-[44px] mb-[24px]">
                    <h4 className="lg:text-[36px] text-[20px] font-normal text-white lg:text-start text-center">
                        <span className="font-semibold ml-[1ch] inline-block relative">
                            خوش قیمت ترین
                            <span className={'text-white absolute right-full bottom-full lg:flex hidden flex-col w-[30px]'}>
                                <span className={'self-start'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                            </span>
                        </span>
                        سایت های فروشگاهی
                    </h4>
                    <div className="lg:flex hidden items-center gap-[24px]">
                        <button 
                            data-active={(activeSliderIndex !== 0)} 
                            id="work-5-section-slider-prev-btn" 
                            className="slider-prev-next-btn-blue"
                        >
                            <IconComponent name="chevron-right" size={16} />
                        </button>
                        <button 
                            data-active={(activeSliderIndex !== 16)} 
                            id="work-5-section-slider-next-btn" 
                            className="slider-prev-next-btn-blue"
                        >
                            <IconComponent name="chevron-left" size={16} />
                        </button>
                    </div>
                </header>
                <main>
                    <div className="lg:block hidden">
                        <Swiper
                            initialSlide={activeSliderIndex}
                            onSlideChange={(event) => setActiveSliderIndex(event.activeIndex)}
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerGroup={4}
                            slidesPerView={4}
                            navigation={{
                                prevEl: '#work-5-section-slider-prev-btn',
                                nextEl: '#work-5-section-slider-next-btn'
                            }}
                        >
                            <SwiperSlide><ProjectComponent ratingTheme="blue" theme="white" img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent ratingTheme="blue" theme="white" img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent ratingTheme="blue" theme="white" img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent ratingTheme="blue" theme="white" img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent ratingTheme="blue" theme="white" img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent ratingTheme="blue" theme="white" img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent ratingTheme="blue" theme="white" img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent ratingTheme="blue" theme="white" img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent ratingTheme="blue" theme="white" img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent ratingTheme="blue" theme="white" img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent ratingTheme="blue" theme="white" img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent ratingTheme="blue" theme="white" img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent ratingTheme="blue" theme="white" img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent ratingTheme="blue" theme="white" img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent ratingTheme="blue" theme="white" img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent ratingTheme="blue" theme="white" img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent ratingTheme="blue" theme="white" img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent ratingTheme="blue" theme="white" img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent ratingTheme="blue" theme="white" img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent ratingTheme="blue" theme="white" img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        </Swiper>
                        <SliderPaginationComponent theme="white" activeIndex={activeSliderIndex} slidesPerView={4} slidesCount={5} />
                    </div>
                    <div className="lg:hidden block">
                        <Swiper
                            initialSlide={activeSliderIndexMQ}
                            onSlideChange={(event) => setActiveSliderIndexMQ(event.activeIndex)}
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerGroup={1}
                            slidesPerView={1}
                            navigation={{
                                prevEl: '#work-5-section-slider-prev-btn-mq',
                                nextEl: '#work-5-section-slider-next-btn-mq'
                            }}
                        >
                            <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        </Swiper>
                        <SliderPaginationComponent 
                            hasButtons 
                            prevBtnId="work-5-section-slider-prev-btn-mq" 
                            nextBtnId="work-5-section-slider-next-btn-mq" 
                            theme="white" 
                            activeIndex={activeSliderIndexMQ} 
                            slidesPerView={1} 
                            slidesCount={5} 
                        />
                    </div>
                </main>
            </div>
        </section>
    );
}