import React from "react";
import styles from "./Testimonials.module.sass";

import Pic1 from "/src/assets/pages_images/image 3.png";
import Pic2 from "/src/assets/pages_images/image 5.png";
import Testimonial from "./Testimonial";

// Imports for carousel:
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  const [isMobile, setIsMobile] = React.useState(
    () => window.innerWidth < 1024
  );
  const testimonialsList = [
    {
      name: "Renata G.",
      comments: `Ótimo lugar, ótimos preços, pessoas
    comprometidas, sem falar no visual que é
    muito sofisticado, com um cascata, ambiente climatizado, recomendo a todas as noivinhas.
     Casamento é um dos momentos mais
    importantes na vida de uma mulher, não faça
    em qualquer ambiente, antes de qualquer
    coisa certifique-se de que está fazendo no
    melhor lugar, não vá por preço, porque muitas
    vezes o barato sai caro`,
      image: Pic1,
    },
    {
      name: "Renata G.",
      comments: `Ótimo lugar, ótimos preços, pessoas
    comprometidas, sem falar no visual que é
    muito sofisticado, com um cascata, ambiente climatizado, recomendo a todas as noivinhas.
     Casamento é um dos momentos mais
    importantes na vida de uma mulher, não faça
    em qualquer ambiente, antes de qualquer
    coisa certifique-se de que está fazendo no
    melhor lugar, não vá por preço, porque muitas
    vezes o barato sai caro`,
      image: Pic2,
    },
    {
      name: "Renata G.",
      comments: `Ótimo lugar, ótimos preços, pessoas
    comprometidas, sem falar no visual que é
    muito sofisticado, com um cascata, ambiente climatizado, recomendo a todas as noivinhas.
     Casamento é um dos momentos mais
    importantes na vida de uma mulher, não faça
    em qualquer ambiente, antes de qualquer
    coisa certifique-se de que está fazendo no
    melhor lugar, não vá por preço, porque muitas
    vezes o barato sai caro`,
      image: Pic1,
    },
    {
      name: "Renata G.",
      comments: `Ótimo lugar, ótimos preços, pessoas
    comprometidas, sem falar no visual que é
    muito sofisticado, com um cascata, ambiente climatizado, recomendo a todas as noivinhas.
     Casamento é um dos momentos mais
    importantes na vida de uma mulher, não faça
    em qualquer ambiente, antes de qualquer
    coisa certifique-se de que está fazendo no
    melhor lugar, não vá por preço, porque muitas
    vezes o barato sai caro`,
      image: Pic2,
    },
    {
      name: "Renata G.",
      comments: `Ótimo lugar, ótimos preços, pessoas
    comprometidas, sem falar no visual que é
    muito sofisticado, com um cascata, ambiente climatizado, recomendo a todas as noivinhas.
     Casamento é um dos momentos mais
    importantes na vida de uma mulher, não faça
    em qualquer ambiente, antes de qualquer
    coisa certifique-se de que está fazendo no
    melhor lugar, não vá por preço, porque muitas
    vezes o barato sai caro`,
      image: Pic1,
    },
    {
      name: "Renata G.",
      comments: `Ótimo lugar, ótimos preços, pessoas
    comprometidas, sem falar no visual que é
    muito sofisticado, com um cascata, ambiente climatizado, recomendo a todas as noivinhas.
     Casamento é um dos momentos mais
    importantes na vida de uma mulher, não faça
    em qualquer ambiente, antes de qualquer
    coisa certifique-se de que está fazendo no
    melhor lugar, não vá por preço, porque muitas
    vezes o barato sai caro`,
      image: Pic2,
    },
  ];

  window.addEventListener("resize", () => {
    defineSliderSettings();
  });

  function defineSliderSettings() {
    const width = window.innerWidth;

    if (width < 1024 && !isMobile) {
      setIsMobile(true);
    } else if (width > 1024 && isMobile) {
      setIsMobile(false);
    }
  }

  return (
    <article className={styles.testimonials}>
      <h2 className={styles.title}>Depoimentos</h2>
      <p className={styles.paragraph}>
        Veja o que nossos clientes dizem sobre nosso serviço
      </p>

      <Swiper
        slidesPerView={isMobile ? 1 : 2}
        autoplay={{
          delay: 250000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={!isMobile}
        modules={[Autoplay, Pagination, Navigation]}
        className={`mySwiper ${styles.slider}`}
      >
        {testimonialsList.map((item, index) => (
          <SwiperSlide key={index}>
            <Testimonial
              name={item.name}
              comments={item.comments}
              image={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default Testimonials;
