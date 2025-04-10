import styled from "styled-components";
import LogoSvg from "../../svgs/LogoSvg";
import FooterContactButton from "../../blocks/FooterContactButton";
import FooterLinks from "../../blocks/FooterLinks";
import { SiteSettingsType } from "../../../shared/types/types";
import pxToRem from "../../../utils/pxToRem";
import LayoutWrapper from "../../layout/LayoutWrapper";

const FooterWrapper = styled.footer`
  background: var(--colour-matcha);
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
`;

const Inner = styled.div`
  text-align: center;
  padding: ${pxToRem(120)} 0 ${pxToRem(16)};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BottomWrapper = styled.div``;

const LogoWrapper = styled.div`
  width: 100%;

  svg {
    width: 100%;
    height: auto;
  }
`;

type Props = {
  email?: SiteSettingsType["email"];
  instagram: SiteSettingsType["instagramUrl"];
  tiktok: string;
  linkedin: string;
  setContactModalIsOpen: (value: boolean) => void;
};

const Footer = (props: Props) => {
  const { email, instagram, tiktok, linkedin, setContactModalIsOpen } = props;

  return (
    <FooterWrapper>
      <LayoutWrapper>
        <Inner>
          <FooterContactButton setContactModalIsOpen={setContactModalIsOpen} />
          <BottomWrapper>
            <FooterLinks
              email={email}
              instagram={instagram}
              tiktok={tiktok}
              linkedin={linkedin}
            />
            <LogoWrapper>
              <LogoSvg />
            </LogoWrapper>
          </BottomWrapper>
        </Inner>
      </LayoutWrapper>
    </FooterWrapper>
  );
};

export default Footer;
