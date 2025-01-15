import { PageHeaderType } from "@/common/modules/PageHeader";
import { PricingTableType } from "@/common/modules/PricingTable";

export const PricingPageHeaderContent: PageHeaderType = {
  title: "Planos simples e transparentes",
  description:
    "Gestão de projetos poderosa e acessível, feita para transformar sua produtividade sem comprometer o orçamento da sua empresa.",
};

export const PricingTableContent: PricingTableType = {
  plans: [
    {
      name: "Plano Pro",
      description:
        "Perfeito para pequenos negócios que desejam alavancar seus projetos.",
      price: "R$ 499",
      interval: "/mês assinatura anual",
      includeLocalTaxesInformation: false,
      featured: false,
      buttton: {
        type: "primary",
        title: "Comece agora",
        href: "#",
      },
      features: [
        "Crie até 50 projetos simultâneos",
        "Até 05 colaboradores",
        "Convidados ilimitados",
      ],
    },
    {
      name: "Plano Business",
      description:
        "Ideal para equipes em crescimento que precisam de mais recursos para impulsionar seus negócios.",
      price: "R$ 899",
      interval: "/mês",
      includeLocalTaxesInformation: false,
      featured: true,
      buttton: {
        type: "primary",
        title: "Comece agora",
        href: "#",
      },
      features: [
        "Projetos ilimitados, para sempre",
        "Até 10 colaboradores",
        "Convidados ilimitados",
      ],
    },
    {
      name: "Plano Enterprise",
      description:
        "O plano perfeito para empresas de grande porte que precisam escalar em alto nível.",
      featured: false,
      buttton: {
        type: "primary",
        title: "Falar com responsável",
        href: "#",
      },
      features: [
        "Projetos ilimitados, para sempre",
        "Número de colaboradores personalizado",
        "Acesso pleno a todas as funcionalidades",
      ],
    },
  ],
};
