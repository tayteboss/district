import styled from "styled-components";
import { MultiTypeBlockType } from "../../../shared/types/types";
import LayoutGrid from "../../layout/LayoutGrid";
import pxToRem from "../../../utils/pxToRem";
import React from "react";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import ButtonLayout from "../../layout/ButtonLayout";

const MultiTypeTitleWrapper = styled.section<{ $useLeftAlign: boolean }>`
  padding: ${(props) =>
    props.$useLeftAlign ? `${pxToRem(64)} 0` : pxToRem(64)};

  @media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
    padding: ${pxToRem(48)} 0;
  }
`;

const Inner = styled(motion.div)<{ $useLeftAlign: boolean }>`
  grid-column: ${(props) => (props.$useLeftAlign ? "1 / -3" : "2 / -1")};
  position: relative;
  text-indent: 20vw;
  max-width: ${pxToRem(1200)};

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    grid-column: 1 / -1;
  }
`;

const SubTitle = styled.h3`
  position: absolute;
  top: 43px;
  left: -20vw;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    top: -36px;
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

const Description = styled.p`
  padding-top: ${pxToRem(64)};
  grid-column: 2 / -1;
  position: relative;
  text-indent: 20vw;

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
  subTitle?: string;
  description?: string;
};

const MultiTypeTitle = (props: Props) => {
  const {
    data,
    linkUrl,
    linkTitle,
    useLeftAlign = false,
    subTitle,
    description,
  } = props;

  const hasData = data && data.length > 0;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: "-50px",
  });

  const useButton = linkUrl && linkTitle;

  return (
    <>
      <MultiTypeTitleWrapper ref={ref} $useLeftAlign={useLeftAlign}>
        {hasData && (
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
                  {subTitle && (
                    <SubTitle className="type-button">{subTitle}</SubTitle>
                  )}
                </Inner>
              )}
            </AnimatePresence>
            {description && (
              <Description
                className={`view-element-fade-in ${
                  inView ? "view-element-fade-in--in-view" : ""
                }`}
              >
                {description}
              </Description>
            )}
            {useButton && (
              <LinkWrapper
                $useLeftAlign={useLeftAlign}
                className={`view-element-fade-in ${
                  inView ? "view-element-fade-in--in-view" : ""
                }`}
              >
                <Link href={linkUrl} className="button-layout">
                  <ButtonLayout>{linkTitle}</ButtonLayout>
                </Link>
              </LinkWrapper>
            )}
          </LayoutGrid>
        )}
      </MultiTypeTitleWrapper>
    </>
  );
};

export default MultiTypeTitle;
