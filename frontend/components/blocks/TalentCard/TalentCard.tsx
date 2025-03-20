import styled from "styled-components";
import { TalentType } from "../../../shared/types/types";
import Image from "next/image";
import BorderAnimation from "../../elements/BorderAnimation";
import pxToRem from "../../../utils/pxToRem";
import { useContext } from "react";
import { TalentModalContext } from "../../layout/Layout";

const TalentCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(8)};
  grid-column: span 2;
  cursor: pointer;

  &:hover {
    img {
      transform: scale(1.02);
    }
  }

  img {
    transition: all var(--transition-speed-default) var(--transition-ease);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 140%;
  position: relative;
  overflow: hidden;
`;

const ImageInner = styled.div`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: ${pxToRem(8)};

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    flex-direction: column;
    gap: ${pxToRem(2)};
  }
`;

const Title = styled.p``;

const Tags = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Tag = styled.span`
  opacity: 0.6;
  white-space: pre;
`;

type Props = {
  title: TalentType["title"];
  slug: TalentType["slug"];
  tags: TalentType["tags"];
  heroThumbnail: TalentType["heroThumbnail"];
};

const TalentCard = (props: Props) => {
  const { title, slug, tags, heroThumbnail } = props;

  const { setActiveTalentSlug, setTalentModalIsOpen } =
    useContext(TalentModalContext);

  const handleClick = () => {
    setTalentModalIsOpen(true);
    setActiveTalentSlug(slug?.current);
  };

  return (
    <TalentCardWrapper className="cursor-link" onClick={() => handleClick()}>
      <ImageWrapper>
        {heroThumbnail?.asset?.url && (
          <ImageInner>
            <BorderAnimation />
            <Image
              src={heroThumbnail?.asset?.url}
              alt={title || ""}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </ImageInner>
        )}
      </ImageWrapper>
      <ContentWrapper>
        {title && <Title className="type-caption">{title}</Title>}
        <Tags>
          {tags.map((tag, i) => (
            <Tag key={i} className="type-caption">
              {tag}
              {i < tags.length - 1 && tags.length > 1 ? ", " : ""}
            </Tag>
          ))}
        </Tags>
      </ContentWrapper>
    </TalentCardWrapper>
  );
};

export default TalentCard;
