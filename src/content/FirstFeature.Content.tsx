import ImageFeatureMap from "@/assets/images/Feature.Map.png";
import { FeatureContentType } from "@/common/modules/FeatureContent";
import {
  IconUpload,
  IconArrowAutofitDown,
  IconStars,
  IconWind,
  IconBolt,
} from "@tabler/icons";

export default {
  kicker: "Resultados imediatos",
  title: "Crie o cronograma perfeito em minutos",
  description:
    "Com a Desker, você planeja seus projetos com rapidez e precisão, sem comprometer a qualidade. Aproveite e adicione equipes para colaborar no cronograma e aumente ainda mais sua produtividade.",
  tags: [
    { label: "Upload simples", icon: <IconUpload size={17} /> },
    {
      label: "Importação de dados",
      icon: <IconArrowAutofitDown size={17} />,
    },
    { label: "Suporte dedicado", icon: <IconStars size={17} /> },
    { label: "não tenho ideia disso kk", icon: <IconWind size={17} /> },
    { label: "Otimizado", icon: <IconBolt size={17} /> },
  ],
  image: { src: ImageFeatureMap, width: 250, gradientWrapper: true },
} as FeatureContentType;
