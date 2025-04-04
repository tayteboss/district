import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import LayoutGrid from "../../layout/LayoutGrid";
import LayoutWrapper from "../../layout/LayoutWrapper";
import { SiteSettingsType } from "../../../shared/types/types";
import ContactFormButton from "../../elements/ContactFormButton";
import pxToRem from "../../../utils/pxToRem";
import ContactLinkButton from "../../elements/ContactLinkButton";
import Link from "next/link";

const ContactModalWrapper = styled(motion.div)`
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
  padding-top: calc(50vh - var(--header-h));

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    padding-top: 0;
    height: 100vh;

    .layout-grid {
      height: 100%;
      align-items: center;
      row-gap: ${pxToRem(64)};
    }
  }
`;

const LHS = styled.div`
  grid-column: 1 / 5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${pxToRem(40)};

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    grid-column: 1 / -1;
    align-self: end;
    gap: ${pxToRem(24)};
  }
`;

const RHS = styled.div`
  grid-column: 5 / -1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${pxToRem(32)};

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    grid-column: 1 / -1;
    align-self: start;
    gap: ${pxToRem(24)};
  }
`;

const SocialLinks = styled.div`
  grid-column: 3 / 4;
  display: flex;
  align-items: flex-start;
  gap: ${pxToRem(32)};

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    grid-column: 1 / -1;
    flex-direction: row;
    gap: ${pxToRem(24)};
  }
`;

const CloseTrigger = styled.button`
  display: none;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    display: block;
    position: absolute;
    bottom: ${pxToRem(64)};
    left: 50%;
    transform: translateX(-50%);
    background: var(--colour-matcha);
    color: var(--colour-black);
    padding: ${pxToRem(7)} ${pxToRem(12)} ${pxToRem(4)};
    border-radius: 100px;
    line-height: 1 !important;
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
  instagramUrl: SiteSettingsType["instagramUrl"];
  tiktokUrl: SiteSettingsType["tiktokUrl"];
  linkedinUrl: SiteSettingsType["linkedinUrl"];
  email: SiteSettingsType["email"];
  phone: SiteSettingsType["phone"];
  officeAddress: SiteSettingsType["officeAddress"];
  officeGoogleMapsLink: SiteSettingsType["officeGoogleMapsLink"];
  forBrandsButtonTitle: SiteSettingsType["forBrandsButtonTitle"];
  forBrandsButtonLink: SiteSettingsType["forBrandsButtonLink"];
  forTalentButtonTitle: SiteSettingsType["forTalentButtonTitle"];
  forTalentButtonLink: SiteSettingsType["forTalentButtonLink"];
  setContactModalIsOpen: (state: boolean) => void;
};

const ContactModal = (props: Props) => {
  const {
    isActive,
    instagramUrl,
    tiktokUrl,
    linkedinUrl,
    email,
    phone,
    officeAddress,
    officeGoogleMapsLink,
    forBrandsButtonTitle,
    forBrandsButtonLink,
    forTalentButtonTitle,
    forTalentButtonLink,
    setContactModalIsOpen,
  } = props;

  const hasSocials = instagramUrl || tiktokUrl || linkedinUrl;

  const socialLinks = [
    { link: instagramUrl, title: "Instagram" },
    { link: tiktokUrl, title: "Tiktok" },
    { link: linkedinUrl, title: "LinkedIn" },
  ];

  return (
    <AnimatePresence>
      {isActive && (
        <ContactModalWrapper
          variants={wrapperVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          data-lenis-prevent
        >
          <LayoutWrapper>
            <Inner>
              <LayoutGrid>
                <LHS>
                  <ContactFormButton
                    title="Partner with a Creator"
                    linkUrl={forBrandsButtonLink}
                    linkTitle={forBrandsButtonTitle}
                  />
                  <ContactFormButton
                    title="For Talent"
                    linkUrl={forTalentButtonLink}
                    linkTitle={forTalentButtonTitle}
                  />
                </LHS>
                <RHS>
                  <ContactLinkButton
                    title="Office"
                    linkUrl={officeGoogleMapsLink}
                    linkTitle={officeAddress}
                  />
                  <ContactLinkButton
                    title="Email"
                    linkUrl={`mailto:${email}`}
                    linkTitle="General Enquiries"
                  />
                  <ContactLinkButton
                    title="Phone"
                    linkUrl={`tel:${phone}`}
                    linkTitle={phone}
                  />
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
                </RHS>
              </LayoutGrid>
            </Inner>
          </LayoutWrapper>
          <CloseTrigger
            className="type-button"
            onClick={() => setContactModalIsOpen(false)}
          >
            Close
          </CloseTrigger>
        </ContactModalWrapper>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
