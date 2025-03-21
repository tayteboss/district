import { NextSeo } from "next-seo";
import styled from "styled-components";
import LayoutWrapper from "../components/layout/LayoutWrapper";
import pxToRem from "../utils/pxToRem";
import Link from "next/link";

const PageWrapper = styled.div`
  padding-top: var(--header-h);
  position: relative;
  z-index: 2;
  margin-bottom: 100vh;
  background: var(--colour-matcha);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  padding: ${pxToRem(100)} 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-align: center;
    transition: all var(--transition-speed-slow) var(--transition-ease);
  }

  a:hover {
    filter: drop-shadow(0px 0px 15.289px #f6f4ed)
      drop-shadow(0px 0px 30.577px #f6f4ed)
      drop-shadow(0px 0px 107.02px #f6f4ed)
      drop-shadow(0px 0px 214.04px #f6f4ed);
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const Page = () => {
  return (
    <PageWrapper>
      <NextSeo title="404 | Sorry we couldn't find that page" />
      <LayoutWrapper>
        <Inner>
          <Title className="type-super">404 Error—</Title>
          <Link href="/" className="type-super hover-link">
            Return Home
          </Link>
        </Inner>
      </LayoutWrapper>
    </PageWrapper>
  );
};

export default Page;
