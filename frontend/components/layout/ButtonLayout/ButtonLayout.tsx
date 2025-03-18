import styled from "styled-components";

const ButtonLayoutWrapper = styled.div``;

type Props = {
  children: React.ReactNode;
};

const ButtonLayout = (props: Props) => {
  const { children } = props;

  return (
    <ButtonLayoutWrapper className="type-button">
      {children}
    </ButtonLayoutWrapper>
  );
};

export default ButtonLayout;
