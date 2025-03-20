import styled from "styled-components";
import { HomePageType } from "../../../shared/types/types";
import MultiTypeTitle from "../MultiTypeTitle";
import LayoutWrapper from "../../layout/LayoutWrapper";
import LogoSvg from "../../svgs/LogoSvg";
import pxToRem from "../../../utils/pxToRem";
import MediaStack from "../../common/MediaStack";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

const HomeHeroWrapper = styled.section<{ $inView: boolean }>`
  margin-bottom: ${pxToRem(16)};
  position: relative;
  z-index: 2;
  background: var(--colour-off-white);
  opacity: ${(props) => (props.$inView ? 1 : 0)};

  transition: all var(--transition-speed-slow) var(--transition-ease);

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    margin-bottom: 0;
  }
`;

const LogoWrapper = styled(motion.div)`
  padding: ${pxToRem(120)} 0 ${pxToRem(16)};
  width: 100%;
  transform-origin: bottom;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    padding: ${pxToRem(100)} 0 ${pxToRem(16)};
  }

  svg {
    width: 100%;
    height: auto;
  }
`;

const MediaWrapper = styled(motion.div)`
  position: relative;
  z-index: 2;
  overflow: hidden;

  .media-wrapper {
    padding-top: 56.25%;
  }
`;

const TransformWrapper = styled(motion.div)``;

type Props = {
  heroMedia: HomePageType["heroMedia"];
  heroTitle: HomePageType["heroTitle"];
};

const HomeHero = (props: Props) => {
  const { heroMedia, heroTitle } = props;

  const ref = useRef<HTMLDivElement>(null);

  const { ref: ref2, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: "-50px",
  });

  const { scrollY } = useScroll();

  const transformMedia = useTransform(
    scrollY,
    [0, 3000],
    ["translateY(0px)", "translateY(-500px)"]
  );

  const transformLogo = useTransform(
    scrollY,
    [0, 5000],
    ["scale(1) translateY(0px)", "scale(0.7) translateY(-100px)"]
  );

  const opacityLogo = useTransform(scrollY, [0, 2000], ["1", "0.75"]);

  const transformImage = useTransform(
    scrollY,
    [0, 3500],
    ["scale(1.7)", "scale(1)"]
  );

  return (
    <HomeHeroWrapper ref={ref} $inView={inView}>
      <div ref={ref2}>
        <LayoutWrapper>
          <MultiTypeTitle data={heroTitle} />
          <LogoWrapper
            style={{
              transform: transformLogo,
              opacity: opacityLogo,
            }}
          >
            <LogoSvg />
          </LogoWrapper>
        </LayoutWrapper>
        <MediaWrapper style={{ transform: transformMedia }}>
          <TransformWrapper style={{ transform: transformImage }}>
            <MediaStack data={heroMedia} isPriority />
          </TransformWrapper>
        </MediaWrapper>
      </div>
    </HomeHeroWrapper>
  );
};

export default HomeHero;
