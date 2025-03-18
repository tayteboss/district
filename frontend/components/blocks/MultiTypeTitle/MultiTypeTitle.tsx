import styled from "styled-components";
import { MultiTypeBlockType } from "../../../shared/types/types";
import LayoutGrid from "../../layout/LayoutGrid";
import pxToRem from "../../../utils/pxToRem";
import React from "react";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion, stagger } from "framer-motion";

const MultiTypeTitleWrapper = styled.section``;

const Inner = styled(motion.div)`
  grid-column: 2 / -1;
  padding: ${pxToRem(64)};

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    grid-column: 1 / -1;
    padding: ${pxToRem(48)} 0;
  }
`;

const Serif = styled(motion.span)`
  font-size: ${pxToRem(64)};
  line-height: 1.1;
  font-family: var(--font-times);

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    font-size: ${pxToRem(28)};
    line-height: 1.2;
  }
`;

const AllCaps = styled(motion.span)`
  font-size: ${pxToRem(64)};
  line-height: 1.1;
  font-family: var(--font-suisse);
  text-transform: uppercase;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    font-size: ${pxToRem(28)};
    line-height: 1.2;
  }
`;

const wrapperVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.01,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.01,
      staggerChildren: 0.1,
      when: "beforeChildren",
      ease: "easeInOut",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

type Props = {
  data: Array<MultiTypeBlockType>;
};

const MultiTypeTitle = (props: Props) => {
  const { data } = props;

  const hasData = data && data.length > 0;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: "-50px",
  });

  return (
    <>
      {hasData && (
        <MultiTypeTitleWrapper ref={ref}>
          <LayoutGrid>
            <AnimatePresence>
              {inView && (
                <Inner
                  variants={wrapperVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {data.map((item, i) => {
                    const isSerifType = item.fontStyle === "serif";

                    return isSerifType ? (
                      <Serif key={`serif-${i}`} variants={childVariants}>
                        {item.text.split(" ").map((word, j) => (
                          <React.Fragment key={`word-${j}`}>
                            {word}{" "}
                          </React.Fragment>
                        ))}
                      </Serif>
                    ) : (
                      <AllCaps key={`allCaps-${i}`} variants={childVariants}>
                        {item.text.split(" ").map((word, j) => (
                          <React.Fragment key={`word-${j}`}>
                            {word}{" "}
                          </React.Fragment>
                        ))}
                      </AllCaps>
                    );
                  })}
                </Inner>
              )}
            </AnimatePresence>
          </LayoutGrid>
        </MultiTypeTitleWrapper>
      )}
    </>
  );
};

export default MultiTypeTitle;
