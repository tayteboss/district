import styled from "styled-components";
import { AboutPageType } from "../../../shared/types/types";
import MultiTypeTitle from "../MultiTypeTitle";
import LayoutWrapper from "../../layout/LayoutWrapper";
import pxToRem from "../../../utils/pxToRem";

const AboutIntroWrapper = styled.section`
  margin-bottom: ${pxToRem(120)};

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    margin-bottom: ${pxToRem(64)};
  }
`;

type Props = {
  heroSubTitle: AboutPageType["heroSubTitle"];
  heroTitle: AboutPageType["heroTitle"];
  heroDescription: AboutPageType["heroDescription"];
};

const AboutIntro = (props: Props) => {
  const { heroSubTitle, heroTitle, heroDescription } = props;

  return (
    <AboutIntroWrapper>
      <LayoutWrapper>
        {heroTitle && (
          <MultiTypeTitle
            data={heroTitle}
            subTitle={heroSubTitle}
            description={heroDescription}
          />
        )}
      </LayoutWrapper>
    </AboutIntroWrapper>
  );
};

export default AboutIntro;
