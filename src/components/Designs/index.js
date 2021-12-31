import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper";
import "../../../node_modules/swiper/swiper-bundle.css";
import image1 from "../../images/1.png";
import image2 from "../../images/2.png";
import image3 from "../../images/3.png";
import image4 from "../../images/4.png";
import image5 from "../../images/5.png";
import desgins from "../../images/designs-text.png";
import { DesignsContainer, DesignsWrapper } from "./DesignsElements";

SwiperCore.use([Navigation, Pagination, Thumbs]);

const Designs = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [image1, image2, image3, image4, image5];

  const slides = [];

  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          class="main-carousel"
          src={images[i]}
          alt={`Slide ${i}`}
          style={{ listStyle: "none" }}
        />
      </SwiperSlide>
    );
  }

  const thumbs = [];

  for (let i = 0; i < 5; i++) {
    thumbs.push(
      <SwiperSlide key={`thumb-${i}`} tag="li">
        <img class="thumbs" src={images[i]} alt={`Thumb ${i}`} />
      </SwiperSlide>
    );
  }
  return (
    <React.Fragment>
      <DesignsContainer>
        <DesignsWrapper>
          <img id="designs" src={desgins} alt={"designs"} />
          <div>
            <Swiper
              id="main"
              tag="section"
              wrapperTag="ul"
              navigation
              pagination
              spaceBetween={0}
              slidesPerView={1}
              thumbs={{ swiper: thumbsSwiper }}
            >
              {slides}
            </Swiper>
          </div>
          <div id="thumbs">
            <Swiper
              id="thumbs"
              spaceBetween={5}
              slidesPerView={3}
              onSwiper={setThumbsSwiper}
            >
              {thumbs}
            </Swiper>
          </div>
        </DesignsWrapper>
      </DesignsContainer>
    </React.Fragment>
  );
};

export default Designs;
