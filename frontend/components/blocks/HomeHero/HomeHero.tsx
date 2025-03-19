import styled from "styled-components";
import { HomePageType } from "../../../shared/types/types";
import MultiTypeTitle from "../MultiTypeTitle";
import LayoutWrapper from "../../layout/LayoutWrapper";
import LogoSvg from "../../svgs/LogoSvg";
import pxToRem from "../../../utils/pxToRem";
import MediaStack from "../../common/MediaStack";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HomeHeroWrapper = styled.section`
  margin-bottom: ${pxToRem(16)};
  position: relative;
  z-index: 2;
  background: var(--colour-off-white);

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

  const { scrollY } = useScroll();

  const transformMedia = useTransform(
    scrollY,
    [0, 5000],
    ["translateY(0px)", "translateY(-500px)"]
  );

  const transformLogo = useTransform(
    scrollY,
    [0, 5000],
    ["scale(1) translateY(0px)", "scale(0.7) translateY(-100px)"]
  );

  const transformImage = useTransform(
    scrollY,
    [0, 3500],
    ["scale(1.5)", "scale(1)"]
  );

  return (
    <HomeHeroWrapper ref={ref}>
      <LayoutWrapper>
        <MultiTypeTitle data={heroTitle} />
        <LogoWrapper style={{ transform: transformLogo }}>
          <LogoSvg />
        </LogoWrapper>
      </LayoutWrapper>
      <MediaWrapper style={{ transform: transformMedia }}>
        <TransformWrapper style={{ transform: transformImage }}>
          <MediaStack data={heroMedia} />
        </TransformWrapper>
      </MediaWrapper>
    </HomeHeroWrapper>
  );
};

export default HomeHero;
