import styled from "styled-components";
import { AboutPageType } from "../../../shared/types/types";
import LayoutWrapper from "../../layout/LayoutWrapper";
import MultiTypeTitle from "../MultiTypeTitle";
import pxToRem from "../../../utils/pxToRem";

const OurPeopleTitleWrapper = styled.section`
  padding-top: ${pxToRem(64)};
`;

type Props = {
  data: AboutPageType["ourPeopleTitle"];
};

const OurPeopleTitle = (props: Props) => {
  const { data } = props;

  return (
    <OurPeopleTitleWrapper>
      <LayoutWrapper>
        {data && (
          <MultiTypeTitle data={data} subTitle="Our people" useLeftAlign />
        )}
      </LayoutWrapper>
    </OurPeopleTitleWrapper>
  );
};

export default OurPeopleTitle;
