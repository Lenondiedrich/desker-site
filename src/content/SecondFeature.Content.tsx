import { FeatureContentType } from "@/common/modules/FeatureContent";
import Image from "@/assets/images/section-image-one.jpg";

import { IconUpload, IconArrowAutofitDown, IconStars, IconWind, IconBolt } from "@tabler/icons";

export default {
  kicker: "Gestão completa",
  title: "A maneira mais fácil de organizar tarefas",
  align: "left",
  description:
    "Não tem um setor inteiro de planejamento? Sem problemas. Com a Desker, você gerencia todas as tarefas dos seus projeto de forma rápida e eficiente. Nossa plataforma foi projetada para atender tanto iniciantes quanto profissionais experientes. Organize, delegue e acompanhe o progresso das suas equipes de maneira fácil e ágil.",
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
  image: { src: Image, width: 600 },
} as FeatureContentType;
