import styled from "styled-components";
import { HomePageType } from "../../../shared/types/types";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";
import pxToRem from "../../../utils/pxToRem";

const PartnersCarouselWrapper = styled.section`
  padding: ${pxToRem(64)} 0;
  margin-bottom: ${pxToRem(120)};

  @media ${(props) => props.theme.mediaBreakpoints.mobile} {
    padding: ${pxToRem(24)} 0;
    margin-bottom: ${pxToRem(64)};
  }
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: ${pxToRem(64)};

  @media ${(props) => props.theme.mediaBreakpoints.mobile} {
    margin-bottom: ${pxToRem(12)};
  }
`;

const MarqueeWrapper = styled.div`
  .rfm-child {
    margin-right: ${pxToRem(64)};

    @media ${(props) => props.theme.mediaBreakpoints.mobile} {
      margin-right: ${pxToRem(12)};
    }
  }
`;

const LogoWrapper = styled.div`
  @media ${(props) => props.theme.mediaBreakpoints.mobile} {
    img {
      width: ${pxToRem(70)};
      height: ${pxToRem(70)};
    }
  }
`;

type Props = {
  data: HomePageType["partnersLogos"];
  title: HomePageType["partnersTitle"];
};

const PartnersCarousel = (props: Props) => {
  const { data, title } = props;

  const hasData = data && data.length > 0;

  return (
    <PartnersCarouselWrapper>
      {title && <Title className="type-caption">{title}</Title>}
      <MarqueeWrapper>
        <Marquee>
          {hasData &&
            data.map((item, i) =>
              item?.logoLink ? (
                <Link
                  href={item.logoLink}
                  target="_blank"
                  key={i}
                  className="marquee-item"
                >
                  <LogoWrapper className="hover-link">
                    <Image
                      src={item?.logo?.asset?.url}
                      alt={item.title}
                      width={210}
                      height={210}
                    />
                  </LogoWrapper>
                </Link>
              ) : (
                <LogoWrapper key={i} className="marquee-item">
                  <Image
                    src={item?.logo?.asset?.url}
                    alt={item.title}
                    width={210}
                    height={210}
                  />
                </LogoWrapper>
              )
            )}
        </Marquee>
      </MarqueeWrapper>
    </PartnersCarouselWrapper>
  );
};

export default PartnersCarousel;
