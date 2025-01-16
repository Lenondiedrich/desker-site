import { PageHeaderType } from "@/common/modules/PageHeader";
import { PricingTableType } from "@/common/modules/PricingTable";

export const IncorporatePricingPageHeaderContent: PageHeaderType = {
  title: "Planos simples e transparentes",
  description: "Gestão de projetos poderosa e acessível, feita para transformar sua produtividade sem comprometer o orçamento da sua empresa.",
};

export const IncorporatePricingTableContent: PricingTableType = {
  plans: [
    {
      name: "Plano Pro",
      description: "Perfeito para pequenos negócios que desejam alavancar seus projetos.",
      price: "R$1099",
      interval: "/mês",
      includeLocalTaxesInformation: true,
      featured: false,
      buttton: {
        type: "primary",
        title: "Comece agora",
        href: "#",
      },
      features: ["Gerencie até 10 projetos simultâneos", "Colaboradores ilimitados", "Convidados ilimitados"],
    },
    {
      name: "Plano Business",
      description: "Ideal para equipes em crescimento que precisam de mais recursos para impulsionar seus negócios.",
      price: "R$1499",
      interval: "/mês",
      includeLocalTaxesInformation: true,
      featured: true,
      buttton: {
        type: "primary",
        title: "Comece agora",
        href: "#",
      },
      features: ["Gerencie até 20 projetos simultâneos", "Colaboradores ilimitados", "Convidados ilimitados"],
    },
    {
      name: "Plano Enterprise",
      description: "O plano perfeito para empresas de grande porte que precisam escalar em alto nível.",
      featured: false,
      buttton: {
        type: "primary",
        title: "Falar com responsável",
        href: "#",
      },
      features: ["Projetos personalizados para o plano", "Colaboradores ilimitados", "Convidados ilimitados"],
    },
  ],
};
