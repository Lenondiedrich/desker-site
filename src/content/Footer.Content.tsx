import { FooterType } from "@/common/modules/Footer";

export default {
  description: "",
  copyright: "Desker. Todos os direitos reservados.",
  email: "contato@desker.com.br",
  linkedin: {
    title: "Linkedin",
    link: "https://www.linkedin.com/company/soudesker/",
  },
  instagram: {
    title: "Instagram",
    link: "https://www.instagram.com/soudesker/",
  },

  linkGroups: [
    {
      title: "Páginas",
      links: [
        {
          title: "Soluções",
          href: "/#features",
        },
        {
          title: "Planos",
          href: "/pricing",
        },
        {
          title: "Blog",
          href: "/blog",
        },
        {
          title: "FAQ",
          href: "/#faq",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          title: "Termos de uso",
          href: "https://docs.google.com/document/d/1HfIOJtjS0eBVeNDxW206NTEDd8eulg6s/edit",
          target: "_blank",
        },
        {
          title: "Política de privacidade",
          href: "https://drive.google.com/file/d/1lZTqTXsCt1I2eQOXRxsMzK66hq-gKIRs/view",
          target: "_blank",
        },
        {
          title: "Cookies",
          href: "/#",
        },
      ],
    },
  ],
} as FooterType;
