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

const PageWrapper = styled(motion.div)``;

type Props = {
  data: AboutPageType;
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
      <AboutHero />
      <ServicesList />
      <OurPeopleTitle />
      <OurPeopleList />
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
