import styled from "styled-components";
import { MultiTypeBlockType } from "../../../shared/types/types";
import LayoutGrid from "../../layout/LayoutGrid";
import pxToRem from "../../../utils/pxToRem";
import React from "react";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion, stagger } from "framer-motion";
import Link from "next/link";
import ButtonLayout from "../../layout/ButtonLayout";

const MultiTypeTitleWrapper = styled.section`
  padding: ${pxToRem(64)};

  @media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
    padding: ${pxToRem(48)} 0;
  }
`;

const Inner = styled(motion.div)<{ $useLeftAlign: boolean }>`
  grid-column: ${(props) => (props.$useLeftAlign ? "1 / -2" : "2 / -1")};

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    grid-column: 1 / -1;
  }

  span:first-child {
    padding-left: 16vw;
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

const LinkWrapper = styled.div<{ $useLeftAlign: boolean }>`
  grid-column: ${(props) => (props.$useLeftAlign ? "1 / -2" : "2 / -1")};
  padding-top: ${pxToRem(64)};

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    grid-column: 1 / -1;
    padding-top: ${pxToRem(48)};
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
  linkUrl?: string;
  linkTitle?: string;
  useLeftAlign?: boolean;
};

const MultiTypeTitle = (props: Props) => {
  const { data, linkUrl, linkTitle, useLeftAlign = false } = props;

  const hasData = data && data.length > 0;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: "-50px",
  });

  const useButton = linkUrl && linkTitle;

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
                  $useLeftAlign={useLeftAlign}
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
            {useButton && (
              <LinkWrapper $useLeftAlign={useLeftAlign}>
                <Link href={linkUrl} className="button-layout">
                  <ButtonLayout>{linkTitle}</ButtonLayout>
                </Link>
              </LinkWrapper>
            )}
          </LayoutGrid>
        </MultiTypeTitleWrapper>
      )}
    </>
  );
};

export default MultiTypeTitle;
