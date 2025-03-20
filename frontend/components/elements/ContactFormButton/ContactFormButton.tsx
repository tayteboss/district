import Link from "next/link";
import styled from "styled-components";
import pxToRem from "../../../utils/pxToRem";
import ButtonLayout from "../../layout/ButtonLayout";

const ContactFormButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(16)};
`;

const Title = styled.p`
  opacity: 0.6;
  text-transform: capitalize !important;
`;

type Props = {
  title: string;
  linkUrl?: string;
  linkTitle?: string;
};

const ContactFormButton = (props: Props) => {
  const { title, linkUrl, linkTitle } = props;

  return (
    <ContactFormButtonWrapper>
      <Title className="type-button">{title}</Title>
      {linkUrl && linkTitle && (
        <Link href={linkUrl} target="_blank">
          <ButtonLayout>{linkTitle}</ButtonLayout>
        </Link>
      )}
    </ContactFormButtonWrapper>
  );
};

export default ContactFormButton;
