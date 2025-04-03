import styled from "styled-components";
import { TalentType } from "../../../shared/types/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import pxToRem from "../../../utils/pxToRem";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "framer-motion";

const TalentGalleryWrapper = styled.div`
  grid-column: 1 / 4;
  display: grid;
  grid-template-columns: subgrid;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    grid-column: 1 / -1;
  }
`;

const Gallery = styled.div`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(4)};

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    grid-column: 1 / -1;
    margin-bottom: ${pxToRem(24)};
  }
`;

const HeroImage = styled(motion.div)`
  width: 100%;
  padding-top: 140%;
  position: relative;
`;

const HeroImageInner = styled.div`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
`;

const CarouselImage = styled(motion.button)`
  width: 100%;
  padding-top: 140%;
  position: relative;

  transition: all var(--transition-speed-default) var(--transition-ease);

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    padding-top: 100%;
  }
`;

const CarouselImageInner = styled.div<{ $isActive: boolean }>`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: calc(100% - 4px);
    width: calc(100% - 4px);
    border: 2px solid
      ${(props) => (props.$isActive ? "var(--colour-matcha)" : "transparent")};

    transition: all var(--transition-speed-default) var(--transition-ease);
  }
`;

const SocialLinks = styled.div`
  grid-column: 3 / 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${pxToRem(16)};

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    grid-column: 1 / -1;
    flex-direction: row;
    gap: ${pxToRem(24)};
  }
`;

type Props = {
  heroThumbnail: TalentType["heroThumbnail"];
  heroGallery: TalentType["heroGallery"];
  socialLinks: TalentType["socialLinks"];
};

const TalentGallery = (props: Props) => {
  const { heroThumbnail, heroGallery, socialLinks } = props;

  const [activeIndex, setActiveIndex] = useState(0);
  const [gallery, setGallery] = useState<string[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const sortGallery = (
    heroThumbnailUrl: string | undefined,
    heroGallery: TalentType["heroGallery"]
  ) => {
    if (!heroGallery || heroGallery.length === 0) {
      if (heroThumbnailUrl) {
        return [heroThumbnailUrl];
      }
      return [];
    }
    const galleryUrls = heroGallery.map(
      (galleryItem) => galleryItem?.image.asset.url
    );
    if (heroThumbnailUrl) {
      galleryUrls.unshift(heroThumbnailUrl);
    }
    return galleryUrls;
  };

  useEffect(() => {
    setGallery(sortGallery(heroThumbnail?.asset?.url, heroGallery));
  }, [heroThumbnail, heroGallery]);

  const hasSocials = socialLinks && socialLinks.length > 0;

  return (
    <TalentGalleryWrapper>
      <Gallery>
        <AnimatePresence mode="wait">
          <HeroImage
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HeroImageInner>
              <Image
                src={gallery[activeIndex]}
                alt="Gallery image"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </HeroImageInner>
          </HeroImage>
        </AnimatePresence>
        {gallery.length > 1 && (
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {gallery.map((image, i) => (
                <div
                  className={`embla__slide ${i <= 4 ? "flush" : "overlay"}`}
                  key={i}
                >
                  <CarouselImage onClick={() => setActiveIndex(i)}>
                    <CarouselImageInner $isActive={activeIndex === i}>
                      <Image
                        src={image}
                        alt="Gallery image"
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </CarouselImageInner>
                  </CarouselImage>
                </div>
              ))}
            </div>
          </div>
        )}
      </Gallery>
      <SocialLinks>
        {hasSocials &&
          socialLinks.map((item, i) => (
            <Link
              href={item?.link || "#"}
              target="_blank"
              key={i}
              className="type-button uppercase hover-link"
            >
              {item?.title || ""}
            </Link>
          ))}
      </SocialLinks>
    </TalentGalleryWrapper>
  );
};

export default TalentGallery;
