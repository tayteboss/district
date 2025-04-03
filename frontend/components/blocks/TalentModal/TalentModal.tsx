import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import LayoutWrapper from "../../layout/LayoutWrapper";
import LayoutGrid from "../../layout/LayoutGrid";
import TalentGallery from "../TalentGallery";
import pxToRem from "../../../utils/pxToRem";
import formatHTML from "../../../utils/formatHTML";

const TalentModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  height: 100dvh;
  width: 100%;
  z-index: 95;
  background: rgba(246, 244, 237, 0.85);
  overflow-y: auto;

  backdrop-filter: blur(16px);
`;

const Inner = styled.div`
  padding-top: calc(64px + var(--header-h));
  padding-bottom: 15vh;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    padding-top: calc(24px + var(--header-h));
  }
`;

const ContentWrapper = styled.div`
  grid-column: 4 / -1;
  padding: ${pxToRem(64)};

  @media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
    padding: ${pxToRem(32)};
  }

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    grid-column: 1 / -1;
    padding: ${pxToRem(48)} 0;
  }
`;

const Title = styled.h1`
  margin-bottom: ${pxToRem(64)};

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    margin-bottom: ${pxToRem(32)};
  }
`;

const Content = styled.div`
  margin-bottom: ${pxToRem(80)};

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    margin-bottom: ${pxToRem(32)};
  }
`;

const CloseTrigger = styled.button`
  background: transparent;
  color: var(--colour-black);
  padding: ${pxToRem(7)} ${pxToRem(12)} ${pxToRem(4)};
  border-radius: 100px;
  border: 1px solid var(--colour-black);
  text-transform: uppercase;

  transition: all var(--transition-speed-default) var(--transition-ease);

  &:hover {
    background: var(--colour-black);
    color: var(--colour-off-white);
  }
`;

const wrapperVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

type Props = {
  isActive: boolean;
  data: boolean | any;
  setTalentModalIsOpen: (state: boolean) => void;
};

const TalentModal = (props: Props) => {
  const { isActive, data, setTalentModalIsOpen } = props;

  console.log("data", data);

  return (
    <AnimatePresence>
      {isActive && (
        <TalentModalWrapper
          variants={wrapperVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          data-lenis-prevent
        >
          <LayoutWrapper>
            <Inner>
              <LayoutGrid>
                <TalentGallery
                  heroThumbnail={data?.heroThumbnail}
                  heroGallery={data?.heroGallery}
                  socialLinks={data?.socialLinks}
                />
                <ContentWrapper>
                  {data?.title && <Title>{data?.title}</Title>}
                  <Content
                    dangerouslySetInnerHTML={{
                      __html: formatHTML(data?.description),
                    }}
                    className="type-b2"
                  />
                  <CloseTrigger
                    className="type-button"
                    onClick={() => setTalentModalIsOpen(false)}
                  >
                    Close
                  </CloseTrigger>
                </ContentWrapper>
              </LayoutGrid>
            </Inner>
          </LayoutWrapper>
        </TalentModalWrapper>
      )}
    </AnimatePresence>
  );
};

export default TalentModal;
