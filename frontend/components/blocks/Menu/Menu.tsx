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
    border-bottom: 1px solid var(--colour-black);
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
  setContactModalIsOpen: (value: boolean) => void;
};

const Menu = (props: Props) => {
  const { menuIsOpen, setMenuIsOpen, setContactModalIsOpen } = props;

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
              <Link
                href="/about"
                className="type-button"
                onClick={() => setMenuIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/roster"
                className="type-button"
                onClick={() => setMenuIsOpen(false)}
              >
                Roster
              </Link>
              <ContactWrapper onClick={() => setMenuIsOpen(false)}>
                <ButtonLayout>
                  <button
                    className="type-button"
                    onClick={() => setContactModalIsOpen(true)}
                  >
                    Contact Us
                  </button>
                </ButtonLayout>
              </ContactWrapper>
            </NavList>
          </Inner>
        </MenuWrapper>
      )}
    </AnimatePresence>
  );
};

export default Menu;
