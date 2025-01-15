import { FooterType } from "@/common/modules/Footer";

export default {
  description: "",
  copyright: "Desker. Todos os direitos reservados.",
  email: "example@domain.com",
  twitter: {
    title: "Twitter",
    link: "/#",
  },
  facebook: {
    title: "Facebook",
    link: "/#",
  },
  instagram: {
    title: "Instagram",
    link: "/#",
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
      title: "Support",
      links: [
        {
          title: "Check Uptime",
          href: "/#",
        },
        {
          title: "Request Feedback",
          href: "/#",
        },
        {
          title: "Submit Bugs",
          href: "/#",
        },
        {
          title: "Contact Us",
          href: "/#",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          title: "Imprint",
          href: "/#",
        },
        {
          title: "Privacy Policy",
          href: "/#",
        },
        {
          title: "Cookies",
          href: "/#",
        },
      ],
    },
  ],
} as FooterType;
