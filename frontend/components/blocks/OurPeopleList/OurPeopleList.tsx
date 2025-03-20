import styled from "styled-components";
import { AboutPageType } from "../../../shared/types/types";
import LayoutWrapper from "../../layout/LayoutWrapper";
import LayoutGrid from "../../layout/LayoutGrid";
import PersonCard from "../PersonCard";
import pxToRem from "../../../utils/pxToRem";

const OurPeopleListWrapper = styled.section`
  padding: ${pxToRem(64)} 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    "cell1 cell1 . . . . . ."
    ". . . cell2 cell2 . cell3 cell3"
    "cell4 cell4 . . . . . ."
    ". . . . . . cell5 cell5"
    "cell6 cell6 . cell7 cell7 . . .";
  grid-column-gap: ${pxToRem(16)};
  align-items: start;

  @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
    grid-template-columns: repeat(4, minmax(0, 1fr));

    grid-template-areas:
      "cell1 cell1 . ."
      ". . cell2 cell2"
      "cell3 cell3 . . "
      ". . cell4 cell4"
      "cell5 cell5 . ."
      ". . cell6 cell6"
      "cell7 cell7 . .";
  }
`;

type Props = {
  data: AboutPageType["people"];
};

const OurPeopleList = (props: Props) => {
  const { data } = props;

  const hasData = data && data.length > 0;

  return (
    <OurPeopleListWrapper>
      <LayoutWrapper>
        <Grid>
          {hasData &&
            data.map((item, i) => (
              <PersonCard
                name={item?.name}
                position={item?.position}
                image={item?.image}
                key={i}
              />
            ))}
        </Grid>
      </LayoutWrapper>
    </OurPeopleListWrapper>
  );
};

export default OurPeopleList;
