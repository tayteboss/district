import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { TalentType } from "../../../shared/types/types";
import LayoutWrapper from "../../layout/LayoutWrapper";
import LayoutGrid from "../../layout/LayoutGrid";
import TalentCard from "../TalentCard";
import pxToRem from "../../../utils/pxToRem";

const TalentListWrapper = styled.section`
  padding: ${pxToRem(24)} 0 ${pxToRem(86)};

  .layout-grid {
    row-gap: ${pxToRem(64)};

    @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
      row-gap: ${pxToRem(24)};
    }
  }

  .talent-motion-wrapper {
    grid-column: span 2;
  }
`;

const wrapperVariants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -5, transition: { duration: 0.3 } },
};

type Props = {
  data: TalentType[];
};

const TalentList = ({ data }: Props) => {
  return (
    <TalentListWrapper>
      <LayoutWrapper>
        <AnimatePresence mode="wait">
          <motion.div
            key={JSON.stringify(data)} // Ensures reanimation when data changes
            variants={wrapperVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <LayoutGrid>
              {data.length === 0 ? (
                <motion.p
                  variants={cardVariants}
                  className="talent-motion-wrapper"
                >
                  No results...
                </motion.p>
              ) : (
                data.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    className="talent-motion-wrapper"
                  >
                    <TalentCard {...item} />
                  </motion.div>
                ))
              )}
            </LayoutGrid>
          </motion.div>
        </AnimatePresence>
      </LayoutWrapper>
    </TalentListWrapper>
  );
};

export default TalentList;
