import styled from "styled-components";

const BorderAnimationWrapper = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  border: 0 solid var(--colour-matcha);
  z-index: 2;

  transition: all var(--transition-speed-default) var(--transition-ease);

  &:hover {
    border: 6px solid var(--colour-matcha);
  }
`;

const BorderAnimation = () => {
  return <BorderAnimationWrapper className="border-animation" />;
};

export default BorderAnimation;
