import styled from "styled-components";
import { ServiceType } from "../../../shared/types/types";
import ServiceCard from "../ServiceCard";
import { useInView } from "react-intersection-observer";

const ServicesListWrapper = styled.section`
  position: relative;
  z-index: 2;
  background: var(--colour-off-white);
`;

type Props = {
  data: ServiceType[];
};

const ServicesList = (props: Props) => {
  const { data } = props;

  const hasData = data && data.length > 0;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: "-50px",
  });

  return (
    <ServicesListWrapper ref={ref}>
      {hasData &&
        data.map((item, i) => (
          <ServiceCard
            title={item?.title}
            items={item?.listItems}
            key={i}
            inView={inView}
            index={i}
          />
        ))}
    </ServicesListWrapper>
  );
};

export default ServicesList;
