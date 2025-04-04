import styled from "styled-components";
import { PersonType } from "../../../shared/types/types";
import pxToRem from "../../../utils/pxToRem";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const PersonCardWrapper = styled.div`
  display: flex;
  gap: ${pxToRem(16)};
  padding: ${pxToRem(64)} 0;
  position: relative;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    flex-direction: column;
    padding: ${pxToRem(12)} 0;
  }

  &:nth-child(7n + 1) {
    grid-area: cell1;
  }
  &:nth-child(7n + 2) {
    grid-area: cell2;
  }
  &:nth-child(7n + 3) {
    grid-area: cell3;
  }
  &:nth-child(7n + 4) {
    grid-area: cell4;
  }
  &:nth-child(7n + 5) {
    grid-area: cell5;
  }
  &:nth-child(7n + 6) {
    grid-area: cell6;
  }
  &:nth-child(7n + 7) {
    grid-area: cell7;
  }
`;

const ImageWrapper = styled.div`
  width: calc(50% - 8px);
  overflow: hidden;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    width: 100%;
  }
`;

const ImageRatio = styled.div`
  padding-top: 140%;
  position: relative;
`;

const ImageInner = styled.div<{ $inView: boolean }>`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${(props) => (props.$inView ? "0" : "100%")};
    background: var(--colour-off-white);

    transition: all var(--transition-speed-slow) var(--transition-ease);
    transition-delay: 500ms;
  }

  img {
    transform: ${(props) => (props.$inView ? "scale(1.1)" : "scale(1)")};

    transition: all 2000ms var(--transition-ease);
  }
`;

const ContentWrapper = styled.div``;

const Name = styled.p``;

const Position = styled.p`
  opacity: 0.5;
`;

type Props = {
  name: PersonType["name"];
  position: PersonType["position"];
  image: PersonType["image"];
};

const PersonCard = (props: Props) => {
  const { name, position, image } = props;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: "-50px",
  });

  return (
    <PersonCardWrapper ref={ref}>
      <ImageWrapper>
        {image?.asset?.url && (
          <ImageRatio>
            <ImageInner $inView={inView}>
              <Image
                src={image?.asset?.url}
                alt={name}
                priority={false}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </ImageInner>
          </ImageRatio>
        )}
      </ImageWrapper>
      <ContentWrapper
        className={`view-element-fade-in ${
          inView ? "view-element-fade-in--in-view" : ""
        }`}
      >
        {name && <Name className="type-caption">{name}</Name>}
        {position && <Position className="type-caption">{position}</Position>}
      </ContentWrapper>
    </PersonCardWrapper>
  );
};

export default PersonCard;
