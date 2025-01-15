import { FeatureContentType } from "@/common/modules/FeatureContent";
import BannerCalendar from "@/assets/images/banner-calendar.gif";

import {
  IconUpload,
  IconArrowAutofitDown,
  IconStars,
  IconWind,
  IconBolt,
} from "@tabler/icons";

export default {
  kicker: "Gestão completa",
  title: "A maneira mais fácil de organizar tarefas",
  align: "left",
  description:
    "Não tem um setor inteiro de planejamento? Sem problemas. Com a Desker, você gerencia todas as tarefas dos seus projeto de forma rápida e eficiente. Nossa plataforma foi projetada para atender tanto iniciantes quanto profissionais experientes. Organize, delegue e acompanhe o progresso das suas equipes de maneira fácil e ágil.",
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
  image: { src: BannerCalendar, width: 600 },
} as FeatureContentType;
