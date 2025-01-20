import { UserReviewSectionType } from "@/common/modules/UserReviews";
import UserOne from "@/assets/images/mateus.jpg";
import UserTwo from "@/assets/images/patrick.jpg";
import UserThree from "@/assets/images/cris.jpg";

export default {
  kicker: "Junte-se as equipes que usam a Desker todo dia",
  title: "As pessoas amam a Desker",
  buttons: [
    { title: "Comece agora", href: "/pricing", type: "primary" },
    { title: "Login", href: "/#features", type: "secondary" },
  ],
  userReviews: [
    {
      stars: 5,
      quote:
        "Gerenciar múltiplos projetos simultaneamente sempre foi um desafio para a CSE. A Desker nos ajudou a organizar prioridades, acompanhar o progresso em tempo real e otimizar a agenda dos colaboradores. Agora, conseguimos medir o tempo gasto em cada tarefa e traduzir esses resultados em números claros para a empresa. É a ferramenta que trouxe previsibilidade e eficiência para o nosso escritório.",
      image: {
        src: UserOne,
      },
      name: "Mateus Felippi",
      role: "EngeÁgil Projetos",
    },
    {
      stars: 5,
      quote:
        "A Desker transformou nossa gestão de projetos. Antes, lidávamos com prazos apertados e falhas de comunicação. Hoje, centralizamos todas as etapas em um só lugar, elaboramos cronogramas eficientes e integramos o comercial e financeiro na plataforma, eliminando ferramentas e planilhas desnecessárias.",
      image: {
        src: UserTwo,
      },
      name: "Patrick Galli",
      role: "Nexplan Arquitetura",
    },
    {
      stars: 5,
      quote:
        "Gerenciar múltiplos projetos simultaneamente sempre foi um desafio para a CSE. A Desker nos ajudou a organizar prioridades, acompanhar o progresso em tempo real e otimizar a agenda dos colaboradores. Agora, conseguimos medir o tempo gasto em cada tarefa e traduzir esses resultados em números claros para a empresa. É a ferramenta que trouxe previsibilidade e eficiência para o nosso escritório.",
      image: {
        src: UserThree,
      },
      name: "Cristian Caon",
      role: "CSE Estruturas",
    },
  ],
} as UserReviewSectionType;
