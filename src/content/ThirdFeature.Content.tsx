import ImageFeatureNotifications from "@/assets/images/Feature.Notifications.png";
import { FeatureContentType } from "@/common/modules/FeatureContent";
import {
  IconUpload,
  IconArrowAutofitDown,
  IconStars,
  IconWind,
  IconBolt,
} from "@tabler/icons";

export default {
  kicker: "Gestão de tempo",
  title: "Acompanhe o tempo gasto nas tarefas",
  description:
    "Esqueça planilhas e controles manuais. Com o smart track da Desker, você sabe exatamente onde cada minuto do seu projeto está sendo investido. Nossa ferramenta registra todo o tempo gasto nas tarefas de forma automática, permitindo que você e sua equipe foquem no que realmente importa. Planeje, acompanhe e otimize o uso do tempo de maneira intuitiva e sem esforço.",
  tags: [
    { label: "Easy Uploads", icon: <IconUpload size={17} /> },
    {
      label: "Automatic Autofit",
      icon: <IconArrowAutofitDown size={17} />,
    },
    { label: "Premium Support", icon: <IconStars size={17} /> },
    { label: "Windy Environment", icon: <IconWind size={17} /> },
    { label: "Really Fast", icon: <IconBolt size={17} /> },
  ],
  image: { src: ImageFeatureNotifications, width: 250, gradientWrapper: true },
} as FeatureContentType;
