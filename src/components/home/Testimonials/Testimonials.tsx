import React from "react";
import styles from "./Testimonials.module.sass";

import Pic1 from "/src/assets/pages_images/pic1.jpg";
import Pic2 from "/src/assets/pages_images/pic2.jpg";
import Pic3 from "/src/assets/pages_images/pic3.jpg";
import Pic4 from "/src/assets/pages_images/pic4.png";
import Pic5 from "/src/assets/pages_images/pic5.png";
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
      name: "Ana e Carlos",
      comments: `O Le Noces é simplesmente incrível! A equipe fez do nosso casamento um dia mágico. Cada detalhe foi cuidadosamente planejado, desde a decoração deslumbrante até a comida deliciosa do Buffet Les Noces. Não poderíamos estar mais felizes com nossa escolha!`,
      image: Pic2,
    },
    {
      name: "João",
      comments: `Nossa conferência corporativa no Le Noces foi um triunfo. O espaço é elegante e bem equipado, e a equipe de eventos tornou tudo sem esforço. Recebemos elogios dos participantes por semanas após o evento.`,
      image: Pic1,
    },
    {
      name: "Mariana",
      comments: `O Le Noces transformou meu aniversário em uma festa dos sonhos. A decoração foi deslumbrante, e o ambiente alegre e acolhedor fez todos os convidados se sentirem especiais`,
      image: Pic3,
    },
    {
      name: " Luiza e André",
      comments: `Meu casamento no Le Noces foi perfeito. A atenção aos detalhes, desde a cerimônia até a festa, foi incrível. E a comida do Buffet Le Festy foi um grande destaque!`,
      image: Pic4,
    },
    {
      name: "Renata G.",
      comments: `Não posso recomendar o Le Noces o suficiente! A comida do Buffet Les Noces é divina, e a equipe tornou nosso evento social tão especial. Definitivamente, meu local favorito no Rio!`,
      image: Pic5,
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
    <article className={styles.testimonials} id="depoimentos">
      <h2 className={styles.title}>Depoimentos</h2>
      <p className={styles.paragraph}>
        Veja o que nossos clientes dizem sobre nosso serviço
      </p>

      <Swiper
        slidesPerView={isMobile ? 1 : 2}
        autoplay={{
          delay: 2500,
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
