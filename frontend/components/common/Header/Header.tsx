import styled from "styled-components";
import LayoutWrapper from "../../layout/LayoutWrapper";
import Link from "next/link";
import pxToRem from "../../../utils/pxToRem";
import LogoSvg from "../../svgs/LogoSvg";
import ButtonLayout from "../../layout/ButtonLayout";
import { useEffect, useState } from "react";
import throttle from "lodash.throttle";
import MenuTrigger from "../../elements/MenuTrigger";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: rgba(246, 244, 237, 0.5);
  backdrop-filter: blur(10px);
`;

const Inner = styled.div<{ $isEngaged: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.$isEngaged ? pxToRem(40) : pxToRem(16))} 0;

  transition: all var(--transition-speed-default) var(--transition-ease);

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

  div,
  button {
    display: inline-block;
    text-align: right;
  }
`;

type Props = {
  menuIsOpen: boolean;
  contactModalIsOpen: boolean;
  setMenuIsOpen: (value: boolean) => void;
  setContactModalIsOpen: (value: boolean) => void;
};

const Header = (props: Props) => {
  const {
    menuIsOpen,
    contactModalIsOpen,
    setMenuIsOpen,
    setContactModalIsOpen,
  } = props;

  const [isEngaged, setIsEngaged] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollingUp = scrollTop < lastScrollTop;
    const atTopOfPage = scrollTop < 10;

    setIsEngaged(scrollingUp || atTopOfPage);
    setLastScrollTop(scrollTop);
  };

  useEffect(() => {
    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledHandleScroll);
    setIsEngaged(true);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  return (
    <HeaderWrapper className="header">
      <LayoutWrapper>
        <Inner $isEngaged={isEngaged}>
          <NavList>
            <Link href="/about" className="type-button hover-link">
              About
            </Link>
            <Link href="/portfolio" className="type-button hover-link">
              Portfolio
            </Link>
          </NavList>
          <LogoWrapper>
            <Link href="/" className="hover-link">
              <LogoSvg />
            </Link>
          </LogoWrapper>
          <ContactWrapper>
            <ButtonLayout isActive={contactModalIsOpen}>
              <button
                className="type-button"
                onClick={() => setContactModalIsOpen(!contactModalIsOpen)}
              >
                {contactModalIsOpen ? "Close Overlay" : "Contact Us"}
              </button>
            </ButtonLayout>
          </ContactWrapper>
          <MenuTrigger menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        </Inner>
      </LayoutWrapper>
    </HeaderWrapper>
  );
};

export default Header;
