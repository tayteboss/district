import styled from "styled-components";
import { NextSeo } from "next-seo";
import {
  PortfolioPageType,
  TalentType,
  TransitionsType,
} from "../shared/types/types";
import { motion } from "framer-motion";
import client from "../client";
import {
  portfolioPageQueryString,
  talentQueryString,
} from "../lib/sanityQueries";
import LoadMore from "../components/blocks/LoadMore";
import PortfolioHero from "../components/blocks/PortfolioHero";
import TalentFilters from "../components/blocks/TalentFilters";
import TalentList from "../components/blocks/TalentList";

const PageWrapper = styled(motion.div)`
  padding-top: var(--header-h);
`;

type Props = {
  data: PortfolioPageType;
  talent: TalentType;
  pageTransitionVariants: TransitionsType;
};

const Page = (props: Props) => {
  const { data, talent, pageTransitionVariants } = props;

  console.log("data", data);
  console.log("talent", talent);

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
      <PortfolioHero />
      <TalentFilters />
      <TalentList />
      <LoadMore />
    </PageWrapper>
  );
};

export async function getStaticProps() {
  const data = await client.fetch(portfolioPageQueryString);
  const talent = await client.fetch(talentQueryString);

  return {
    props: {
      data,
      talent,
    },
  };
}

export default Page;
