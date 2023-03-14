import React, { Component } from 'react';
import './FirstSection.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination , Autoplay , Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

class FristSection extends Component {
    render() {
        return (
            <>
                <div className='home'>
                    {/* IMG - HOME  */}
                    <img src='/Images/home1.jpg' alt=''/>
                    {/* TEXT - HOME */}
                    <div className='text-home'>
                        <h1>WHERE DO YOU WANT TO GO ?</h1>

                        <div>

                        <div className='img1'>
                            <img src='/Images/home2.jpg' alt=''/>
                        </div>

                        <div className='img2'>
                            <img src='/Images/home3.jpg' alt=''/>
                        </div>

                        </div>
                    </div>

                </div>

                {/* Mobile */}
                <div className='home-mobile'>
                {/* Titel in mobile */}
                <div className='titleHome'>
                <h1>WHERE DO YOU WANT TO GO ?</h1>
                </div>
                {/* Swipper in Mobile */}
                <Swiper
                pagination={{
                dynamicBullets: true,
                clickable: true,
                }}
                autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                navigation={true}
                className="mySwiper"
                >

                <SwiperSlide>
                <img src='/Images/home1.jpg' alt=''/>
                </SwiperSlide>
                <SwiperSlide>
                <img src='/Images/home2.jpg' alt=''/>
                </SwiperSlide>
                <SwiperSlide>
                <img src='/Images/home3.jpg' alt=''/>
                </SwiperSlide>

                </Swiper>
                </div>

            </>
        )
    }
}

export default FristSection;