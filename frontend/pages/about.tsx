import styled from "styled-components";
import { NextSeo } from "next-seo";
import { AboutPageType, TransitionsType } from "../shared/types/types";
import { motion } from "framer-motion";
import client from "../client";
import { aboutPageQueryString } from "../lib/sanityQueries";
import AboutHero from "../components/blocks/AboutHero";
import OurPeopleList from "../components/blocks/OurPeopleList";
import OurPeopleTitle from "../components/blocks/OurPeopleTitle";
import ServicesList from "../components/blocks/ServicesList";
import AboutIntro from "../components/blocks/AboutIntro";

const PageWrapper = styled(motion.div)`
  padding-top: var(--header-h);
  position: relative;
  z-index: 2;
  margin-bottom: 100vh;
  background: var(--colour-off-white);
`;

type Props = {
  data: AboutPageType;
  pageTransitionVariants: TransitionsType;
};

const Page = (props: Props) => {
  const { data, pageTransitionVariants } = props;

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
      <AboutHero
        founderImage={data?.founderImage}
        founderTitle={data?.founderTitle}
      />
      <AboutIntro
        heroSubTitle={data?.heroSubTitle}
        heroTitle={data?.heroTitle}
        heroDescription={data?.heroDescription}
      />
      <ServicesList data={data?.servicesList} />
      <OurPeopleTitle data={data?.ourPeopleTitle} />
      <OurPeopleList data={data?.people} />
    </PageWrapper>
  );
};

export async function getStaticProps() {
  const data = await client.fetch(aboutPageQueryString);

  return {
    props: {
      data,
    },
  };
}

export default Page;
