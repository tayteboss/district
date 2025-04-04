import styled from "styled-components";
import { NextSeo } from "next-seo";
import { SiteSettingsType, TransitionsType } from "../shared/types/types";
import { motion } from "framer-motion";
import client from "../client";
import { siteSettingsQueryString } from "../lib/sanityQueries";
import LayoutWrapper from "../components/layout/LayoutWrapper";
import LayoutGrid from "../components/layout/LayoutGrid";
import { PortableText } from "@portabletext/react";
import pxToRem from "../utils/pxToRem";

const PageWrapper = styled(motion.div)`
  padding-top: calc(64px + var(--header-h));
  padding-bottom: ${pxToRem(240)};
  position: relative;
  z-index: 2;
  margin-bottom: 100vh;
  background: var(--colour-off-white);
`;

const Inner = styled.div``;

const ContentWrapper = styled.div`
  grid-column: 2 / -2;
`;

type Props = {
  siteSettings: SiteSettingsType;
  pageTransitionVariants: TransitionsType;
};

const Page = (props: Props) => {
  const { siteSettings, pageTransitionVariants } = props;

  const termsAndConditions = siteSettings?.termsAndConditions;

  return (
    <PageWrapper
      variants={pageTransitionVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <NextSeo title={"Terms & Conditions"} />
      <LayoutWrapper>
        <Inner>
          <LayoutGrid>
            {termsAndConditions && (
              <ContentWrapper className="rich-text">
                <PortableText value={termsAndConditions} />
              </ContentWrapper>
            )}
          </LayoutGrid>
        </Inner>
      </LayoutWrapper>
    </PageWrapper>
  );
};

export async function getStaticProps() {
  const siteSettings = await client.fetch(siteSettingsQueryString);

  return {
    props: {
      siteSettings,
    },
  };
}

export default Page;
