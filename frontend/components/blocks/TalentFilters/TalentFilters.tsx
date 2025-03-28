import styled from "styled-components";
import LayoutWrapper from "../../layout/LayoutWrapper";
import pxToRem from "../../../utils/pxToRem";
import FilterButton from "../../elements/FilterButton";

const tags = [
  "beauty",
  "consulting",
  "entertainment",
  "fashion",
  "lifestyle",
  "parenting",
  "tech",
  "travel",
  "sport",
];

const TalentFiltersWrapper = styled.section`
  padding: ${pxToRem(80)} 0;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    padding: ${pxToRem(24)} 0;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(32)};
  width: 100%;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    flex-direction: column;
    align-items: flex-start;
    gap: ${pxToRem(24)};
  }
`;

const Title = styled.p`
  text-transform: uppercase;
  opacity: 0.6;
  white-space: nowrap;
`;

const FilterList = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  gap: ${pxToRem(32)};

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const InnerFilterList = styled.div`
  display: flex;
  gap: ${pxToRem(16)};
  flex-wrap: wrap;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    gap: ${pxToRem(8)};
  }
`;

const ClearTrigger = styled.button`
  white-space: nowrap;

  transition: all var(--transition-speed-default) var(--transition-ease);

  &:hover {
    opacity: 0.6;
  }

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    text-align: left;
  }
`;

type Props = {
  activeTags: string[];
  setActiveTags: (tags: string[]) => void;
};

const TalentFilters = (props: Props) => {
  const { setActiveTags, activeTags } = props;

  return (
    <TalentFiltersWrapper>
      <LayoutWrapper>
        <Inner>
          <Title className="type-button">Filter by</Title>
          <FilterList>
            <InnerFilterList>
              {tags.map((tag, i) => (
                <FilterButton
                  tag={tag}
                  key={i}
                  activeTags={activeTags}
                  setActiveTags={setActiveTags}
                />
              ))}
            </InnerFilterList>
            <ClearTrigger
              className="type-caption"
              onClick={() => setActiveTags([])}
            >
              Clear filter
            </ClearTrigger>
          </FilterList>
        </Inner>
      </LayoutWrapper>
    </TalentFiltersWrapper>
  );
};

export default TalentFilters;
