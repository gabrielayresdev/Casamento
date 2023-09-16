import Main from "../components/home/Main/Main";
import Info from "../components/home/InfoArticle/InfoIndex";

import ImgSobre from "/src/assets/pages_images/image 1.png";
import ImgEventos from "/src/assets/pages_images/image 2.png";
import ImgServicos from "/src/assets/pages_images/image 4.png";
import Testimonials from "../components/home/Testimonials/Testimonials";

const Homepage = () => {
  return (
    <>
      <Main />
      <Info.Article>
        <img src={ImgSobre} />
        <Info.Text
          title="sobre"
          text="A Casa de Festas Le Festy abriu as suas portas em 2003 e rapidamente tornou-se uma referência de qualidade, inovação e excelência de atendimento. O principal foco da equipe é colaborar com os clientes para a concretização dos seus sonhos, realizando um evento organizado e agradável, tornando o dia realmente inesquecível! Na Le Festy realiza-se orçamentos personalizados, adaptando-se às necessidades, gostos e preferências diversas, além disso, são proporcionadas facilidades de pagamento com parcelamento."
        />
      </Info.Article>
      <Info.Article>
        <Info.Text
          title="Eventos Sociais, Corporativos e Educacionais"
          text="A Casa de Festas Le Festy abriu as suas portas em 2003 e rapidamente tornou-se uma referência de qualidade, inovação e excelência de atendimento. O principal foco da equipe é colaborar com os clientes para a concretização dos seus sonhos, realizando um evento organizado e agradável, tornando o dia realmente inesquecível! Na Le Festy realiza-se orçamentos personalizados, adaptando-se às necessidades, gostos e preferências diversas, além disso, são proporcionadas facilidades de pagamento com parcelamento."
        />
        <img src={ImgEventos} />
      </Info.Article>
      <Info.Article>
        <img src={ImgServicos} />
        <Info.Text
          title="Serviços"
          text="Contamos com a colaboração de uma equipe comprometida com o sucesso dos eventos realizados na Casa. Todos os detalhes da sua festa são executados por pessoas altamente capacitadas e motivadas. Os principais serviços relacionam-se à locação do nosso Espaço, à Gastronomia oferecida pelo Buffet Le Festy e à Decoração dos ambientes em diversos estilos."
        />
      </Info.Article>

      <Testimonials />
    </>
  );
};

export default Homepage;
