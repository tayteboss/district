import styled from "styled-components";
import { HomePageType } from "../../../shared/types/types";
import Marquee from "react-fast-marquee";
import TalentCarouselCard from "../TalentCarouselCard";
import pxToRem from "../../../utils/pxToRem";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const TalentCarouselWrapper = styled.section`
  margin-bottom: ${pxToRem(64)};
  position: relative;
  z-index: 2;
  background: var(--colour-off-white);

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    margin-bottom: 0;
  }

  .embla__container {
    align-items: flex-end;
  }

  .embla__slide {
    flex: 0 0 20vw;
    margin-right: ${pxToRem(16)};

    @media ${(props) => props.theme.mediaBreakpoints.tabletLandscape} {
      flex: 0 0 25vw;
    }

    @media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
      flex: 0 0 35vw;
    }

    @media ${(props) => props.theme.mediaBreakpoints.mobile} {
      flex: 0 0 50vw;
    }
  }

  .embla__slide:nth-child(4n + 1) {
    .talent-carousel-card__image-wrapper {
      padding-top: 105%;
    }
  }
  .embla__slide:nth-child(4n + 2) {
    .talent-carousel-card__image-wrapper {
      padding-top: 140%;
    }
  }
  .embla__slide:nth-child(4n + 3) {
    .talent-carousel-card__image-wrapper {
      padding-top: 60%;
    }
  }
  .embla__slide:nth-child(4n + 4) {
    .talent-carousel-card__image-wrapper {
      padding-top: 140%;
    }
  }
`;

type Props = {
  data: HomePageType["featuredTalent"];
};

const TalentCarousel = (props: Props) => {
  const { data } = props;

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, skipSnaps: true, dragFreeze: true } as EmblaOptionsType,
    [
      !isMobile
        ? AutoScroll({
            playOnInit: true,
            stopOnInteraction: false,
            direction: "backward",
          })
        : undefined,
    ].filter(Boolean)
  );

  const hasData = data && data.length > 0;

  return (
    <TalentCarouselWrapper>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {hasData &&
            data.map((item, i) => (
              <div className={`embla__slide`} key={i}>
                <TalentCarouselCard
                  title={item?.title}
                  featuredTag={item?.featuredTag}
                  featuredSocialLink={item?.featuredSocialLink}
                  slug={item?.slug}
                  heroThumbnail={item?.heroThumbnail}
                  key={i}
                />
              </div>
            ))}
        </div>
      </div>
    </TalentCarouselWrapper>
  );
};

export default TalentCarousel;
