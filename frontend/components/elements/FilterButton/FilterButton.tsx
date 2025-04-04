import { useEffect, useState } from "react";
import styled from "styled-components";
import pxToRem from "../../../utils/pxToRem";

const FilterButtonWrapper = styled.button<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: ${pxToRem(4)};
  padding: ${pxToRem(6)} ${pxToRem(12)} ${pxToRem(4)};
  border-radius: 100px;
  background: ${(props) =>
    props.$isActive ? "var(--colour-matcha)" : "var(--colour-off-white)"};
  color: var(--colour-black);
  text-transform: uppercase;
  border: ${(props) =>
    props.$isActive
      ? "1px solid var(--colour-matcha)"
      : "1px solid var(--colour-black)"};

  transition: all var(--transition-speed-default) var(--transition-ease);

  div {
    background: ${(props) => props.$isActive && "var(--colour-black)"};
  }

  &:hover {
    background: var(--colour-black);
    color: var(--colour-white);
    border: 1px solid var(--colour-black);

    div {
      border-color: var(--colour-white);
    }
  }
`;

const Circle = styled.div`
  width: ${pxToRem(6)};
  height: ${pxToRem(6)};
  border: 1px solid var(--colour-black);
  border-radius: 50%;
  position: relative;
  transform: translateY(-1px);
  background: var(--colour-off-white);

  transition: all var(--transition-speed-default) var(--transition-ease);
`;

type Props = {
  tag: string;
  activeTags: string[];
  setActiveTags: (tags: string[]) => void;
};

const FilterButton = (props: Props) => {
  const { tag, activeTags, setActiveTags } = props;

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  useEffect(() => {
    if (activeTags.includes(tag)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeTags]);

  return (
    <FilterButtonWrapper
      onClick={() => handleClick()}
      $isActive={isActive}
      className="type-button"
    >
      <Circle />
      {tag === "sport" ? "Health & Fitness" : tag}
    </FilterButtonWrapper>
  );
};

export default FilterButton;
