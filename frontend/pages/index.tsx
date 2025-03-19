import styled from "styled-components";
import { NextSeo } from "next-seo";
import { HomePageType, TransitionsType } from "../shared/types/types";
import { motion } from "framer-motion";
import client from "../client";
import { homePageQueryString } from "../lib/sanityQueries";
import HomeGallery from "../components/blocks/HomeGallery";
import HomeHero from "../components/blocks/HomeHero";
import HomePortfolio from "../components/blocks/HomePortfolio";
import MultiTypeTitle from "../components/blocks/MultiTypeTitle";
import PartnersCarousel from "../components/blocks/PartnersCarousel";
import ServicesList from "../components/blocks/ServicesList";
import TalentCarousel from "../components/blocks/TalentCarousel";
import LayoutWrapper from "../components/layout/LayoutWrapper";

const PageWrapper = styled(motion.div)`
  padding-top: var(--header-h);
`;

const AboutTitle = styled.section``;

type Props = {
  data: HomePageType;
  pageTransitionVariants: TransitionsType;
};

const Page = (props: Props) => {
  const { data, pageTransitionVariants } = props;

  console.log("data", data);

  return (
    <PageWrapper
      variants={pageTransitionVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <NextSeo
        title={data?.seoTitle || ""}
        description={data?.seoDescription || ""}
      />
      <HomeHero heroMedia={data?.heroMedia} heroTitle={data?.heroTitle} />
      <HomePortfolio portfolioTitle={data?.portfolioTitle} />
      <PartnersCarousel
        data={data?.partnersLogos}
        title={data?.partnersTitle}
      />
      <TalentCarousel data={data?.featuredTalent} />
      <AboutTitle>
        <LayoutWrapper>
          <MultiTypeTitle
            data={data?.aboutTitle}
            useLeftAlign={true}
            linkUrl="/about"
            linkTitle="About"
          />
        </LayoutWrapper>
      </AboutTitle>
      {/* <MultiTypeTitle /> */}
      <ServicesList />
      <HomeGallery />
    </PageWrapper>
  );
};

export async function getStaticProps() {
  const data = await client.fetch(homePageQueryString);

  return {
    props: {
      data,
    },
  };
}

export default Page;
