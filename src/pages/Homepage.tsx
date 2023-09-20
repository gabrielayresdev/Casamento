import Main from "../components/home/Main/Main";
import Info from "../components/home/InfoArticle/InfoIndex";
import Testimonials from "../components/home/Testimonials/Testimonials";
import Footer from "../components/shared/Footer/Footer";

import ImgSobre from "/src/assets/pages_images/image 1.png";
import ImgEventos from "/src/assets/pages_images/image 2.png";
import ImgServicos from "/src/assets/pages_images/image 4.png";

const Homepage = () => {
  return (
    <>
      <Main />
      <Info.Article>
        <img src={ImgSobre} />
        <Info.Text
          title="sobre"
          text="Com uma trajetória de 12 anos de excelência, o Les Noces é um nome consagrado no cenário de casamentos no Rio de Janeiro. Nossa história é marcada por inúmeros momentos mágicos e sorrisos radiantes, e estamos ansiosos para compartilhar essa expertise e paixão com você. Desde o início, nossa missão tem sido criar casamentos verdadeiramente memoráveis, onde cada detalhe é cuidadosamente planejado para refletir a singularidade de cada casal. Ao longo dos anos, conquistamos a confiança de inúmeros noivos e noivas, tornando-se o local preferido para aqueles que buscam uma combinação de elegância, sofisticação e calor humano."
        />
      </Info.Article>
      <Info.Article>
        <Info.Text
          title="Eventos Sociais, Corporativos e Educacionais"
          text="No Les Noces, nossa missão é criar momentos especiais e memoráveis, não apenas para casamentos, mas também para uma ampla variedade de eventos sociais, corporativos e educacionais. Acreditamos que cada celebração merece a mesma atenção meticulosa aos detalhes e o toque de elegância que nos tornou conhecidos. Seja qual for a natureza do seu evento, estamos prontos para torná-lo extraordinário."
        />
        <img src={ImgEventos} />
      </Info.Article>
      <Info.Article>
        <img src={ImgServicos} />
        <Info.Text
          title="Serviços"
          text="No Les Noces, nossa dedicação ao sucesso do seu evento é incomparável. Contamos com uma equipe altamente capacitada e motivada, pronta para executar todos os detalhes com maestria. Nossos serviços abrangem a locação do nosso espaço, a excelência da gastronomia proporcionada pelo Buffet Les Noces e a transformação dos ambientes com decoração em diversos estilos."
        />
      </Info.Article>

      <Testimonials />
      <Footer />
    </>
  );
};

export default Homepage;
