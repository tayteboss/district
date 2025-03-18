import styled from "styled-components";
import pxToRem from "../../../utils/pxToRem";
import Link from "next/link";
import ButtonLayout from "../../layout/ButtonLayout";
import { AnimatePresence, motion } from "framer-motion";

const MenuWrapper = styled(motion.div)`
  display: none;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 90;
    background: var(--colour-off-white);
  }
`;

const Inner = styled.div`
  padding-top: var(--header-h);
`;

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(32)};
  padding: ${pxToRem(32)} 0;
`;

const ContactWrapper = styled.div``;

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
  menuIsOpen: boolean;
  setMenuIsOpen: (value: boolean) => void;
};

const Menu = (props: Props) => {
  const { menuIsOpen, setMenuIsOpen } = props;

  return (
    <AnimatePresence>
      {menuIsOpen && (
        <MenuWrapper
          variants={wrapperVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Inner>
            <NavList>
              <Link href="/about" className="type-button">
                About
              </Link>
              <Link href="/portfolio" className="type-button">
                Portfolio
              </Link>
              <ContactWrapper>
                <Link href="/contact">
                  <ButtonLayout>Contact Us</ButtonLayout>
                </Link>
              </ContactWrapper>
            </NavList>
          </Inner>
        </MenuWrapper>
      )}
    </AnimatePresence>
  );
};

export default Menu;
