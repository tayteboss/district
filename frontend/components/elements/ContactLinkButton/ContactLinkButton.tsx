import Link from "next/link";
import styled from "styled-components";
import pxToRem from "../../../utils/pxToRem";

const ContactLinkButtonWrapper = styled.div`
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

const ContactLinkButton = (props: Props) => {
  const { title, linkUrl, linkTitle } = props;

  return (
    <ContactLinkButtonWrapper>
      <Title className="type-button">{title}</Title>
      {linkUrl && linkTitle && (
        <Link href={linkUrl} target="_blank" className="type-button hover-link">
          {linkTitle}
        </Link>
      )}
    </ContactLinkButtonWrapper>
  );
};

export default ContactLinkButton;
