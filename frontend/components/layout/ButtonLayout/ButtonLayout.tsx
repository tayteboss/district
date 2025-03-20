import styled from "styled-components";
import pxToRem from "../../../utils/pxToRem";
import ArrowSvg from "../../svgs/ArrowSvg";

const ButtonLayoutWrapper = styled.div<{ $isActive?: boolean }>`
  background: var(--colour-matcha);
  color: var(--colour-black);
  padding: ${pxToRem(7)} ${pxToRem(12)} ${pxToRem(4)};
  display: flex;
  align-items: center;
  gap: ${pxToRem(4)};
  border-radius: 100px;
  line-height: 1 !important;

  transition: all var(--transition-speed-default) var(--transition-ease);

  &:hover {
    background: var(--colour-black);
    color: var(--colour-off-white);

    * {
      color: var(--colour-off-white);
    }

    svg {
      transform: rotate(90deg);

      path {
        stroke: var(--colour-off-white);
      }
    }
  }

  * {
    cursor: pointer;

    transition: all var(--transition-speed-default) var(--transition-ease);
  }

  svg {
    height: 10px;
    width: 10px;
    position: relative;
    top: -1px;
    transform: ${(props) => props.$isActive && "rotate(90deg)"};

    transition: all var(--transition-speed-default) var(--transition-ease);

    path {
      transition: all var(--transition-speed-default) var(--transition-ease);
    }
  }
`;

type Props = {
  children: React.ReactNode;
  isActive?: boolean;
};

const ButtonLayout = (props: Props) => {
  const { children, isActive } = props;

  return (
    <ButtonLayoutWrapper className="type-button" $isActive={isActive}>
      {children} <ArrowSvg />
    </ButtonLayoutWrapper>
  );
};

export default ButtonLayout;
