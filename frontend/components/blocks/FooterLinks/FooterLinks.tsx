import styled from "styled-components";
import pxToRem from "../../../utils/pxToRem";
import Link from "next/link";

const FooterLinksWrapper = styled.div`
  margin-bottom: ${pxToRem(160)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${pxToRem(32)};
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(64)};

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    flex-direction: column;
    gap: ${pxToRem(24)};
  }
`;

const Terms = styled.div``;

type Props = {
  email?: string;
  instagram?: string;
  tiktok?: string;
  facebook?: string;
};

const FooterLinks = (props: Props) => {
  const { email, instagram, tiktok, facebook } = props;

  return (
    <FooterLinksWrapper>
      <SocialLinks>
        {instagram && (
          <Link
            href={instagram}
            target="_blank"
            className="type-button hover-link"
          >
            Instagram
          </Link>
        )}
        {tiktok && (
          <Link
            href={tiktok}
            target="_blank"
            className="type-button hover-link"
          >
            TikTok
          </Link>
        )}
        {facebook && (
          <Link
            href={facebook}
            target="_blank"
            className="type-button hover-link"
          >
            Facebook
          </Link>
        )}
      </SocialLinks>
      <Terms>
        <Link href="terms-conditions" className="type-button hover-link">
          Terms and Conditions
        </Link>
      </Terms>
    </FooterLinksWrapper>
  );
};

export default FooterLinks;
