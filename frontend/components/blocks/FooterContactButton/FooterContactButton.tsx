import Link from "next/link";
import styled from "styled-components";
import pxToRem from "../../../utils/pxToRem";

const FooterContactButtonWrapper = styled.div`
  margin-bottom: ${pxToRem(240)};

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    margin-bottom: ${pxToRem(164)};
  }
`;

const FooterContactButton = () => {
  return (
    <FooterContactButtonWrapper>
      <Link href="/contact" className="type-super">
        Contact Us
      </Link>
    </FooterContactButtonWrapper>
  );
};

export default FooterContactButton;
