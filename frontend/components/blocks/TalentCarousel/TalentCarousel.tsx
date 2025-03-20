import styled from "styled-components";
import { HomePageType } from "../../../shared/types/types";
import Marquee from "react-fast-marquee";
import TalentCarouselCard from "../TalentCarouselCard";
import pxToRem from "../../../utils/pxToRem";

const TalentCarouselWrapper = styled.section`
  margin-bottom: ${pxToRem(64)};
  position: relative;
  z-index: 2;
  background: var(--colour-off-white);

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    margin-bottom: 0;
  }

  .rfm-initial-child-container {
    align-items: end !important;
  }

  .rfm-marquee {
    align-items: end !important;
  }

  .rfm-child:nth-child(4n + 1) {
    .talent-carousel-card__image-wrapper {
      padding-top: 105%;
    }
  }
  .rfm-child:nth-child(4n + 2) {
    .talent-carousel-card__image-wrapper {
      padding-top: 140%;
    }
  }
  .rfm-child:nth-child(4n + 3) {
    .talent-carousel-card__image-wrapper {
      padding-top: 60%;
    }
  }
  .rfm-child:nth-child(4n + 4) {
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

  const hasData = data && data.length > 0;

  return (
    <TalentCarouselWrapper>
      <Marquee direction="right">
        {hasData &&
          data.map((item, i) => (
            <TalentCarouselCard
              title={item?.title}
              featuredTag={item?.featuredTag}
              featuredSocialLink={item?.featuredSocialLink}
              slug={item?.slug}
              heroThumbnail={item?.heroThumbnail}
              key={i}
            />
          ))}
      </Marquee>
    </TalentCarouselWrapper>
  );
};

export default TalentCarousel;
