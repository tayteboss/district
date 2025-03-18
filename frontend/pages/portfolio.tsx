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

const PageWrapper = styled(motion.div)``;

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
      Portfolio
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
