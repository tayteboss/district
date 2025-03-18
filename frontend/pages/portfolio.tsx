import styled from "styled-components";
import { NextSeo } from "next-seo";
import { PortfolioPageType, TransitionsType } from "../shared/types/types";
import { motion } from "framer-motion";
import client from "../client";
import { portfolioPageQueryString } from "../lib/sanityQueries";

const PageWrapper = styled(motion.div)``;

type Props = {
  data: PortfolioPageType;
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
      Portfolio
    </PageWrapper>
  );
};

export async function getStaticProps() {
  const data = await client.fetch(portfolioPageQueryString);

  return {
    props: {
      data,
    },
  };
}

export default Page;
