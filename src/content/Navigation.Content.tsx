import { NavigationMenuType } from "@/common/modules/NavigationMenu";

export default {
  links: [
    { title: "Soluções", href: "/#features" },
    { title: "FAQ", href: "/#faq" },
    {
      title: "Planos",
      href: "/pricing",
      subItems: [
        {
          title: "Para escritórios",
          href: "/escritorios",
        },
        {
          title: "Para incorporadoras",
          href: "/incorporadoras",
        },
      ],
    },
    { title: "Blog", href: "/blog" },
  ],
  buttons: [
    {
      title: "Login",
      href: "https://painel.desker.com.br/login",
      type: "secondary",
      target: "_blank",
    },
    { title: "Comece agora", href: "/pricing", type: "primary" },
  ],
} as NavigationMenuType;
