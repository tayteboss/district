import styled from "styled-components";
import { HomePageType } from "../../../shared/types/types";
import LayoutWrapper from "../../layout/LayoutWrapper";
import MultiTypeTitle from "../MultiTypeTitle";
import pxToRem from "../../../utils/pxToRem";

const HomePortfolioWrapper = styled.section`
  margin-bottom: ${pxToRem(64)};
  position: relative;
  z-index: 2;
  background: var(--colour-off-white);

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    margin-bottom: ${pxToRem(24)};
  }
`;

const Inner = styled.div``;

type Props = {
  portfolioTitle: HomePageType["portfolioTitle"];
};

const HomePortfolio = (props: Props) => {
  const { portfolioTitle } = props;

  return (
    <>
      {portfolioTitle && (
        <HomePortfolioWrapper>
          <LayoutWrapper>
            <Inner>
              <MultiTypeTitle
                data={portfolioTitle}
                linkUrl="/roster"
                linkTitle="Roster"
              />
            </Inner>
          </LayoutWrapper>
        </HomePortfolioWrapper>
      )}
    </>
  );
};

export default HomePortfolio;
