import styled from "styled-components";
import CrossSvg from "../svgs/CrossSvg";

const MenuTriggerWrapper = styled.button`
  display: none;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    display: block;
    flex: 1;
    text-align: right;
  }
`;

const Inner = styled.div<{ $isActive: boolean }>`
  svg {
    transform: rotate(${(props) => (props.$isActive ? "45deg" : "0deg")});

    transition: all var(--transition-speed-default) var(--transition-ease);
  }
`;

type Props = {
  menuIsOpen: boolean;
  setMenuIsOpen: (value: boolean) => void;
};

const MenuTrigger = (props: Props) => {
  const { menuIsOpen, setMenuIsOpen } = props;

  return (
    <MenuTriggerWrapper onClick={() => setMenuIsOpen(!menuIsOpen)}>
      <Inner $isActive={menuIsOpen}>
        <CrossSvg />
      </Inner>
    </MenuTriggerWrapper>
  );
};

export default MenuTrigger;
