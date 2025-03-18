import styled from "styled-components";
import LogoSvg from "../../svgs/LogoSvg";
import FooterContactButton from "../../blocks/FooterContactButton";
import FooterLinks from "../../blocks/FooterLinks";
import { SiteSettingsType } from "../../../shared/types/types";
import pxToRem from "../../../utils/pxToRem";
import LayoutWrapper from "../../layout/LayoutWrapper";

const FooterWrapper = styled.footer`
  background: var(--colour-matcha);
`;

const Inner = styled.div`
  text-align: center;
  padding: ${pxToRem(120)} 0 ${pxToRem(16)};
`;

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
  facebook: string;
};

const Footer = (props: Props) => {
  const { email, instagram, tiktok, facebook } = props;

  return (
    <FooterWrapper>
      <LayoutWrapper>
        <Inner>
          <FooterContactButton />
          <FooterLinks
            email={email}
            instagram={instagram}
            tiktok={tiktok}
            facebook={facebook}
          />
          <LogoWrapper>
            <LogoSvg />
          </LogoWrapper>
        </Inner>
      </LayoutWrapper>
    </FooterWrapper>
  );
};

export default Footer;
