import { FeatureContentType } from "@/common/modules/FeatureContent";
import { IconUpload, IconArrowAutofitDown, IconStars, IconWind, IconBolt } from "@tabler/icons";
import Image from "@/assets/images/section-image-two.jpg";

export default {
  kicker: "Gestão de tempo",
  title: "Acompanhe o tempo gasto nas tarefas",
  description:
    "Esqueça planilhas e controles manuais. Com o smart track da Desker, você sabe exatamente onde cada minuto do seu projeto está sendo investido. Nossa ferramenta registra todo o tempo gasto nas tarefas de forma automática, permitindo que você e sua equipe foquem no que realmente importa. Planeje, acompanhe e otimize o uso do tempo de maneira intuitiva e sem esforço.",
  tags: [
    { label: "Upload simples", icon: <IconUpload size={17} /> },
    {
      label: "Importação de dados",
      icon: <IconArrowAutofitDown size={17} />,
    },
    { label: "Suporte dedicado", icon: <IconStars size={17} /> },
    { label: "Visualização interativa", icon: <IconWind size={17} /> },
    { label: "Otimizado", icon: <IconBolt size={17} /> },
  ],
  image: { src: Image, width: 450, gradientWrapper: true },
} as FeatureContentType;
