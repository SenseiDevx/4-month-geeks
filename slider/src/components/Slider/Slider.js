import React, {useEffect, useState} from 'react';
import {Autoplay, Navigation, Pagination, Scrollbar, EffectCoverflow} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from "swiper/react";

const Slider = () => {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <Swiper
                className='blocks'
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                autoplay={{delay: 10, disableOnInteraction: false}}
                spaceBetween={22}
                slidesPerView={3}
                speed={2000}
                loop={true}
                navigation
                coverflowEffect={{rotate: 0, stretch: 0, depth: 100, modifier: 2.5}}
                pagination={{el: '', clickable: true}}
                modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow]}
            >
                {
                    posts.map(i => <SwiperSlide
                        className='block'
                        style={{width: 387, height: 455}}>
                        <div className='all'>
                            <div className='img'>
                                <img style={{width: 150, height: 150}} src={i?.image} alt="qwerty"/>
                            </div>
                            <h2 className='h2'>{i?.title}</h2>
                            <h3 className='h3'>{i?.price} $</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Slider;