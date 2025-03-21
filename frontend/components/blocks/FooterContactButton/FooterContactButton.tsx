import Link from "next/link";
import styled from "styled-components";

const FooterContactButtonWrapper = styled.div`
  a {
    transition: all var(--transition-speed-slow) var(--transition-ease);
  }

  a:hover {
    filter: drop-shadow(0px 0px 15.289px #f6f4ed)
      drop-shadow(0px 0px 30.577px #f6f4ed)
      drop-shadow(0px 0px 107.02px #f6f4ed)
      drop-shadow(0px 0px 214.04px #f6f4ed);
  }
`;

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
