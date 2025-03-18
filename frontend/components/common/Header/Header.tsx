import styled from "styled-components";
import LayoutWrapper from "../../layout/LayoutWrapper";
import Link from "next/link";
import pxToRem from "../../../utils/pxToRem";
import LogoSvg from "../../svgs/LogoSvg";
import ButtonLayout from "../../layout/ButtonLayout";
import MenuTrigger from "../../elements";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: var(--colour-off-white);
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${pxToRem(40)} 0;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    padding: ${pxToRem(16)} 0;
  }
`;

const NavList = styled.div`
  display: flex;
  gap: ${pxToRem(48)};
  flex: 1;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    * {
      display: none;
    }
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  text-align: center;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    svg {
      width: ${pxToRem(91)};
      height: ${pxToRem(10)};
    }
  }
`;

const ContactWrapper = styled.div`
  flex: 1;
  text-align: right;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    display: none;
  }
`;

type Props = {
  menuIsOpen: boolean;
  setMenuIsOpen: (value: boolean) => void;
};

const Header = (props: Props) => {
  const { menuIsOpen, setMenuIsOpen } = props;

  return (
    <HeaderWrapper className="header">
      <LayoutWrapper>
        <Inner>
          <NavList>
            <Link href="/about" className="type-button">
              About
            </Link>
            <Link href="/portfolio" className="type-button">
              Portfolio
            </Link>
          </NavList>
          <LogoWrapper>
            <Link href="/">
              <LogoSvg />
            </Link>
          </LogoWrapper>
          <ContactWrapper>
            <Link href="/contact">
              <ButtonLayout>Contact Us</ButtonLayout>
            </Link>
          </ContactWrapper>
          <MenuTrigger menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        </Inner>
      </LayoutWrapper>
    </HeaderWrapper>
  );
};

export default Header;
