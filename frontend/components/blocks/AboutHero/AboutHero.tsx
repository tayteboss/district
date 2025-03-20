import styled from "styled-components";
import { AboutPageType } from "../../../shared/types/types";
import LayoutWrapper from "../../layout/LayoutWrapper";
import LayoutGrid from "../../layout/LayoutGrid";
import Image from "next/image";
import pxToRem from "../../../utils/pxToRem";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutHeroWrapper = styled.section`
  padding: ${pxToRem(64)} 0;
  margin-bottom: ${pxToRem(64)};
`;

const FounderWrapper = styled(motion.div)<{ $inView: boolean }>`
  grid-column: span 1;
  width: 100%;
  padding-top: 150%;
  position: relative;

  @media ${(props) => props.theme.mediaBreakpoints.tabletLandscape} {
    grid-column: span 2;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${(props) => (props.$inView ? "0" : "100%")};
    background: var(--colour-off-white);

    transition: all var(--transition-speed-slow) var(--transition-ease);
  }

  img {
    transform: ${(props) => (props.$inView ? "scale(1.1)" : "scale(1)")};

    transition: all 2000ms var(--transition-ease);
  }
`;

const FounderInner = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const FounderTitle = styled.h4`
  position: absolute;
  left: calc(100% + 16px);
  top: 0;
  width: ${pxToRem(150)};

  @media ${(props) => props.theme.mediaBreakpoints.mobile} {
    left: 0;
    top: calc(100% + 16px);
    width: ${pxToRem(200)};
  }
`;

type Props = {
  founderImage: AboutPageType["founderImage"];
  founderTitle: AboutPageType["founderTitle"];
};

const AboutHero = (props: Props) => {
  const { founderImage, founderTitle } = props;

  const ref = useRef<HTMLDivElement>(null);

  const { ref: ref2, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: "-50px",
  });

  const { scrollY } = useScroll();

  const transform = useTransform(
    scrollY,
    [0, 2000],
    ["translateY(0px)", "translateY(450px)"]
  );

  return (
    <AboutHeroWrapper ref={ref2}>
      <LayoutWrapper>
        {founderImage?.asset?.url && (
          <LayoutGrid>
            <FounderWrapper $inView={inView} style={{ transform }}>
              <FounderInner>
                <Image
                  src={founderImage?.asset?.url}
                  alt="founder-image"
                  priority={true}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </FounderInner>
              {founderTitle && (
                <FounderTitle
                  className={`type-caption view-element-fade-in ${
                    inView ? "view-element-fade-in--in-view" : ""
                  }`}
                >
                  {founderTitle}
                </FounderTitle>
              )}
            </FounderWrapper>
          </LayoutGrid>
        )}
      </LayoutWrapper>
    </AboutHeroWrapper>
  );
};

export default AboutHero;
