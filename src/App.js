import "./styles.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper";
import "../node_modules/swiper/swiper-bundle.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import Home from "./pages";

SwiperCore.use([Navigation, Pagination, Thumbs]);

function App() {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // const images = [image1, image2, image3, image4, image5, image6];

  // const slides = [];

  // for (let i = 0; i < 5; i++) {
  //   slides.push(
  //     <SwiperSlide key={`slide-${i}`} tag="li">
  //       <img
  //         id="main-carousel"
  //         src={images[i]}
  //         alt={`Slide ${i}`}
  //         style={{ listStyle: "none" }}
  //         width={500}
  //         height={512}
  //       />
  //     </SwiperSlide>
  //   );
  // }

  // const thumbs = [];

  // for (let i = 0; i < 6; i++) {
  //   thumbs.push(
  //     <SwiperSlide key={`thumb-${i}`} tag="li">
  //       <img src={images[i]} alt={`Thumb ${i}`} width={166} height={170} />
  //     </SwiperSlide>
  //   );
  // }

  return (
    <Router>
      <Home />
      {/* <React.Fragment>
        <img id="designs" src={desgins} alt={"designs"} />
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
      </React.Fragment> */}
    </Router>
    /* <Banner /> */
  );
}

export default App;
