import styled from "styled-components";
import { TalentType } from "../../../shared/types/types";
import pxToRem from "../../../utils/pxToRem";
import Image from "next/image";
import BorderAnimation from "../../elements/BorderAnimation";
import { useContext } from "react";
import { TalentModalContext } from "../../layout/Layout";

const TalentCarouselCardWrapper = styled.div`
  margin-right: ${pxToRem(16)};

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    margin-right: ${pxToRem(12)};
  }
`;

const ContentBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${pxToRem(8)};
  width: 100%;
`;

const Title = styled.h4``;

const Tag = styled.a`
  transition: all var(--transition-speed-default) var(--transition-ease);

  &:hover {
    opacity: 0.7;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 20vw;
  overflow: hidden;
  cursor: pointer;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    width: 35vw;
  }

  @media ${(props) => props.theme.mediaBreakpoints.mobile} {
    width: 45vw;
  }

  &:hover {
    img {
      transform: scale(1.02);
    }
  }

  img {
    transition: all var(--transition-speed-default) var(--transition-ease);
  }
`;

const ImageInner = styled.div`
  position: absolute;
  inset: 0;
`;

type Props = {
  title: TalentType["title"];
  heroThumbnail: TalentType["heroThumbnail"];
  slug: TalentType["slug"];
  featuredTag: TalentType["featuredTag"];
  featuredSocialLink: TalentType["featuredSocialLink"];
};

const TalentCarouselCard = (props: Props) => {
  const { title, heroThumbnail, slug, featuredTag, featuredSocialLink } = props;
  const { setActiveTalentSlug, setTalentModalIsOpen } =
    useContext(TalentModalContext);

  const handleClick = () => {
    setTalentModalIsOpen(true);
    setActiveTalentSlug(slug?.current);
  };

  return (
    <TalentCarouselCardWrapper>
      <ContentBar>
        {title && <Title className="type-caption">{title}</Title>}
        {featuredTag && (
          <Tag
            className="type-caption"
            href={featuredSocialLink || "#"}
            target="_blank"
          >
            {featuredTag}
          </Tag>
        )}
      </ContentBar>
      {heroThumbnail?.asset?.url && (
        <ImageWrapper
          className="talent-carousel-card__image-wrapper cursor-link"
          onClick={handleClick}
        >
          <BorderAnimation />
          <ImageInner>
            <Image
              src={heroThumbnail?.asset?.url}
              alt={title || ""}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </ImageInner>
        </ImageWrapper>
      )}
    </TalentCarouselCardWrapper>
  );
};

export default TalentCarouselCard;
