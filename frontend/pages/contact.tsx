import styled from "styled-components";
import { NextSeo } from "next-seo";
import { ContactPageType, TransitionsType } from "../shared/types/types";
import { motion } from "framer-motion";
import client from "../client";
import { contactPageQueryString } from "../lib/sanityQueries";

const PageWrapper = styled(motion.div)`
  padding-top: var(--header-h);
`;

type Props = {
  data: ContactPageType;
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
      Contact
    </PageWrapper>
  );
};

export async function getStaticProps() {
  const data = await client.fetch(contactPageQueryString);

  return {
    props: {
      data,
    },
  };
}

export default Page;
