import Head from "next/head";
import Section from "@/common/components/containers/Section";
import AppLayout from "@/common/layouts/AppLayout";
import PageHeader from "@/common/modules/PageHeader";
import BlogGridItems from "@/common/modules/BlogGridItems";
import {
  BlogSectionContent,
  BlogSectionHeader,
} from "@/content/BlogSection.Content";

export default function BlogExcerptsPage() {
  return (
    <>
      {/* Meta Tags */}
      <Head>
        <title>Desker</title>
        <meta
          name="description"
          content="Simplifique o planejamento de seus projetos, otimize tarefas e colabore em tempo real em uma ferramenta simples e intuitiva Ideal para escritórios de engenharia e arquitetura e incorporadoras."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <PageHeader center {...BlogSectionHeader} />

        <Section background="lighter">
          <BlogGridItems {...BlogSectionContent} />
        </Section>
      </AppLayout>
    </>
  );
}
