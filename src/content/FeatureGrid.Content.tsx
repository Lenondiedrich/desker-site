import { FeatureGridType } from "@/common/modules/FeatureGrid";
import { IconBolt, IconColorSwatch, IconTools } from "@tabler/icons";

export default {
  kicker: "Por que escolher a Desker",
  title: "Aumente a produtividade dos seus projetos",
  description: "Com a Desker, você gere tarefas, organiza cronograma de projetos e gerencia equipes de forma simples e rápida.",
  features: [
    {
      title: "Customizável",
      description: "Personalize seu sistema do seu jeito e melhore ainda mais o que já funciona.",
      icon: <IconColorSwatch />,
    },
    {
      title: "Desempenho rápido",
      description: "Desenvolvemos a Desker com foco em performance, garantindo agilidade e fluidez para que seus projetos nunca percam o ritmo.",
      icon: <IconBolt />,
    },
    {
      title: "Funcionalidades completas",
      description: "Tudo que você precisa para transformar a gestão de seus projetos em um só lugar.",
      icon: <IconTools />,
    },
  ],
} as FeatureGridType;
