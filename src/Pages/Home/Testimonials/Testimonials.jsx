import SectionTitles from "../../../Components/SectionTitles/SectionTitles";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
import quote from "../../../assets/home/quote-left.png"

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {

        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    return (
        <section className="my-20">
            <SectionTitles subHeading="What Our Client Say" heading="Testimonials"></SectionTitles>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}>

                        <div className="flex flex-col items-center my-16 mx-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                   <img className="h-20 mt-2" src={quote} alt="" />

                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;