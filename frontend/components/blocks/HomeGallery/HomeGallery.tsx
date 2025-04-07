import styled from "styled-components";
import { HomePageType } from "../../../shared/types/types";
import LayoutWrapper from "../../layout/LayoutWrapper";
import LayoutGrid from "../../layout/LayoutGrid";
import Image from "next/image";
import pxToRem from "../../../utils/pxToRem";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import router from "next/router";

const HomeGalleryWrapper = styled.section`
  padding: ${pxToRem(280)} 0 ${pxToRem(360)};
  position: relative;
  z-index: 2;
  background: transparent;
  pointer-events: none;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    padding: ${pxToRem(120)} 0;
    margin-bottom: 0;
  }
`;

const ImageWrapper = styled(motion.div)<{ $ratio: string }>`
  position: relative;
  padding-top: ${(props) => props.$ratio};

  &:nth-child(1) {
    grid-column: 3 / 5;
    margin-bottom: ${pxToRem(180)};

    @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
      grid-column: 2 / -2;
    }
  }

  &:nth-child(2) {
    grid-column: 2 / 4;
    margin-bottom: ${pxToRem(64)};

    @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
      grid-column: 1 / 3;
    }
  }

  &:nth-child(3) {
    grid-column: 5 / -2;
    top: ${pxToRem(240)};

    @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
      grid-column: 2 / -1;
      top: 0;
    }
  }
`;

const ImageInner = styled.div`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
`;

type Props = {
  data: HomePageType["gallery"];
};

const HomeGallery = (props: Props) => {
  const { data } = props;

  const firstThreeImages = data.slice(0, 3);

  return (
    <HomeGalleryWrapper>
      <LayoutWrapper>
        <LayoutGrid>
          {firstThreeImages.map((item, i) => {
            const ratio = item?.aspectRatio === "landscape" ? "56.25%" : "170%";

            return (
              <ImageComponent
                key={i}
                ratio={ratio}
                src={item?.image?.asset?.url}
                index={i}
              />
            );
          })}
        </LayoutGrid>
      </LayoutWrapper>
    </HomeGalleryWrapper>
  );
};

const ImageComponent = (props: {
  src: string;
  ratio: string;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  const [windowHeight, setWindowHeight] = useState(0);
  const [distanceToTop, setDistanceToTop] = useState(0);

  const translates = [
    ["translateY(50px)", "translateY(0px)", "translateY(-50px)"],
    ["translateY(-50px)", "translateY(0px)", "translateY(50px)"],
    ["translateY(50px)", "translateY(0px)", "translateY(-50px)"],
  ];

  const transform = useTransform(
    scrollY,
    [
      distanceToTop - windowHeight,
      distanceToTop + windowHeight,
      distanceToTop + windowHeight * 2,
    ],
    translates[props.index]
  );

  useEffect(() => {
    if (ref?.current) {
      setDistanceToTop(
        window.pageYOffset + ref.current.getBoundingClientRect().top
      );
    }

    setWindowHeight(window.innerHeight);

    const timer = setTimeout(() => {
      if (ref?.current) {
        setDistanceToTop(
          window.pageYOffset + ref.current.getBoundingClientRect().top
        );
      }

      setWindowHeight(window.innerHeight);
    }, 1000);

    return () => clearTimeout(timer);
  }, [distanceToTop, router]);

  return (
    <ImageWrapper $ratio={props.ratio} ref={ref} style={{ transform }}>
      <ImageInner>
        <Image
          src={props.src}
          alt="Gallery image"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </ImageInner>
    </ImageWrapper>
  );
};

export default HomeGallery;
