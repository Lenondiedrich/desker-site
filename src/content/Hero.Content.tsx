import { HeroType } from "@/common/modules/Hero";

import DemoBanner from "@/assets/images/banner-demo.gif";

export default {
  notfication: {
    tag: "Novo -",
    text: "Lançamos a versão 4.0 da plataforma.",
    button: "Confira aqui",
    href: "#",
  },
  title: "A plataforma de Gestão de Projetos de Construção",
  description:
    "Simplifique processos, conecte equipes e alcance resultados incríveis com a plataforma n°1 do mercado",
  buttons: [
    { title: "Comece agora", href: "/pricing", type: "primary" },
    { title: "Login", href: "/#features", type: "secondary" },
  ],
  image: {
    src: DemoBanner,
    width: 1000,
  },
} as HeroType;
