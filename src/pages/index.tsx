import HeroGradientBackground from "@/assets/images/Hero.Gradient.svg";
import GradientBackground from "@/common/components/backgrounds/GradientBackground";
import GradientBackgroundImage from "@/common/components/backgrounds/GradientBackgroundImage";
import Section from "@/common/components/containers/Section";
import AppLayout from "@/common/layouts/AppLayout";
import CallToActionBlock from "@/common/modules/CallToActionBlock";
import FAQ from "@/common/modules/FAQ";
import FeatureContent from "@/common/modules/FeatureContent";
import FeatureGrid from "@/common/modules/FeatureGrid";
import Hero from "@/common/modules/Hero";
import LogoClouds from "@/common/modules/LogoClouds";
import StatNumbers from "@/common/modules/StatNumbers";
import UserReviews from "@/common/modules/UserReviews";
import CallToActionBlockContent from "@/content/CallToActionBlock.Content";
import FAQContent from "@/content/FAQ.Content";
import FeatureGridContent from "@/content/FeatureGrid.Content";
import FirstFeatureContent from "@/content/FirstFeature.Content";
import HeroContent from "@/content/Hero.Content";
import LogoCloudsContent from "@/content/LogoClouds.Content";
import SecondFeatureContent from "@/content/SecondFeature.Content";
import StatNumbersContent from "@/content/StatNumbers.Content";
import ThirdFeatureContent from "@/content/ThirdFeature.Content";
import UserReviewsContent from "@/content/UserReviews.Content";
import Head from "next/head";

export default function LandingPage() {
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

      {/* Hero Background Gradient Image */}
      <GradientBackgroundImage src={HeroGradientBackground} className="opacity-80" />

      <AppLayout>
        {/* Hero Section with Logo Clouds */}
        <Section>
          <Hero {...HeroContent} />
          <LogoClouds {...LogoCloudsContent} />
        </Section>

        {/* Feature Grid Section */}
        <Section background="lighter" id="features">
          <FeatureGrid {...FeatureGridContent} />
          <GradientBackground position="bottom-left" />
          <GradientBackground position="bottom-right" />
        </Section>

        {/* First Detailted Feature with Description */}
        <Section>
          <FeatureContent {...FirstFeatureContent} />
        </Section>

        {/* Second Detailted Feature with Description */}
        <Section background="lighter">
          <FeatureContent {...SecondFeatureContent} />
        </Section>

        {/* Third Detailted Feature with Description */}
        <Section>
          <FeatureContent {...ThirdFeatureContent} />
        </Section>

        {/* Testimonials Section */}
        <Section background="lighter" id="testimonials">
          <UserReviews {...UserReviewsContent} />
          <StatNumbers {...StatNumbersContent} />
        </Section>

        {/* FAQ Section */}
        <Section id="faq">
          <FAQ {...FAQContent} />
        </Section>

        {/* Call to Action Block Section */}
        <Section background="lighter">
          <CallToActionBlock {...CallToActionBlockContent} />
        </Section>

        {/*  Founders Note Section ---> ABOUT SECTION
        <Section id="about">
          <GradientBackground position="top-left" />
          <GradientBackground position="top-right" />
          <GradientBackgroundImage
            src={LargeRedGradientBackground}
            position="bottom-0"
          />
          <FoundersNote {...FoundersNoteContent} />
        </Section> */}
      </AppLayout>
    </>
  );
}
