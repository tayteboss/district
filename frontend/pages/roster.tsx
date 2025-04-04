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
import { useEffect, useState } from "react";

const PageWrapper = styled(motion.div)`
  padding-top: var(--header-h);
  position: relative;
  z-index: 2;
  margin-bottom: 100vh;
  background: var(--colour-off-white);
`;

type Props = {
  data: PortfolioPageType;
  talent: TalentType[];
  pageTransitionVariants: TransitionsType;
};

const Page = (props: Props) => {
  const { data, talent, pageTransitionVariants } = props;

  const [filteredTalent, setFilteredTalent] = useState(talent);
  const [activeTags, setActiveTags] = useState<string[]>([]);

  useEffect(() => {
    if (activeTags.length > 0) {
      const filtered = talent.filter((talent) => {
        return activeTags.some((tag) => talent.tags.includes(tag));
      });
      setFilteredTalent(filtered);
    } else {
      setFilteredTalent(talent);
    }
  }, [activeTags]);

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
      <PortfolioHero heroTitle={data?.heroTitle} />
      <TalentFilters setActiveTags={setActiveTags} activeTags={activeTags} />
      <TalentList data={filteredTalent} />
      {/* <LoadMore /> */}
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
