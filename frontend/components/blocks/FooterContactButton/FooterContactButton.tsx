import Link from "next/link";
import styled from "styled-components";

const FooterContactButtonWrapper = styled.div``;

const FooterContactButton = () => {
  return (
    <FooterContactButtonWrapper>
      <Link href="/contact" className="type-super hover-link">
        Contact Us
      </Link>
    </FooterContactButtonWrapper>
  );
};

export default FooterContactButton;
