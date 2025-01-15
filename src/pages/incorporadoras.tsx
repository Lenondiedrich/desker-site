import Section from "@/common/components/containers/Section";
import AppLayout from "@/common/layouts/AppLayout";
import PageHeader from "@/common/modules/PageHeader";
import PricingTable from "@/common/modules/PricingTable";
import {
  IncorporatePricingPageHeaderContent,
  IncorporatePricingTableContent,
} from "@/content/IncorporateTable.Content";
import Head from "next/head";

export default function PricingPage() {
  return (
    <>
      {/* Meta Tags */}
      <Head>
        <title>Planos - Desker</title>
        <meta
          name="description"
          content="Simplifique o planejamento de seus projetos, otimize tarefas e colabore em tempo real em uma ferramenta simples e intuitiva Ideal para escritórios de engenharia e arquitetura e incorporadoras."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <PageHeader center {...IncorporatePricingPageHeaderContent} />

        <Section background="lighter" className="px-4">
          <PricingTable {...IncorporatePricingTableContent} />
        </Section>
      </AppLayout>
    </>
  );
}
