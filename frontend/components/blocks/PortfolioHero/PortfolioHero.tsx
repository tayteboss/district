import styled from "styled-components";
import { PortfolioPageType } from "../../../shared/types/types";
import LayoutWrapper from "../../layout/LayoutWrapper";
import MultiTypeTitle from "../MultiTypeTitle";

const PortfolioHeroWrapper = styled.section``;

type Props = {
  heroTitle: PortfolioPageType["heroTitle"];
};

const PortfolioHero = (props: Props) => {
  const { heroTitle } = props;

  return (
    <PortfolioHeroWrapper>
      <LayoutWrapper>
        {heroTitle && <MultiTypeTitle data={heroTitle} />}
      </LayoutWrapper>
    </PortfolioHeroWrapper>
  );
};

export default PortfolioHero;
