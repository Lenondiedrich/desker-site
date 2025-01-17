import { BlogSectionType } from "@/common/modules/BlogGridItems";
import { PageHeaderType } from "@/common/modules/PageHeader";
import PostOne from "@/assets/images/post-1.jpg";
import PostTwo from "@/assets/images/post-2.jpg";
import PostThree from "@/assets/images/post-3.jpg";
import PostFour from "@/assets/images/post-4.jpg";

export const BlogSectionHeader: PageHeaderType = {
  title: "Leia nossas publicações",
  description:
    " Descubra tendências, melhores práticas e inovações tecnologicas que transformam o setor de projetos. Conteúdo exclusivo para gestores, engenheiros e arquitetos",
};

export const BlogSectionContent: BlogSectionType = {
  items: [
    {
      category: "GESTÃO",
      title: "Como Melhorar a Produtividade na Construção Civil com Ferramentas Modernas de Gestão",
      description: "Saiba como otimizar processos, reduzir custos e impulsionar resultados com tecnologia aplicada na gestão de projetos",
      date: "Jan 15, 2025",
      readTime: "3 min",
      image: {
        src: PostOne,
        alt: "Blog Image",
      },
      link: "/blog/example-page",
    },
    {
      category: "PLANEJAMENTO",
      title: "5 Passos Para Criar Cronogramas de Projeto Eficientes e Reduzir Atrasos",
      description: "Aprenda a estruturar cronogramas estratégicos que otimizam recursos, prazos e resultados",
      date: "Jan 15, 2025",
      readTime: "5 min",
      image: {
        src: PostTwo,
        alt: "Blog Image",
      },
      link: "/blog/example-page",
    },
    {
      category: "COLABORAÇÃO",
      title: "Colaboração na Construção Civil: Por Que Times Integrados São a Chave para o Sucesso",
      description: "Descubra como a colaboração entre equipes pode transformar projetos e aumentar a eficiência no setor",
      date: "Jan 16, 2025",
      readTime: "3 min",
      image: {
        src: PostThree,
        alt: "Blog Image",
      },
      link: "/blog/example-page",
    },
    {
      category: "INTELIGÊCIA ARTIFICIAL",
      title: " Inteligência Artificial na Construção Civil: O Futuro da Gestão de Projetos",
      description: "Como a IA está revolucionando o planejamento, execução de tarefas e produtividade no setor de projetos da construção civil",
      date: "Jan 16, 2025",
      readTime: "5 min",
      image: {
        src: PostFour,
        alt: "Blog Image",
      },
      link: "/blog/example-page",
    },
  ],
};
