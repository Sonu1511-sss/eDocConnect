// components/VideoSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const VideoSlider = () => {
  const videos = [
    'src/assets/Slider.mp4', // Use forward slashes here
  ];

  return (
    <section className="max-w-4xl mx-auto my-12 px-4">
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="h-[21rem] rounded-xl overflow-hidden bg-indigo-100 shadow-lg"
    >
      {videos.map((videoUrl, index) => (
        <SwiperSlide key={index}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
  );
};

export default VideoSlider;
