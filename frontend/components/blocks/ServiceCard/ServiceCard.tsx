import styled from "styled-components";
import LayoutWrapper from "../../layout/LayoutWrapper";
import LayoutGrid from "../../layout/LayoutGrid";
import pxToRem from "../../../utils/pxToRem";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ServiceCardWrapper = styled(motion.div)<{ $isActive: boolean }>`
  background: ${(props) =>
    props.$isActive ? "var(--colour-matcha)" : "var(--colour-grey)"};
  border-bottom: 1px solid var(--colour-black);
  padding: ${pxToRem(40)} 0;

  transition: background var(--transition-speed-default) linear;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    padding: ${pxToRem(32)} 0;
  }

  &:hover {
    background: var(--colour-matcha);
  }

  &:first-child {
    border-top: 1px solid var(--colour-black);
  }
`;

const Title = styled(motion.h3)`
  grid-column: 1 / -3;
  font-family: var(--font-times) !important;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    grid-column: 1 / -1;
  }
`;

const DesktopItemsWrapper = styled(motion.div)`
  grid-column: -3 / -1;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    display: none;
  }
`;

const MobileItemsWrapper = styled(motion.div)`
  display: none;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    display: block;
    grid-column: 1 / -1;
  }
`;

const ItemsInner = styled(motion.div)`
  padding-top: ${pxToRem(24)};
`;

const Item = styled.div``;

const wrapperVariants = {
  hidden: {
    height: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "afterChildren",
    },
  },
  visible: {
    height: "auto",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

type Props = {
  title: string;
  items: string[];
  inView: boolean;
  index: number;
};

const ServiceCard = (props: Props) => {
  const { title, items, inView, index } = props;

  const [isActive, setIsActive] = useState(false);

  const hasItems = items && items.length > 0;

  const outerVariants = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: index * 0.2,
        delay: index * 0.2,
      },
    },
  };

  return (
    <ServiceCardWrapper
      onClick={() => setIsActive(!isActive)}
      $isActive={isActive}
      variants={outerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="hidden"
      key="wrapper"
    >
      <LayoutWrapper>
        <LayoutGrid>
          <Title className="type-h1" variants={childVariants} key="title">
            {title || ""}
          </Title>
          <DesktopItemsWrapper variants={childVariants} key="desktop-items">
            {hasItems &&
              items.map((item, i) => (
                <Item className="type-b2" key={i}>
                  {item || ""}
                </Item>
              ))}
          </DesktopItemsWrapper>
          <AnimatePresence>
            {isActive && (
              <MobileItemsWrapper
                variants={wrapperVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <ItemsInner variants={childVariants}>
                  {hasItems &&
                    items.map((item, i) => (
                      <Item className="type-b2" key={i}>
                        {item || ""}
                      </Item>
                    ))}
                </ItemsInner>
              </MobileItemsWrapper>
            )}
          </AnimatePresence>
        </LayoutGrid>
      </LayoutWrapper>
    </ServiceCardWrapper>
  );
};

export default ServiceCard;
