import styled from "styled-components";
import pxToRem from "../../../utils/pxToRem";
import ArrowSvg from "../../svgs/ArrowSvg";

const ButtonLayoutWrapper = styled.div`
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

    svg {
      transform: rotate(90deg);

      path {
        stroke: var(--colour-off-white);
      }
    }
  }

  svg {
    height: 10px;
    width: 10px;
    position: relative;
    top: -1px;

    transition: all var(--transition-speed-default) var(--transition-ease);

    path {
      transition: all var(--transition-speed-default) var(--transition-ease);
    }
  }
`;

type Props = {
  children: React.ReactNode;
};

const ButtonLayout = (props: Props) => {
  const { children } = props;

  return (
    <ButtonLayoutWrapper className="type-button">
      {children} <ArrowSvg />
    </ButtonLayoutWrapper>
  );
};

export default ButtonLayout;
